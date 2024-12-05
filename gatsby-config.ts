import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})
const config: GatsbyConfig = {
	siteMetadata: {
		title: `Bennet Silverman`,
		siteUrl: `https://www.bennetsilverman.com`
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	// 
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-sass",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-mdx",
		{
			resolve: 'gatsby-source-sanity',
			options: {
				"projectId": "taxyp2g2",
				"dataset": "production"
			},
		},
		{
			resolve: "gatsby-plugin-sanity-image",
			options: {
				"projectId": "taxyp2g2",
				"dataset": "production"
			}
		},
		{
			resolve: `gatsby-plugin-theme-ui`,
			options: {
				preset: "@theme-ui/preset-future",
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				"name": "images",
				"path": "./src/images/"
			},
			__key: "images"
		}, {
			resolve: 'gatsby-source-filesystem',
			options: {
				"name": "pages",
				"path": "./src/pages/"
			},
			__key: "pages"
		},
		{
			resolve: `gatsby-omni-font-loader`,
			options: {
				enableListener: true,
				preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
				web: [
					{
						name: `Oswald`,
						file: `https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600&display=swap`,
					},
					// {
					// 	name: `Tilt Warp`,
					// 	file: `https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap`,
					// },
					// {
					// 	name: 'Sora',
					// 	file: "https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700&display=swap"
					// },
					// {
					// 	name: 'Rubik',
					// 	file: "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
					// },
					// {
					// 	name: 'Mitr',
					// 	file: "https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500;600;700&display=swap"
					// },
					/* {
						name: 'Public Sans',
						file: "https://fonts.googleapis.com/css?family=Public+Sans&display=swap"
					},  */
					// {
					// 	name: 'Roboto',
					// 	file: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
					// },
					// {
					// 	name: "Lilita One",
					// 	file: "https://fonts.googleapis.com/css2?family=Lilita+One&display=swap"
					// }
				],
			},
		},]
};

export default config;
