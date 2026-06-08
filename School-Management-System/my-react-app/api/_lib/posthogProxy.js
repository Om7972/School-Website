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

export async function proxyPostHog(req, res, upstreamBase) {
  const pathParam = req.query.path;
  const pathStr = Array.isArray(pathParam) ? pathParam.join('/') : pathParam || '';

  const requestUrl = req.url || '';
  const queryIndex = requestUrl.indexOf('?');
  const search = queryIndex >= 0 ? requestUrl.slice(queryIndex) : '';

  const targetUrl = `${upstreamBase.replace(/\/$/, '')}/${pathStr}${search}`;

  const headers = {};
  const forwardHeaders = ['content-type', 'content-encoding', 'user-agent', 'accept', 'accept-encoding'];
  for (const header of forwardHeaders) {
    if (req.headers[header]) {
      headers[header] = req.headers[header];
    }
  }

  const body = ['GET', 'HEAD'].includes(req.method) ? undefined : await readBody(req);

  const response = await fetch(targetUrl, {
    method: req.method,
    headers,
    body: body?.length ? body : undefined,
  });

  res.status(response.status);

  const skipHeaders = new Set(['transfer-encoding', 'connection', 'content-encoding', 'content-length']);
  response.headers.forEach((value, key) => {
    if (!skipHeaders.has(key.toLowerCase())) {
      res.setHeader(key, value);
    }
  });

  const buffer = Buffer.from(await response.arrayBuffer());
  res.end(buffer);
}
