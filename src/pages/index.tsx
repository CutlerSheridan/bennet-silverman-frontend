/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import React from 'react';
import { HeadFC } from 'gatsby';
import { SEO } from '../components/seo';
import { MainBanner } from '../components/MainBanner';

import BannerLoadedContext from '../context/BannerLoadedContext';
import WorksGrid from '../components/WorksGrid';

const IndexPage = ({ location, path }) => {
  const [bannerLoaded, setBannerLoaded] = React.useState(false);
  const value = {
    bannerLoaded,
    setBannerLoaded,
  };
  return (
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
  );
};
export default IndexPage;

export const Head: HeadFC = () => <SEO />;
