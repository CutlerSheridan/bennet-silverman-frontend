/** @jsx jsx */
import { Flex, jsx } from "theme-ui"
import React from "react";

export default ({children, ...props}) => (
	<Flex {...props} sx={{ ...props.sx, flexDirection:"column", alignItems: 'center', justifyContent: 'center'}}>{children}</Flex>
)