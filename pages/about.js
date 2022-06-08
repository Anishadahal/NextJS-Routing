import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <>
    <Link href="/">
        <a className='ml-12 text-teal-900 hover:text-teal-900 text-2xl'>Home</a>
    </Link>
    <div className='mx-28 my-12'>About page</div>

</>
  )
}

export default AboutPage