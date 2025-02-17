'use client';

import { useEffect } from 'react';

export default function CalendlyWidget() {
  useEffect(() => {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    head.appendChild(script);

    script.onload = () => {
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/sekhar546/connect-with-raja-sekhar-r',
        text: 'Schedule time with me',
        color: '#0069ff',
        textColor: '#ffffff'
      });
    };

    return () => {
      head.removeChild(script);
    };
  }, []);

  return null;
}
