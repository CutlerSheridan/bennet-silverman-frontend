/** @jsx jsx */
import { Heading, jsx } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import { useEffect, useRef, useState } from 'react';
import { Box } from 'theme-ui';
import Link from './Link';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import MobileMenu from './MobileMenu';
import { useWindowSize } from 'usehooks-ts';

const Header = (props, ref) => {
  const data = useStaticQuery(graphql`
    query {
      sanitySiteConfig {
        logo {
          asset {
            url
          }
        }
      }

      allSanityWork {
        distinct(field: { type: SELECT })
      }
    }
  `);

  return (
    <header
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 49,
        padding: ['20px', '20px 40px'],
        transition: 'background .25s ease',
        transform: 'translate3d(0,0,0)',
        margin: '0 auto',
        alignItems: 'center',
        display: 'flex',
        pointerEvents: 'none',
        'a, .mobile-menu': {
          pointerEvents: 'auto',
        },
      }}
    >
      <Box sx={{}}>
        {/* LOGO */}
        <Link to="/">
          <Heading as="h1" sx={{ fontSize: [4, 5, 6] }}>
            BS
          </Heading>
        </Link>
      </Box>
      <Box
        sx={{
          marginLeft: 'auto',
        }}
      >
        {/* RIGHT CONTENT */}
        {/* Hamburger menu */}
        <MobileMenu />
      </Box>
    </header>
  );
};

export default Header;
