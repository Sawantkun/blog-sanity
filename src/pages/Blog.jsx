import React from 'react'
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import sanityClient from "../client"
import SanityBlockContent from '@sanity/block-content-to-react'

const Blog = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
      sanityClient
        .fetch(
          `*[_type == "post"] {
          title,
          slug,
          body,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          }
        }`
        )
        .then((data) => setPosts(data))
        .catch(console.error)
    }, [])
  return (
    <>
    <section className="px-5 2xl:max-w-7xl 2xl:mx-auto">
        <h1 className="font-bold text-4xl mt-5 mb-10 tracking-widest text-center md:text-6xl lg:text-8xl">
          Blog page
        </h1>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug.current}>
              <img src={post.mainImage.asset.url} alt={post.title} />
              <h4 className="text-xl mt-2">{post.title}</h4>
              <div>
                <SanityBlockContent blocks={post.body} projectId="fzlc029d" dataset="production"/>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Blog