/** @jsx jsx */
import React from "react"
// import Link from "./Link";
import { jsx, Link } from "theme-ui";

export default ({children, active=false, ...props}) => (
	<Link {...props} sx={{
		...props.sx,
		position: 'relative',
		cursor: 'pointer',
		":after": {
			content: '""',
			position:'absolute',
			bottom: 0,
			left: 0,
			transition: 'width ease 0.3s',
			width: active ? '100%' : 0,
			height: '2px',
			backgroundColor: 'primary'
		},
		":hover": {
			":after": {
				width: '100%',
			}
		}
	}}>{children}</Link>
)