/** @jsx jsx */
import { Box, jsx, useThemeUI } from 'theme-ui';
import { AnimatePresence, motion } from 'framer-motion';
import { useStaticQuery, graphql } from 'gatsby';
import { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import FlexCenter from './FlexCenter';
import UnderlineLink from './UnderlineLink';
import WorkGridEl from './WorkGridEl';
import SquiggleLink from './SquiggleLink';

/**
 * FILTER BUTTONS FOR THE WORKS GRID
 */
const FilterButtons = ({ works, setFilteredWorks, ...props }) => {
  const context = useThemeUI();
  const filterTypes = _.uniq(works.map((a) => a.type));
  // alphabetize the filter types
  filterTypes.sort();

  // remove Sketch per email
  filterTypes.splice(filterTypes.indexOf('Sketch'), 1);

  // move Reel after Sketch
  const reelIndex = filterTypes.indexOf('Reel');
  if (reelIndex > -1) {
    filterTypes.splice(reelIndex, 1);
    filterTypes.push('Reel');
  }

  const allName = 'Show All';
  const featureName = 'Selected';
  const [tabActive, setTabActive] = useState(featureName);
  const [firstClick, setFirstClick] = useState(false);
  filterTypes.unshift(featureName);
  // filterTypes.unshift(allName)
  useEffect(() => {
    setFilteredWorks(works.filter((w) => w.featured));
  }, [works]);

  const handleClick = (name) => {
    setFirstClick(true);
    setTabActive(name);
    const filtered = works.filter((w) => w.type.includes(name));
    if (name == allName) {
      setFilteredWorks(works);
    } else if (name == featureName) {
      setFilteredWorks(works.filter((w) => w.featured));
    } else {
      setFilteredWorks(filtered);
    }
  };
  return (
    <Box {...props}>
      {filterTypes.map((a) => {
        const active = firstClick && tabActive == a && a != allName;
        return (
          <SquiggleLink
            active={active}
            sx={{
              color: active ? 'primary' : 'text',
              fontSize: [4, 5],
              fontWeight: 'threehundred',
              textTransform: 'uppercase',
              ':hover': { color: 'primary', opacity: 1 },
            }}
            color={active ? 'primary' : 'text'}
            onClick={() => handleClick(a)}
            key={a}
          >
            {a}
          </SquiggleLink>
        );
      })}
    </Box>
  );
};

export default () => {
  const data = useStaticQuery(graphql`
    {
      sanitySiteConfig {
        numWorksColumns
      }
      allSanityWork(sort: { orderRank: ASC }) {
        nodes {
          thumbnail {
            asset {
              gatsbyImageData(
                aspectRatio: 1.77777777
                placeholder: BLURRED
                fit: FILLMAX
              )
            }
          }
          _rawDescription(resolveReferences: { maxDepth: 10 })
          _rawVideoLoop(resolveReferences: { maxDepth: 10 })
          _id
          type
          title
          videoUrl
          role
          orderRank
          featured
          slug {
            current
          }
        }
      }
    }
  `);

  const works = data.allSanityWork.nodes;
  const [filteredWorks, setFilteredWorks] = useState(works);
  const numColumns = data.sanitySiteConfig.numWorksColumns;

  const value = {
    works,
    filteredWorks,
    setFilteredWorks,
  };

  const gridRef = useRef(null);
  const minGridHeight = useRef(1000);

  useEffect(() => {
    if (minGridHeight.current < window.innerHeight) {
      minGridHeight.current = window.innerHeight;
    }
  }, [filteredWorks]);

  return (
    <Box sx={{ paddingTop: 100 }}>
      <Box sx={{}}>
        <FlexCenter
          sx={{
            mb: 30,
            fontSize: [3],
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}
        >
          <FilterButtons
            works={works}
            setFilteredWorks={setFilteredWorks}
            sx={{
              width: '100%',
              maxWidth: 650,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
            }}
          />
          {/* <CategoryButtons /> */}
        </FlexCenter>
      </Box>

      <div
        className="works-grid"
        ref={gridRef}
        sx={{
          display: 'grid',
          gridGap: 0,
          gridTemplateColumns: [
            'repeat(1, 1fr)', // default to a stacked layout on small screens
            `repeat(2, 1fr)`, // mid way
            `repeat(${numColumns}, 1fr)`, // default to a stacked layout on small screens
          ],
          gridAutoRows: 'max-content',
          minHeight: minGridHeight.current,
        }}
      >
        <AnimatePresence>
          {filteredWorks.map((work) => (
            <motion.div
              className="work-card"
              key={work._id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              sx={{
                aspectRatio: '16/9',
                overflow: 'hidden',
                display: 'inline-block',
                position: 'relative',
              }}
            >
              <WorkGridEl work={work} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Box>
  );
};
