/** @jsx jsx */
import { Box, Flex, jsx, NavLink, useThemeUI } from "theme-ui"
import React, { useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { Spin as Hamburger } from "hamburger-react";
import { useElementSize } from 'usehooks-ts'
import Link from "./Link";
import WebLinks from "./WebLinks";

export default () => {
	const [isOpen, setOpen] = useState(false);
	const [sizeRef, { height }] = useElementSize();
	const duration = 0.6;
	const sidebar = {
		open: (height) => {
			return {
				clipPath: `ellipse(${height * 2}px ${height * 2}px at right top)`,
				transition: {
					duration,
				},
			}

		},
		closed: {
			clipPath: "ellipse(0px 0px at right top)",
			transition: {
				duration: duration - 0.3
			}
		}
	};

	const navStagger = {
		open: {
			transition: { staggerChildren: 0.07, delayChildren: 0.2 }
		},
		closed: {
			transition: { staggerChildren: 0.05, staggerDirection: -1 }
		}
	};


	const SlideIn = ({ children, delay = 0, delayOut = 0, delayIn = 0 }) => {
		const slideInVars = {
			open: {
				x: 0,
				opacity: 1,
				transition: {},
			},
			closed: {
				x: 200,
				opacity: 0,
				transition: {},
			}
		};
		if (delay) {
			slideInVars.open.transition.delay = delay
			slideInVars.closed.transition.delay = delay
		}
		if (delayOut) {
			slideInVars.closed.transition.delay = delayOut
		}
		if (delayIn) {
			slideInVars.open.transition.delay = delayIn
		}
		return (
			<motion.div variants={slideInVars}>
				{children}
			</motion.div>
		)
	}

	const MenuItem = ({ children, ...props }) => {

		return (
			<SlideIn>
				<motion.li
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.95 }}
					sx={{ listStyle: 'none', textTransform: 'uppercase', fontSize: 6 }}>
					{children}
				</motion.li>
			</SlideIn>

		)
	}


	const enterMenu = {
		open: {
			right: 0
		},
		closed: {
			right: '-100%',
			transition: {
				delay: 0.8,
			}
		}
	}

	const handleLinkClick = (e) => {
		setOpen(false)
	}

	const zIndex = 15;

	return (
		<Box className="mobile-menu" sx={{ zIndex, position: 'relative' }}>

			<motion.div sx={{
				position: 'fixed',
				top: 0,
				right: isOpen ? 0 : '-100%',
				bottom: 0,
				height: '100vh',
				width: ['100vw', '50vw'],
				maxWidth: [null, 768],
				zIndex,
				overflow: 'visible'
			}}
				initial={'closed'}
				animate={isOpen ? "open" : "closed"}
				ref={sizeRef}
				variants={enterMenu}
			>
				<motion.nav sx={{ zIndex, display: 'flex', flexDirection: 'column', paddingTop: 120, position: 'relative', color: 'black', alignItems: 'center', textAlign: 'center' }}>
					<motion.ul variants={navStagger} sx={{ paddingLeft: 0 }}>
						{['Work', 'Bio', 'Contact'].map(pageName => {
							let url = '/' + pageName.toLowerCase();
							if (pageName == 'Home') url = '/';
							if (pageName == 'Work') url = '/#work'
							return (
								<MenuItem key={pageName}>
									<Link to={url} p={2} sx={{color: 'black'}} onClick={handleLinkClick}>{pageName}</Link>
								</MenuItem>
							)
						})}
					</motion.ul>

					<SlideIn delay={0.5}><WebLinks sx={{ fontSize: 4, alignItems: 'center', width: 200, color: 'black' }} /></SlideIn>

				</motion.nav>
				<motion.div className="background" sx={{ zIndex: zIndex - 1, position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, background: 'white' }} custom={height} variants={sidebar} />
			</motion.div>
			<Box sx={{ position: 'relative', zIndex, color: isOpen ? 'black' : 'inherit' }}>
				<Hamburger rounded toggled={isOpen} toggle={setOpen} />
			</Box>

		</Box>


	)
}