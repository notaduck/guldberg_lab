import React, { useContext } from 'react';
import { Moon, Sun } from 'react-feather';
import { ThemeContext } from './ThemeContext';

const DarkToggle = () => {
  const { colorMode, setColorMode } = useContext(ThemeContext);
  const nextColormode = colorMode === 'light' ? 'dark' : 'light';
  const Icon = colorMode === 'light' ? Sun : Moon;

  if (!colorMode) {
    return null;
  }

  return (
    <Icon
      onClick={() => setColorMode(nextColormode)}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default DarkToggle;
