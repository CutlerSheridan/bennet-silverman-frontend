/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx, useThemeUI } from "theme-ui"

export default function (props) {
	const {theme} = useThemeUI();
	return (
		<Link
			{...props}
			activeClassName="active"
			sx={{
				cursor: 'pointer',
				color: 'highlight',
				//   '&.active': {
				//     color: 'highlight',
				//   },
				":visited": {
					color: 'highlight'
				},
				textDecoration: 'none',
			}}
		/>
	)
} 