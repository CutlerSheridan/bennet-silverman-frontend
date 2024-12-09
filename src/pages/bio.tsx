/** @jsx jsx */
import * as React from 'react';
import { graphql, HeadFC, PageProps, useStaticQuery } from 'gatsby';
import Layout from '../components/layouts/Layout';
import { SEO } from '../components/seo';
import { Masonry } from 'masonic';
import { PortableText } from '@portabletext/react';
import { Box, Button, Container, Flex, Grid, jsx, useThemeUI } from 'theme-ui';
import Link from '../components/Link';
import FlexCenter from '../components/FlexCenter';
import PageTitle from '../components/PageTitle';
import { useWindowSize } from 'usehooks-ts';
import { useEffect, useState } from 'react';
import Image from 'gatsby-plugin-sanity-image';

function mapRange(value, inputMin, inputMax, outputMin, outputMax) {
  // First, normalize the input value to be in the range [0, 1]
  const normalizedValue = (value - inputMin) / (inputMax - inputMin);

  // Map the normalized value to the output range
  const mappedValue = normalizedValue * (outputMax - outputMin) + outputMin;

  // Return the mapped value
  return mappedValue;
}

const ImagesBanner = ({ images }) => {
  const emToPx = (emValue) => {
    const rootFontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    return emValue * rootFontSize;
  };
  const { theme } = useThemeUI();
  const { breakpoints } = theme;
  const { width, height } = useWindowSize();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [filteredImages, setFilteredImages] = useState(images);
  useEffect(() => {
    const isSmallScreen = window.innerWidth < emToPx(parseInt(breakpoints[0]));
    setIsSmallScreen(isSmallScreen);
  }, [width]);

  useEffect(() => {
    // add object position to images
    if (isSmallScreen) {
      setFilteredImages([images[1]]);
    } else {
      setFilteredImages([...images]);
    }
  }, [isSmallScreen]);
  return (
    <Grid columns={[1, filteredImages.length]} gap={0}>
      {filteredImages.map((image) => (
        <Box
          sx={{
            position: 'relative',
            overflow: 'hidden',
            paddingBottom: 'calc(9 / 16 * 100%)',
            height: 0,
          }}
          key={image.src}
        >
          <Image
            {...image}
            style={{
              objectFit: 'cover',
              display: 'block',
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            src={image.src}
          />
        </Box>
      ))}
    </Grid>
  );
};

const ContactPage: React.FC<PageProps> = ({ location }) => {
  const data = useStaticQuery(graphql`
    {
      sanitySiteConfig {
        _rawBioImages(resolveReferences: { maxDepth: 10 })
        _rawBio(resolveReferences: { maxDepth: 10 })
      }
    }
  `);

  const imageSrcs = data.sanitySiteConfig._rawBioImages.map((img) => ({
    src: img.asset.url,
  }));
  console.log(imageSrcs);
  const bio = data.sanitySiteConfig._rawBio;
  const MasonryImage = ({ index, data: { src }, width }) => (
    <div>
      <img src={src} style={{ maxWidth: '100%' }} />
    </div>
  );

  const BioImagesMasonry = (props) => {
    if (imageSrcs.length > 2) {
      return <Masonry items={imageSrcs} render={MasonryImage} />;
    } else {
      return (
        <Masonry items={imageSrcs} render={MasonryImage} columnCount={1} />
      );
    }
  };

  const { theme } = useThemeUI();
  const { breakpoints } = theme;
  return (
    <Container
      sx={{
        pt: [
          theme.layout.container.paddingTop - 50,
          theme.layout.container.paddingTop - 20,
        ],
        maxWidth: 'none',
      }}
    >
      <ImagesBanner images={data.sanitySiteConfig._rawBioImages} />
      <Container sx={{ maxWidth: 'paragraph', pt: [2, 4] }}>
        <Box
          p={[3, 0]}
          sx={{
            'p:first-child': {
              mt: 0,
            },
            a: { fontStyle: 'italic' },
          }}
        >
          <PortableText value={bio} />
        </Box>
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
      </Container>
    </Container>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <SEO title="Bio" />;
