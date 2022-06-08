import Link from 'next/link'
import React from 'react'

const ProductListPage = ({ productId = 100 }) => {
    return (
        <>
            <Link href="/">
                <a className='ml-12 text-teal-900 hover:text-teal-900 text-2xl'>Home</a>
            </Link>
            <div className='flex ml-10 my-28'>

                <h1 className='mx-6 text-blue-500 hover:text-blue-900 font-semibold'>
                    <Link href="/product/1">
                        <a>
                            Product 1
                        </a>
                    </Link>
                </h1>
                <h1 className='mr-6 text-blue-500 hover:text-blue-900 font-semibold'>
                    <Link href="/product/2">
                        <a>
                            Product 2
                        </a>
                    </Link>
                </h1>
                <h1 className='mr-6 text-blue-500 hover:text-blue-900 font-semibold'>
                    <Link href="/product/3" replace>
                        <a>
                            Product 3
                        </a>
                    </Link>
                </h1>
                <h1 className='mr-6 text-blue-500 hover:text-blue-900 font-semibold'>
                    <Link href={`/product/${productId}`}>
                        <a>
                            Product {productId}
                        </a>
                    </Link>
                </h1>
            </div>
        </>

    )
}

export default ProductListPage