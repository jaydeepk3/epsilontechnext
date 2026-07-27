'use client';

import { useEffect } from 'react';
import clarity from '@microsoft/clarity';

const CLARITY_PROJECT_ID = 'xsxchm37iz';

export function MicrosoftClarity() {
  useEffect(() => {
    // Defer Clarity initialization to prevent main thread blocking during page load/hydration
    const initClarity = () => {
      clarity.init(CLARITY_PROJECT_ID);
    };

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(initClarity, { timeout: 3000 });
      return () => window.cancelIdleCallback(idleId);
    } else {
      const timerId = setTimeout(initClarity, 2500);
      return () => clearTimeout(timerId);
    }
  }, []);

  return null;
}
