'use client';
import React, { useEffect, useState } from 'react';
import { Sun, SunDim } from 'lucide-react';

const ToggleTheme: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkTheme]);

  return (
    <div
      className={`hover-scale-110 hover:bg-primary-100 ${
        darkTheme ? 'text-secondary-50' : 'text-primary-600'
      }`}
      onClick={() => setDarkTheme(!darkTheme)}
    >
      {darkTheme ? <SunDim size={20} /> : <Sun size={20} />}
    </div>
  );
};

export default ToggleTheme;
