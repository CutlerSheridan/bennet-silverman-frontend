/** @jsx jsx */
import React, { useState, useRef, useEffect, memo, useContext } from "react";
import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
// import ReactPlayer from "react-player";
import ReactPlayer from 'react-player/lazy'
import { jsx, Box, Heading } from "theme-ui";
import { useMediaQuery } from "usehooks-ts";
import VideoModal from "./VideoModal";
import _ from "lodash";
import BannerLoadedContext from "../context/BannerLoadedContext";
import { browserName, CustomView } from 'react-device-detect';
/**
 * GRID ELEMENT FOR EACH WORK
 */
export default function WorkGridEl({ work, ...props }) {
	const videoUrl = work.videoUrl;
	const videoLoop = _.get(work, '_rawVideoLoop.asset.url', false) || work.videoUrl;
	// const thumbnail = work._rawThumbnail.asset.url;
	const [isHovered, setIsHovered] = useState(false);
	const [isVideoReady, setVideoReady] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const isMobile = useMediaQuery('(max-width: 1024px)');

	// get whether the main banner has loaded yet
	const { bannerLoaded } = useContext(BannerLoadedContext);

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);
	const handleClick = () => {
		if (!videoUrl) return;
		setShowModal(true);
	}

	/** animation stuff  */
	const transition = { duration: 0.3, ease: "easeInOut" };

	const variants = {
		initial: { opacity: 0 },
		visible: { opacity: 1, transition },
		hidden: { opacity: 0, transition },
	};
	const textVariants = {
		initial: { opacity: 0 },
		visible: { originY: 0, scaleY: 1, transition },
		hidden: { originY: 0, scaleY: 0, transition },
	};

	const absoluteCenterStyles = {
		position: "absolute",
		top: '0',
		left: '0',
		// transform: 'translate(-50%, -50%)',
		width: "100%",
		height: "100%",
	}

	const textShadowColor = 'rgba(0,0,0,.2)';

	const isSafari = useRef(false);
	useEffect(() => {
		isSafari.current = browserName === 'Safari';
	}, [browserName])
	function onStart(): void {
		setVideoReady(true);
	}

	return (
		<React.Fragment>

			<VideoModal work={work} show={showModal} setShow={setShowModal} />
			<motion.div
				{...props}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onClick={handleClick}
				sx={{
					iframe: {
						width: '100%',
						minHeight: '100%',
						objectFit: isSafari ? undefined : 'cover',
					},
					cursor: videoLoop ? 'pointer' : '',
				}}
			>
				{/* Image on top */}
				<motion.div
					variants={variants}
					initial="visible"
					animate={isHovered && isVideoReady ? "hidden" : "visible"}
					sx={{
						...absoluteCenterStyles
					}}
				>
					<GatsbyImage alt={work.title} image={work.thumbnail.asset.gatsbyImageData} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />

					{/* <Image src={thumbnail} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
				</motion.div>

				{/* Text on top */}
				<motion.aside
					variants={textVariants}
					animate={isHovered || isMobile ? "visible" : "hidden"}
					sx={{
						...absoluteCenterStyles,
						zIndex: 5,
						textAlign: 'center',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						p: 1,
						textTransform: 'uppercase'
						// backfaceVisibility: 'hidden',
						// transform: 'translateZ(0)',
						// WebkitFontSmoothing: 'subpixel-antialiased',
						// willChange: 'transform',
					}}
				>
					<Box>
						<Heading as="h3" sx={{
							m: 0,
							mb: 10,
							fontSize: [4, 3, 4, 5],
							fontWeight: 600,
							textShadow: `-1px 1px 0 ${textShadowColor}, 
										1px 1px 0 ${textShadowColor},
										1px -1px 0 ${textShadowColor},
										-1px -1px 0 ${textShadowColor}`

							// backfaceVisibility: 'hidden',
							// transform: 'translateZ(0)',
							// WebkitFontSmoothing: 'subpixel-antialiased',
							// color: "white",
						}}>{work.title}</Heading>
					</Box>

				</motion.aside>


				{/* Video on bottom */}
				{/* bannerLoaded &&  */!isMobile && <motion.div
					variants={variants}
					initial="hidden"
					animate={isHovered && isVideoReady ? "visible" : "hidden"}
					sx={{
						...absoluteCenterStyles
					}}>
					<Box sx={{ position: 'relative', paddingTop: (9 / 16) * 100 + '%' }}>
						<ReactPlayer
							className='react-player'
							width='100%'
							height='100%'
							url={videoLoop}
							playing={!isVideoReady || isHovered}
							playsinline={true}
							config={{
								vimeo: {
									playerOptions: {
										autopause: false,
									}
								}
							}}
							muted={true}
							loop={true}
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								pointerEvents: 'none',
							}}
							onStart={onStart}
						/>
					</Box>


				</motion.div>}

			</motion.div>

		</React.Fragment>


	)
}

export const MemoWorkGridEl = memo(WorkGridEl);

