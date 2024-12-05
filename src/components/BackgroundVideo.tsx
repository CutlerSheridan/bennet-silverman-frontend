/** @jsx jsx */
import { Box, jsx } from "theme-ui"
import React, { useEffect, useRef, useState } from "react"
import ReactPlayer from "react-player"
import { useElementSize } from "usehooks-ts";
import Vimeo from "@u-wave/react-vimeo";

export function BackgroundVideo ({ videoUrl, startFrom = 0, onPlaying = () => {}, ...props }) {
	const isVimeo = videoUrl.includes('vimeo.com');
	let playerRef = useRef(null);
	let internalPlayer = useRef(null);
	// assume 16/9
	let nativeHeight = useRef(1080);
	let nativeWidth = useRef(1920);
	const [innerWidth, setInnerWidth] = useState('100%');
	const [sizeRef, { width, height }] = useElementSize();


	// when the element resizes, make the video resize to maintain its aspect ratio
	const triggerWidthChanges = () => {
		if (!nativeHeight.current || !nativeWidth.current) return;
		let vidHeight = Math.ceil(height);
		let vidWidth = Math.ceil(vidHeight * (nativeWidth.current / nativeHeight.current));

		if (vidWidth < width) {
			vidWidth = Math.ceil(width);
			vidHeight = Math.ceil(vidWidth * (nativeHeight.current / nativeWidth.current))
		}

		setInnerWidth(vidWidth)
	}

	useEffect(() => {
		// get internal player for non vimeos
		if (!playerRef.current) return;
		if (!playerRef.current.constructor.name.toLowerCase().includes('vimeo') && !isVimeo) {
			internalPlayer.current = playerRef.current.getInternalPlayer();
		}
	}, [playerRef])

	useEffect(() => {
		triggerWidthChanges();
	}, [width, nativeHeight.current, nativeWidth.current]);

	const outerStyle = {
		position: 'relative',
		overflow: 'hidden',
		width: '100%',
		height: '100%',
		...props.sx
	};
	const innerStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: innerWidth,
		height: '100%',
	};

	const iFrameStyles = {
		iframe: {
			width: '100%',
			height: '100%',
			objectFit: 'cover'
		}
	}
	const vimeoReady = (player) => {
		internalPlayer.current = player;
		if (startFrom > 0) {
			player.setCurrentTime(startFrom)
		}
		Promise.all([player.getVideoWidth(), player.getVideoHeight()]).then(function (dimensions) {
			nativeWidth.current = dimensions[0];
			nativeHeight.current = dimensions[1];
		});
	}

	return (
		<Box ref={sizeRef} sx={{ ...outerStyle }}>
			{/* Vimeo player (gets native dimensions) */}
			{isVimeo &&
				<Vimeo {...props} 
					sx={{ ...iFrameStyles, ...innerStyle }} 
					video={videoUrl} 
					onReady={vimeoReady} 
					onPlaying={onPlaying}
					ref={playerRef} 
					controls={false}
					autoplay={true}
					loop={true}
					muted={true}
					showByline={false}
					showPortrait={false}
					showTitle={false}
					background={true}
					keyboard={false}
					responsive={true}
					autopause={false}
					/>
			}

			{/* Players other than Vimeo */}
			{!isVimeo &&
				<Box sx={{ ...innerStyle }}>
					<Box sx={{ position: 'relative', paddingTop: ((9 / 16) * 100) + '%' }}>
						<ReactPlayer
							{...props}
							ref={playerRef}
							width='100%'
							height='100%'
							url={videoUrl}
							loop={true}
							muted={true}
							playing={true}
							onStart={onPlaying}
							playsinline={true}
							sx={{
								position: 'absolute',
								top: 0,
								left: 0,
								...iFrameStyles
							}}
						/>
					</Box>
				</Box>
			}
		</Box>
	)

}

export const MemoBackgroundVideo = React.memo(BackgroundVideo);