import React from "react"
import { Layout, Hero, Featured } from '@components'



const IndexPage = (props) => {


  return (
    <Layout>

      <Hero />
      <Featured />
    </Layout>
  )
}


// export const query = graphql`
//   query {
//     allMarkdownRemark (
//       filter: {
//         frontmatter: {
//           featured: {
//             eq: true
//           }
//         }
//       }
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//             external_link
//             featuredImage {
//               childImageSharp {
//                 fluid(maxWidth: 800) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `




export default IndexPage