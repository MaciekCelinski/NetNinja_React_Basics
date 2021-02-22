import { useState, useEffect } from "react";

// components
import BlogList from "./BlogList";

const Home = () => {
	// state
	const [blogs, setBlogs] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	// functions/actions
	useEffect(() => {
		fetch("http://localhost:8000/blogs")
			.then((response) => {
				// console.log(response)
				if (!response.ok) {
					throw Error("could not fetch the data for that resource");
				}
				return response.json();
			})
			.then((data) => {
				setBlogs(data);
				setIsPending(false);
				setError(null);
			})
			.catch((error) => {
				setIsPending(false);
				setError(error.message);
			});
	}, []);

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} title="Blogs list" />}
		</div>
	);
};

export default Home;
