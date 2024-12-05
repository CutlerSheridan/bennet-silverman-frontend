/** @jsx jsx */
import { jsx, Flex, Heading  } from "theme-ui"

export default ({title, ...props}) => (
	<Flex {...props} sx={{...props.sx, justifyContent: 'center'}}><Heading as='h1' variant="text.title">{title}</Heading></Flex>
)