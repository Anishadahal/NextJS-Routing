import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import HomePage from '../index'

const Article = () => {
    const router = useRouter()
    const { params = [] } = router.query //params in the file name or array of segments of url path
    console.log(params)

    if (params.length === 2) {
        return <>
            <Link href="/">
                <a className='ml-12 text-teal-900 hover:text-teal-900 text-2xl'>Home</a>
            </Link>
            <h1 className='mx-12 my-8 text-teal-700 hover:text-blue-900 font-semibold text-2xl'>Viewing articles for review {params[0]} and reply {params[1]}</h1>
        </>
    } 
    else if (params.length === 1) {
        return <>
            <Link href="/">
                <h1 className='ml-12 text-teal-900 hover:text-teal-900 text-2xl'>Home</h1>
            </Link>
            <h1 className='mx-12 my-8 text-teal-700 hover:text-blue-900 font-semibold text-2xl'>Viewing articles for review {params[0]}</h1>
            <Link href="/articles/review/reply1">
                <a className='mx-12 text-blue-500 hover:text-blue-900'>View first reply of this review</a>
            </Link>
            <br />
            <Link href="/articles/review/reply2">
                <a className='mx-12 text-blue-500 hover:text-blue-900'>View second reply of this review</a>
            </Link>
        </>
    }
    return (
        <>
            <HomePage />
        </>
    )
}

export default Article