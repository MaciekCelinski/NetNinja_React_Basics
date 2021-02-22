import { useState, useEffect } from "react";

// components
import BlogList from "./BlogList";

// custom hook
import useFetch from "./useFetch";

const Home = () => {
	// custom hook

	const { data: blogs, isPending, error } = useFetch(
		"http://localhost:8000/blogs"
	);

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}
			{blogs && <BlogList blogs={blogs} title="Blogs list" />}
		</div>
	);
};

export default Home;
