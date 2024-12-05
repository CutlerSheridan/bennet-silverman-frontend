import { useStaticQuery, graphql } from "gatsby";
import _ from "lodash";
import React from "react";
import { Box } from "theme-ui";
import Link from "../Link";
import UnderlineLink from "../UnderlineLink";

export default () => {
	const data = useStaticQuery(graphql`
    {
		allSanityWork {
		  distinct(field: {type: SELECT})
		}
	}`);
	let types = [...data.allSanityWork.distinct]
	types.unshift("Featured");
	return (
		<React.Fragment>
			{types.map(type => (
				<UnderlineLink to={`/work/${type.toLowerCase()}`} key={type} sx={{
					fontSize: [2,4]
				}}>{type}</UnderlineLink>
			))}
		</React.Fragment>
	)
}