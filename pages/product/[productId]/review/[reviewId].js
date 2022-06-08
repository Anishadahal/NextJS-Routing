import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Review = () => {
    const router = useRouter()
    const { reviewId, productId } = router.query
    return (
        <>
            <Link href="/">
                <a className='ml-12 text-teal-900 hover:text-teal-900 text-2xl'>Home</a>
            </Link>
            <div className='mx-28 my-12'>
                <h1 className='mx-6 text-teal-900'>This page contains review {reviewId} for product {productId}</h1>
            </div>

        </>
    )
}

export default Review