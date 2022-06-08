import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Home = () => {
	const router = useRouter()

	//programmatic navigation
	const handleClick = () => {
		console.log("Placing your order")
		router.push("/product")
	}
	//shallow routing
	const handleShallowRouting = () => {
		router.push("/?counter=10", undefined, { shallow: true })
	}
	return (
		<>
			<nav className="mt-12 ml-32">
				<ul className="flex">
					<h1 className="text-2xl font-bold">Home</h1>
					<div className="ml-72 flex">
						<li className="mr-6 ml-6">
							<Link href="/about">
								<a className="text-blue-500 hover:text-blue-800">About</a>
							</Link>
						</li>
						<li className="mr-6">
							<Link href="/profile">
								<a className="text-blue-500 hover:text-blue-800">Profile</a>
							</Link>
						</li>
						<li className="mr-6">
							<Link href="/product">
								<a className="text-blue-500 hover:text-blue-800">Products</a>
							</Link>
						</li>
						<li className="mr-6">
							<Link href="/blog">
								<a className="text-blue-500 hover:text-blue-800">Blogs</a>
							</Link>
						</li>
						<li className="mr-6">
							<Link href="/articles">
								<a className="text-blue-500 hover:text-blue-800">Articles</a>
							</Link>
						</li>
					</div>


				</ul>
			</nav>
			<div className="my-12 flex mx-96">
				<div className="mr-10 ml-40">
					<button onClick={handleClick} className="border-1 border-green-700 bg-green-300 rounded-md py-1 px-3 hover:bg-green-400">
						Place Order
					</button>
				</div>
				<div>
					<button onClick={handleShallowRouting} className="border-1 border-blue-700 bg-blue-300 rounded-md py-1 px-3 hover:bg-blue-400">
						Reload
					</button>
				</div>
			</div>

		</>
	);
};

export default Home;
