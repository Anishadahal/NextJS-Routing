import Link from 'next/link'
import React from 'react'

const SecondBlog = () => {
  return (
    <>
    <Link href="/">
      <a className='ml-12 text-teal-900 hover:text-teal-900 text-2xl'>Home</a>
    </Link>
    <div>SecondBlog</div>

  </>  )
}

export default SecondBlog