/** @jsx jsx */
import { Box, jsx, Button } from 'theme-ui';
import React from 'react';
import { HeadFC, Script } from 'gatsby';
import { SEO } from '../components/seo';
import { MainBanner } from '../components/MainBanner';
import FlexCenter from '../components/FlexCenter';
import Link from '../components/Link';
import Landing from '../components/Landing.jsx';
import './index.css';

import BannerLoadedContext from '../context/BannerLoadedContext';
import WorksGrid from '../components/WorksGrid';

const IndexPage = ({ location, path }) => {
  const [bannerLoaded, setBannerLoaded] = React.useState(false);
  const value = {
    bannerLoaded,
    setBannerLoaded,
  };
  return (
    <div>
      <Script
        src=" https://kit.fontawesome.com/1effc23ed3.js"
        crossOrigin="anonymous"
      />

      <Landing />

      <BannerLoadedContext.Provider value={value}>
        {/* <MainBanner /> */}
        <Box
          id="work"
          className="mainBody"
          sx={{ backgroundColor: 'background', position: 'relative' }}
        >
          <WorksGrid />
        </Box>
      </BannerLoadedContext.Provider>

      <FlexCenter mt={[3, 4]} p={[1, 1, 0]}>
        <Link to="/contact">
          <Button
            sx={{
              fontSize: [3, 4],
              variant: 'buttons.outlined',
            }}
          >
            Contact
          </Button>
        </Link>
      </FlexCenter>
    </div>
  );
};
export default IndexPage;

export const Head: HeadFC = () => <SEO />;
