
/** @jsx jsx */
import { Box, Flex, jsx } from 'theme-ui'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVimeo, faInstagram, faYoutube, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';
import Link from './Link'

export default (props) => {
	const data = useStaticQuery(graphql`{
		sanitySiteConfig {
		  contactLinks {
			url
			type
			_key
		  }
		}
	  }`);


	let links = data.sanitySiteConfig.contactLinks;
	if (props.show) {
		links = links.filter(link => props.show.includes(link.type))
	}
	const lookupType = (type) => {
		const map = {
			Tiktok: faTiktok,
			Vimeo: faVimeo,
			YouTube: faYoutube,
			Email: faEnvelope,
			LinkedIn: faLinkedin,
			Instagram: faInstagram,
		}
		if (type in map) {
			return map[type]
		}
		return ''
	}
	return (
		<Flex className="web-links" {...props} sx={{ ...props.sx, justifyContent: 'space-evenly'}}>
			{links.map((link, i) => (
				<motion.div
					whileHover={{ scale: 1.2 }} 
					key={link._key}>
					<Link sx={{color: 'inherit' }} to={link.url} target="_blank">
						<FontAwesomeIcon icon={lookupType(link.type)}></FontAwesomeIcon>
					</Link>
				</motion.div>
			))}
		</Flex>
	)
}