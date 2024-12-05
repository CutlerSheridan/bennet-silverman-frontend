/** @jsx jsx */
import { jsx } from "theme-ui"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from "gatsby";

export default (props) => (
  <Link
    {...props}
    activeClassName="active"
    sx={{
      color: 'inherit',
      '&.active': {
        color: 'primary',
      },
	  textDecoration: 'none',
    }}
  />
)