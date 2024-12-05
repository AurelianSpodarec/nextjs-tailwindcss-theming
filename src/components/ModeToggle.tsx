'use client'

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes'

function ModeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div>
      <div>
        Selected Theme: <span className="text-primary font-bold">{theme}</span>
      </div>
      <div className="flex space-x-4">
        <button type="button" onClick={() => { setTheme('light') }}>
          Light
        </button>
        <button type="button" onClick={() => { setTheme('dark') }}>
          Dark
        </button>
        <button type="button" onClick={() => { setTheme('pink') }}>
          Pink
        </button>
        <button type="button" onClick={() => { setTheme('imperial') }}>
          Imperial
        </button>
        <button type="button" onClick={() => { setTheme('system') }}>
          System
        </button>
      </div>
    </div>
  )
}

export default ModeToggle
