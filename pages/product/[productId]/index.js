import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const ProductDetail = () => {
    const router = useRouter()
    const productId = router.query.productId
    return (
        <div>
            <Link href="/">
                <a className='ml-12 text-teal-900 hover:text-teal-900 text-2xl'>Home</a>
            </Link>
            <div className='mx-28 my-12'>
                <h2 className='text-xl font-sans my-6 text-teal-600 font-semibold'>Details about Product {productId}</h2>
                <h3>
                    <Link href={`${productId}/review/1`}>
                        <a className='mx-6 text-blue-500 hover:text-blue-900'>View Review 1</a>
                    </Link>
                </h3> <h3>
                    <Link href={`${productId}/review/2`}>
                        <a className='mx-6 text-blue-500 hover:text-blue-900'>View Review 2</a>
                    </Link>
                </h3> <h3>
                    <Link href={`${productId}/review/3`}>
                        <a className='mx-6 text-blue-500 hover:text-blue-900'>View Review 3</a>
                    </Link>
                </h3>

            </div>

        </div>
    )
}

export default ProductDetail    