import React from "react"
import { Spinner } from "theme-ui"
import FlexCenter from "./FlexCenter"

export default () => {
	return (
		<FlexCenter sx={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}><Spinner /></FlexCenter>
	)
}