import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layouts/Layout";


import {PortableText} from '@portabletext/react'

const Work = ({data}) => {
	return (
		<Layout>
			<div><PortableText value={data.sanityWork._rawDescription} /></div>
			<div>{data.sanityWork.title}</div>
			<img src={data.sanityWork._rawThumbnail.asset.url} />
			<div>{data.sanityWork.id}</div>
			<div>{data.sanityWork.id}</div>
		</Layout>
	)
}

export default Work;


export const query = graphql`
	query($slug: String!) {
	sanityWork(slug: {current: {eq: $slug}}) {
		title
        videoUrl
        role
        _rawDescription(resolveReferences: {maxDepth: 10})
        _rawThumbnail(resolveReferences: {maxDepth: 10})
        _rawSlug(resolveReferences: {maxDepth: 10})
	}
  }
`