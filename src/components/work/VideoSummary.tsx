/** @jsx jsx */
import React from "react"
import { PortableText } from "@portabletext/react"
import { Box, Heading, jsx } from "theme-ui"

export default ({ work, ...props }) => {

	return (
		<Box {...props}>
			<Heading as="h2" sx={{ m: 0, mb: 10 }}>{work.title}</Heading>
			<Box className="roles" sx={{ m: 0, mb: 10 }}>
				{work.role && Array.isArray(work.role) && 
					<em>{work.role.join(' - ')}</em>
				}
			</Box>
			{work._rawDescription &&
				<Box className="description" sx={{
					p: {
						// fontSize: [3],
						m: 0,
					}
				}}><PortableText value={work._rawDescription} /></Box>
			}
		</Box>
	)
}