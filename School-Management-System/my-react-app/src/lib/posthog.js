import posthog from 'posthog-js';

let initialized = false;

function getPostHogHost() {
  return (import.meta.env.VITE_POSTHOG_HOST || '/ingest').replace(/\/+$/, '');
}

export function initPostHog() {
  const key = import.meta.env.VITE_POSTHOG_KEY;
  if (!key || initialized) return;

  posthog.init(key, {
    api_host: getPostHogHost(),
    ui_host: import.meta.env.VITE_POSTHOG_UI_HOST || 'https://us.posthog.com',
    person_profiles: 'identified_only',
    capture_pageview: false,
    capture_pageleave: true,
    autocapture: true,
    disable_session_recording: true,
  });

  initialized = true;
}

export function capturePageView(pathname, search = '') {
  if (!import.meta.env.VITE_POSTHOG_KEY) return;

  posthog.capture('$pageview', {
    $current_url: window.location.origin + pathname + search,
  });
}

export function captureEvent(eventName, properties = {}) {
  if (!import.meta.env.VITE_POSTHOG_KEY) return;
  posthog.capture(eventName, properties);
}

export { posthog };
