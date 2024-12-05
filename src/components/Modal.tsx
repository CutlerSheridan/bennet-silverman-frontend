/** @jsx jsx */
import { AnimatePresence, motion } from "framer-motion"
import { jsx, Link } from "theme-ui"
import { Box, Button } from "theme-ui"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { createContext, useEffect, useRef } from "react";
import { useElementSize, useEventListener } from "usehooks-ts";

export default ({ onClose, children }) => {
	const transition = { duration: 1, ease: "easeInOut" };

	const close = () => {
		widthRef.current= '75vw';
		onClose()
	}
	const handleSideClick = (e) => {
		const target = e.target;
		if (!target.closest('.modalContent')) {
			close()
		}
	}
	const onKeydown = (e) => {
		console.log("keydown", e.key)
		close();
	}
	const documentRef = useRef<Document>(document)
	useEventListener('keydown', onKeydown, documentRef);
	const [sizeRef, { width, height }] = useElementSize();
	const widthRef = useRef('75vw');
	useEffect(() => {
		if (height == 0) return;
		// make it the right height
		if (height > window.innerHeight) {
			widthRef.current = parseInt(widthRef.current) - 2 + 'vw';
		}
	}, [height])
	
	return (
		<motion.div  className="modal"
			onClick={handleSideClick}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition }}
			exit={{ opacity: 0, transition }}
			sx={{
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				background: 'rgba(0,0,0,.75)',
				zIndex: 50,
			}}>
			<Box className="modalContent" ref={sizeRef} sx={{
				width: ['100vw', widthRef.current],
				textAlign: "center",
				p: [null,4],
			}}>
				{children}
			</Box>
			{/* close button */}
			<Link sx={{
				position: 'absolute',
				top: 10,
				right: 40,
				color: 'white',
				fontSize: [5],
				cursor: 'pointer',

			}} onClick={() => { widthRef.current= '75vw'; onClose()}}>
				<FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
			</Link>
		</motion.div>

	)
}