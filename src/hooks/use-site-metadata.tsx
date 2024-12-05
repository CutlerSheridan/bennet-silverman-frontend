import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
	const data = useStaticQuery(graphql`
  query {
	sanitySiteConfig(metaDescription: {}) {
	  description: metaDescription
	  title
	  _rawLogo(resolveReferences: {maxDepth: 10})
	}
  }
  `);

	return data.sanitySiteConfig;
};