exports.createPages = async function({ actions, graphql }) {
	const { createRedirect, createPage } = actions;
	createRedirect({
		fromPath: '/work',
		toPath: '/#work',
		isPermanent: true,
	});

	const { data } = await graphql(`
	query WorksQuery {
		allSanityWork {
		  edges {
			node {
			  slug {
				current
			  }
			}
		  }
		  distinct(field: {type: SELECT})
		}
	  }`);
	/**
	 * Would create a page for each work but not doing that now
	 */
	// data.allSanityWork.edges.forEach(edge => {
	// 	const slug = edge.node.slug.current;
	// 	createPage({
	// 		path: `/${slug}`,
	// 		component: require.resolve(`./src/templates/work.tsx`),
	// 		context: { slug: slug },
	// 	});
	// });

	const types = [...data.allSanityWork.distinct];
	types.forEach(type => {
		createPage({
			path: `/work/${type.toLowerCase()}`,
			component: require.resolve(`./src/templates/category.tsx`),
			context: { category: type },
		});
	});

	// create Featured page
	createPage({
		path: `/work/featured`,
		component: require.resolve(`./src/templates/category.tsx`),
		context: { category: '', featured: true },
	});
};
