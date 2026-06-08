import { config, proxyPostHog } from '../_lib/posthogProxy.js';

export { config };

export default async function handler(req, res) {
  try {
    await proxyPostHog(req, res, 'https://us.i.posthog.com');
  } catch (error) {
    console.error('PostHog ingest proxy error:', error);
    res.status(502).json({ error: 'PostHog proxy failed' });
  }
}
