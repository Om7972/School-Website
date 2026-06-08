import { config, proxyPostHog } from '../../_lib/posthogProxy.js';

export { config };

export default async function handler(req, res) {
  try {
    await proxyPostHog(req, res, 'https://us-assets.i.posthog.com/static');
  } catch (error) {
    console.error('PostHog static proxy error:', error);
    res.status(502).json({ error: 'PostHog static proxy failed' });
  }
}
