/** @jsx jsx */
import React, { useEffect, useRef, useState } from 'react';
// import Link from "./Link";
import { jsx, Link, useThemeUI } from 'theme-ui';
import { getColor } from '@theme-ui/color';
// import paintStroke from '../images/paint-stroke.png';

export default function SquiggleLink({ children, active = false, ...props }) {
  const { theme } = useThemeUI();
  const ref = useRef(null);
  const [color, setColor] = useState('red');

  useEffect(() => {
    const computedStyles = window.getComputedStyle(ref.current);
    const strokeColor = theme?.colors[props.color].split('(')[1].split(')')[0];
    const variableValue = computedStyles.getPropertyValue(strokeColor).trim();
    setColor(encodeURIComponent(variableValue));
  }, []);

  return (
    <Link
      {...props}
      ref={ref}
      sx={{
        ...props.sx,
        position: 'relative',
        cursor: 'pointer',
        color: active
          ? `${getColor(theme, 'background')} !important`
          : 'inherit !important',
        transition: 'color .3s',
        zIndex: '1',
        ':after': {
          cursor: 'pointer',
          content: '""',
          position: 'absolute',
          left: '-15%',
          transition: 'opacity .2s',
          opacity: active ? '100%' : '0%',
          width: active ? '130%' : 0,
          height: '100%',
          backgroundPosition: '0 100%',
          backgroundRepeat: 'repeat-x',
          backgroundColor: 'transparent',
          backgroundSize: '100% 100%',
          zIndex: '-1',
        },
        '@media only screen and (hover: hover)': {
          ':hover': {
            color: `${getColor(theme, 'background')} !important`,
            ':after': {
              width: '130%',
              opacity: active ? '100%' : '65%',
            },
          },
        },
      }}
    >
      {children}
    </Link>
  );
}
