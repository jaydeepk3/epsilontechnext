'use client';

import { useEffect } from 'react';
import clarity from '@microsoft/clarity';

const CLARITY_PROJECT_ID = 'xsxchm37iz';

export function MicrosoftClarity() {
  useEffect(() => {
    clarity.init(CLARITY_PROJECT_ID);
  }, []);

  return null;
}
