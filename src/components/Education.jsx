import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image"
import { FaSchool } from 'react-icons/fa'
import Slide from 'react-reveal/Slide'

const Education = () => {
  const data = useStaticQuery(graphql`
    {
      allEducationJson {
        edges {
          node {
            id
            index
            title
            degree
            time
            location
            icon {
              childImageSharp {
                fixed(height: 32) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="block__section md:py-16 md-max:pb-8 pr-12 h-full">
      <div className="flex items-center pl-3">
        <FaSchool />
        <h6 className="ml-3 font-semibold">EDUCATION</h6>
      </div>
      {/* timeline goes here */}
      {data.allEducationJson.edges.map(({ node }) => {
        return (
          <Slide right duration={300 * node.index}> 
            <div
              key={node.id}
              className="flex py-4 md-max:pl-3"
            >
              <div className="w-1 bg-purple-650 md:ml-6 rounded-full" />
              <div className="ml-5 md:ml-8">
                <GatsbyImage
                  className="w-8 h-8"
                  {...node.icon.childImageSharp}
                />
                <h6 className="mt-3 font-semibold text-2xl">{node.title}</h6>
                <h6 className="font-light text-xs">({node.time})</h6>
                <h6 className="mt-1 font-light">{node.degree}</h6>
                <h6 className="mt-1 font-light">{node.location}</h6>
              </div>
            </div>
          </Slide>
        )
      })}
    </div>
  )
}

export default Education
