import { useState, useEffect } from "react";

// components
import BlogList from "./BlogList";

const Home = () => {
	// state
	const [blogs, setBlogs] = useState(null);

	// functions/actions
	useEffect(() => {
		fetch("http://localhost:8000/blogs")
			.then((response) => response.json())
			.then((data) => setBlogs(data));
	}, []);

	return (
		<div className="home">
			{blogs && <BlogList blogs={blogs} title="Blogs list" />}
		</div>
	);
};

export default Home;
