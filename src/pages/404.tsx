import * as React from "react"
import { HeadFC, PageProps } from "gatsby"
import { Box, Container, Heading } from "theme-ui"
import FlexCenterColumn from "../components/FlexCenterColumn"
import Link from "../components/Link"

const NotFoundPage: React.FC<PageProps> = () => {
	return (
		<FlexCenterColumn sx={{ height: '100vh' }}>
			<Heading as="h1" variant="text.title">Page not found.</Heading>
			<Box sx={{fontSize: [4,5]}}><Link to="/" >E.T. Go Home {">"}</Link></Box>
		</FlexCenterColumn>
	)
}

export default NotFoundPage

export const Head: HeadFC = () => <title>404 - Not found</title>
