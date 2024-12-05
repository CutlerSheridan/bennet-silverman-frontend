import _ from "lodash"
import React, { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import ReactPlayer from "react-player"
import { Box } from "theme-ui"
import { useElementSize } from "usehooks-ts"
import Loading from "./Loading"
import Modal from "./Modal"
import VideoSummary from "./work/VideoSummary"

export default ({work, show, setShow}) => {
	const videoUrl = work.videoUrl;
	const [modalVideoLoaded, setModalVideoLoaded] = useState(false);
	useEffect(() => {
		if (show == true) {
			console.log("opening modal", videoUrl);
		}
	}, [show])
	
	return (
		<React.Fragment>
			{show && createPortal(
				<Modal onClose={() => setShow(false)}>

					<Box sx={{ position: 'relative', paddingTop: (9 / 16) * 100 + '%', iframe: { width: '100%', height: '100%', objectFit: 'cover' } }}>
						{!modalVideoLoaded && <Loading />}

						<ReactPlayer
							className='react-player'
							width='100%'
							height='100%'
							url={videoUrl} 
							controls={true}
							playing={true} 
							muted={false} 
							loop={true}
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								visibility: modalVideoLoaded ? 'visible' : 'hidden',
							}}
							onReady={() => setModalVideoLoaded(true)}
						/>
					</Box>
					<VideoSummary work={work} sx={{ mt: 20 }} />
				</Modal>
				,
				document.body
			)}
		</React.Fragment>

	)
}