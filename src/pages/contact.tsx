/** @jsx jsx */
import { Box, Heading, jsx, Paragraph } from 'theme-ui';
import * as React from 'react';
import { graphql, HeadFC, PageProps, useStaticQuery } from 'gatsby';
import { SEO } from '../components/seo';
import { Container, Grid, Link } from 'theme-ui';
import WebLinks from '../components/WebLinks';
import FlexCenter from '../components/FlexCenter';
import { StaticImage } from 'gatsby-plugin-image';

const ContactPage: React.FC<PageProps> = ({ location }) => {
  const data = useStaticQuery(graphql`
    {
      sanitySiteConfig {
        _rawBioImages(resolveReferences: { maxDepth: 10 })
        contactLinks {
          url
          type
          _key
        }
      }
    }
  `);

  return (
    <Container sx={{ maxWidth: 800, a: { display: 'block' } }}>
      <Heading sx={{ textAlign: 'center' }} mb={3} variant="text.subtitle">
        CONTACT
      </Heading>
      <Box m={4}>
        <FlexCenter>
          <Heading mb={2} sx={{ fontWeight: 300 }}>
            <Link href="mailto:bennetsilverman@gmail.com" target="_blank">
              BennetSilverman@gmail.com
            </Link>
          </Heading>
        </FlexCenter>
        <FlexCenter sx={{ fontSize: [3, 4] }}>
          <WebLinks
            sx={{ width: 150, fontSize: [4] }}
            show={['Instagram', 'Email']}
          />
        </FlexCenter>
      </Box>
      <Box p={[4]} sx={{ textAlign: ['center', 'left'] }}>
        <Grid columns={[1, 2]}>
          <Box mb={3}>
            <Heading mb={2}>Television & Film | Artists First</Heading>
            <Paragraph>Kevin Parker</Paragraph>
            <Link href="mailto:allparker@artistsfirst-la.com" target="_blank">
              allparker@artistsfirst-la.com
            </Link>
            <Link href="tel:3102744027" target="_blank">
              (310) 274-4027
            </Link>
          </Box>
          <Box sx={{ textAlign: ['center', 'right'] }}>
            <StaticImage
              src="../images/artistsfirst_highres.png"
              placeholder="blurred"
              alt="Artists First"
              width={200}
            />
          </Box>
        </Grid>
        <Grid columns={[1, 2]} mt={5}>
          <Box mb={3}>
            <Heading mb={2}>Commercials | Alpen Pictures</Heading>
            <Paragraph>Christian Heuer</Paragraph>
            <Link href="mailto:christian@alpenpictures.com">
              christian@alpenpictures.com
            </Link>
            <Link
              href="https://www.alpenpictures.com/directors/bennet-silverman/"
              target="_blank"
            >
              alpenpictures.com
            </Link>
          </Box>
          <Box sx={{ textAlign: ['center', 'right'] }}>
            <Link
              href="https://www.alpenpictures.com/directors/bennet-silverman/"
              target="_blank"
            >
              <StaticImage
                src="../images/alpenwhite.png"
                placeholder="blurred"
                alt="Alpen Pictures"
                width={200}
                sx={{ mb: 4 }}
              />
            </Link>
          </Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <SEO title="Contact" />;
