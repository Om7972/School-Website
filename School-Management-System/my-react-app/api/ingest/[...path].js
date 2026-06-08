export const config = {
  api: {
    bodyParser: false,
  },
};

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  try {
    const pathParam = req.query.path;
    const pathStr = Array.isArray(pathParam) ? pathParam.join('/') : pathParam || '';

    const requestUrl = req.url || '';
    const queryIndex = requestUrl.indexOf('?');
    const search = queryIndex >= 0 ? requestUrl.slice(queryIndex) : '';

    const targetUrl = `https://us.i.posthog.com/${pathStr}${search}`;

    const headers = {};
    for (const header of ['content-type', 'content-encoding', 'user-agent', 'accept', 'accept-encoding']) {
      if (req.headers[header]) headers[header] = req.headers[header];
    }

    const body = ['GET', 'HEAD'].includes(req.method) ? undefined : await readBody(req);

    const response = await fetch(targetUrl, {
      method: req.method,
      headers,
      body: body?.length ? body : undefined,
    });

    res.status(response.status);
    const buffer = Buffer.from(await response.arrayBuffer());
    res.setHeader('Content-Type', response.headers.get('content-type') || 'application/json');
    res.end(buffer);
  } catch (error) {
    console.error('PostHog ingest proxy error:', error);
    res.status(502).json({ error: 'PostHog proxy failed' });
  }
}
