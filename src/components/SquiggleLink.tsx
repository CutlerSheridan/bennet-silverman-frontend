/** @jsx jsx */
import React, { useEffect, useRef, useState } from 'react';
// import Link from "./Link";
import { jsx, Link, useThemeUI } from 'theme-ui';
import { getColor } from '@theme-ui/color';

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
        ':after': {
          cursor: 'pointer',
          content: '""',
          position: 'absolute',
          bottom: '-2px',
          left: 0,
          transition: 'width ease 0.3s',
          width: active ? '100%' : 0,
          height: '10px',
          backgroundPosition: '0 100%',
          backgroundRepeat: 'repeat-x',
          // backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .3s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-15px);}}%3C/style%3E%3Cpath fill='none' stroke='${color}' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E")`,
          // backgroundColor: getColor(theme, 'text'),
          backgroundImage: `url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle%3C/style%3E%3Cpath fill='none' stroke='${color}' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E")`,
          backgroundSize: '18px 4px',
        },
        ':hover': {
          ':after': {
            width: '100%',
            // backgroundColor: getColor(theme, 'text'),
          },
        },
      }}
    >
      {children}
    </Link>
  );
}
