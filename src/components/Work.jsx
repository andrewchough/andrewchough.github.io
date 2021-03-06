/* eslint-disable react/jsx-key */
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import GatsbyImage from 'gatsby-image'
import { FaLaptop } from 'react-icons/fa'
import Slide from 'react-reveal/Slide'

const Work = () => {
  const data = useStaticQuery(graphql`
    {
      allWorkJson {
        edges {
          node {
            id
            index
            title
            position
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
    <div className="py-16 md-max:py-8 lg:px-12 ">
      <div className="flex items-center pl-3">
        <FaLaptop />
        <h6 className="ml-3 font-semibold">WORK</h6>
      </div>
      {data.allWorkJson.edges.map(({ node }) => {
        return (
          <Slide left duration={300 * node.index}>
            <div
              key={node.id}
              className="flex py-4 md-max:pl-3"
            >
              <div className="w-1 bg-purple-500 md:ml-6 rounded-full" />
              <div className="ml-5 md:ml-8">
                <GatsbyImage
                  className="w-8 h-8"
                  {...node.icon.childImageSharp}
                />
                <div>
                  <h6 className="mt-3 font-semibold text-2xl">{node.title}</h6>
                </div>
                <span className="font-light text-xs">({node.time})</span>
                <h6 className="mt-1 font-light">{node.position}</h6>
                <h6 className="mt-1 font-light">{node.location}</h6>
              </div>
            </div>
          </Slide>
        )
      })}
    </div>
  )
}

export default Work
