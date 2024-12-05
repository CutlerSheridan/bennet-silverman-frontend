
/** @jsx jsx */
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { motion } from 'framer-motion';
import { BackgroundVideo } from './BackgroundVideo';
import { Box, jsx } from 'theme-ui';
import { useMediaQuery } from 'usehooks-ts';
import FlexCenter from "./FlexCenter";
import VideoModal from './VideoModal';
import BannerLoadedContext from '../context/BannerLoadedContext';
import _ from 'lodash';


export function MainBanner({ }) {
	// console.log(`<MainBanner> rendered`);
	const { setBannerLoaded } = React.useContext(BannerLoadedContext);
	const data = useStaticQuery(graphql`
		query {
			sanitySiteConfig {
				_rawMainWorks(resolveReferences: {maxDepth: 10})
			}
	}`);
	const work = data.sanitySiteConfig._rawMainWorks[0];
	let { videoUrl } = work;
	videoUrl = videoUrl + '#t=5s';
	// const videoLoop = _.get(work, 'videoLoop.asset.url', false) || videoUrl;
	const videoLoop = videoUrl;
	const [isHover, setHover] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const isMobile = useMediaQuery('(max-width: 1024px)')

	const variants = {
		show: { opacity: 1 },
		hide: { opacity: 0 }
	}
	const zIndex = 2;

	const backgroundReady = () => {
		setBannerLoaded(true)
	}
	return (
		<Box className="banner" id="banner" sx={{ height: '100vh' }}
			onMouseEnter={() => setHover(true)}
			onMouseOver={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<motion.div
				initial={false}
				animate={isHover || isMobile ? 'show' : 'hide'}
				variants={variants}
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					zIndex,
					width: '100%',
					p: 2,

				}}>

				<FlexCenter sx={{ flexDirection: 'column', fontSize: [4,5]}}>
					<Box sx={{ fontSize: [7,8], cursor: 'pointer'}} onClick={() => setShowModal(true)}>
						<FontAwesomeIcon icon={faCirclePlay} />
					</Box>
				</FlexCenter>

			</motion.div>
			
			<BackgroundVideo sx={{maskImage: 'linear-gradient(rgba(0, 0, 0, .8), rgba(0,0,0,.8))'}} videoUrl={videoLoop} onPlaying={backgroundReady} startFrom={7} />
			<VideoModal show={showModal} setShow={setShowModal} work={work} />
		</Box>
	)

}

export const MemoMainBanner = React.memo(MainBanner);