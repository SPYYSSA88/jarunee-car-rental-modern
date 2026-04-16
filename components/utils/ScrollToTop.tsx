'use client';

import { useEffect } from 'react';

export default function ScrollToTop() {
    useEffect(() => {
        // บังคับให้เบราว์เซอร์เลื่อนกลับไปด้านบนสุดเสมอเมื่อโหลดหน้าเว็บ
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return null;
}
