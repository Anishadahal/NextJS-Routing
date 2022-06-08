import Link from 'next/link'
import React from 'react'

const ArticlesPage = () => {
  return (
    <>
      <Link href="/">
        <a className='ml-12 text-teal-900 hover:text-teal-900 text-2xl'>Home</a>
      </Link>
      <div className='ml-12 mt-12'>
        <h2 className='text-xl font-sans my-6 text-teal-600 font-semibold'> Articles </h2>
        <div className='flex ml-10 my-28'>

          <h1 className='mx-6 text-blue-500 hover:text-blue-900 font-semibold'>
            <Link href="/articles/review1">
              <a>
                Reviews of Article 1
              </a>
            </Link>
          </h1>
          <h1 className='mr-6 text-blue-500 hover:text-blue-900 font-semibold'>
            <Link href="/articles/articles2">
              <a>
                Reviews of Article 2
              </a>
            </Link>
          </h1>
        </div>
      </div>
    </>
  )
}

export default ArticlesPage