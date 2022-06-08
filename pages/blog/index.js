import Link from 'next/link'
import React from 'react'

const BlogPage = () => {
  return (
    <>
      <Link href="/">
        <a className='ml-12 text-teal-900 hover:text-teal-900 text-2xl'>Home</a>
      </Link>
      <div className='flex ml-10 my-28'>

        <h1 className='mx-6 text-blue-500 hover:text-blue-900 font-semibold'>
          <Link href="/blog/first">
            <a>
              First Blog
            </a>
          </Link>
        </h1>
        <h1 className='mr-6 text-blue-500 hover:text-blue-900 font-semibold'>
          <Link href="/blog/second">
            <a>
              Second Blog
            </a>
          </Link>
        </h1>
      </div>
    </>
  )
}

export default BlogPage