/** @jsx jsx */
import { graphql, HeadFC, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import Layout from "../components/layouts/Layout";
import { PortableText } from '@portabletext/react'
import { jsx, Box, Container, Heading } from "theme-ui";
import FlexCenter from "../components/FlexCenter";
import { Masonry } from "masonic";
import { GatsbyImage } from 'gatsby-plugin-image'
import { motion } from "framer-motion";
import VideoModal from "../components/VideoModal";
import { SEO } from "../components/seo";


// const MasonryItem = ({ index, data: work, width }) => {
const MasonryItem = ({ index, work }) => {
	const [showModal, setShowModal] = useState(false);

	const zoom = {
		hover: { scale: 1.1 },
	}
	return (
		<Box className="gridBox" key={index}>
			<VideoModal work={work} show={showModal} setShow={setShowModal} />

			<Box>
				<Box sx={{ overflow: 'hidden', cursor: 'pointer' }} onClick={() => setShowModal(true)}>
					<motion.div
						transition={{ duration: .75 }}
						whileTap={"hover"}
						whileHover={"hover"}
						variants={zoom}>
						<GatsbyImage sx={{ aspectRatio: '16/9', width: '100%', height: '100%', objectFit: 'cover' }} alt={work.title} image={work.thumbnail.asset.gatsbyImageData} />
					</motion.div>
				</Box>

				<Box p={2} sx={{ textAlign: 'center' }}>
					<Box >
						<Heading as='h3' variant="text.h3">{work.title}</Heading>
						<Box className="roles" sx={{ m: 0, mb: 10, mt: 10 }}>
							<em>{work.role.join(' - ')}</em>
						</Box>
					</Box>

					{work._rawDescription &&
						<Box className="description" sx={{
							p: { margin: 0 },
							fontWeight: "bodylight",
						}}>
							<PortableText value={work._rawDescription} />
						</Box>}
				</Box>

			</Box>
		</Box>
	)
}


const Category = ({ data, pageContext }) => {
	const bannerStyles = {
		height: '50vh',
		backgroundColor: "primary",
		flexDirection: 'column',
	}
	{/* <Masonry items={works} render={MasonryItem} columnGutter={40} columnCount={2} /> */ }
	const works = pageContext.category ? data.categories.nodes : data.featured.nodes;
	console.log(works);
	return (
		<React.Fragment>
			<FlexCenter sx={bannerStyles} className="banner">
				<Heading as="h1" variant="text.title">{pageContext.category || "Featured"}</Heading>
				{/* <Heading as="h3" variant="text.subtitle">Works</Heading> */}
			</FlexCenter>
			<Container sx={{ maxWidth: '1200px' }}>
				<Box sx={{
					display: 'grid',
					gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2,1fr)'],
					columnGap: [4],
					rowGap: [4]
				}}>
					{works.map((work, index) => <MasonryItem key={index} work={work} index={index} />)}
				</Box>
			</Container>
		</React.Fragment>


	)
}

export default Category;

export const Head: HeadFC = ({ data, pageContext }) => {
	const works = pageContext.category ? data.categories.nodes : data.featured.nodes;
	return (
		<SEO title={"Works - " + pageContext.category || "Featured"}
			description={(pageContext.category || "Featured") + " work from Bennet Silverman."}
			image={works && works.length > 0 ? works[0].thumbnail.asset.url : ''}
		/>
	)
}

export const query = graphql`
query ($category: String!) {
	categories: allSanityWork(filter: {type: {eq: $category}}) {
	  nodes {
		slug {
		  current
		}
		title
		videoUrl
		role
		type
		featured
		_rawDescription(resolveReferences: {maxDepth: 10})
		_rawSlug(resolveReferences: {maxDepth: 10})
		_rawVideoLoop(resolveReferences: {maxDepth: 10})
		_id
		thumbnail {
		  asset {
			url
			gatsbyImageData(placeholder: BLURRED, fit: FILLMAX, aspectRatio: 1.7777777777)
		  }
		}
	  }
	}
	featured: allSanityWork(filter: {featured: {eq: true}}) {
	  nodes {
		slug {
		  current
		}
		title
		videoUrl
		role
		type
		featured
		_rawDescription(resolveReferences: {maxDepth: 10})
		_rawSlug(resolveReferences: {maxDepth: 10})
		_rawVideoLoop(resolveReferences: {maxDepth: 10})
		_id
		thumbnail {
		  asset {
			url
			gatsbyImageData(placeholder: BLURRED, fit: FILLMAX, aspectRatio: 1.7777777777)
		  }
		}
	  }
	}
  }`