import Link from 'next/link'
import React from 'react'

const FirstBlog = () => {
  return (
    <>
      <Link href="/">
        <a className='ml-12 text-teal-900 hover:text-teal-900 text-2xl'>Home</a>
      </Link>
      <div>FirstBlog</div>

    </>
  )
}

export default FirstBlog