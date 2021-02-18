import { useState, useEffect } from "react";

// components
import BlogList from "./BlogList";

const Home = () => {
	const [blogs, setBlogs] = useState([
		{
			title: "My new website",
			body: "Lorem ipsum ...",
			author: "mario",
			id: 1,
		},
		{ title: "Welcome Party", body: "Lorem ipsum ...", author: "yoshi", id: 2 },
		{
			title: "Web dev top tips",
			body: "Lorem ipsum ...",
			author: "mario",
			id: 3,
		},
	]);

	const handleDelete = (id) => {
		const newBlogsArray = blogs.filter((blog) => blog.id !== id);
		setBlogs(newBlogsArray);
	};

	useEffect(() => {
		console.log("Use effect run");
	}, [blogs]);

	return (
		<div className="home">
			<BlogList blogs={blogs} title="Blogs list" handleDelete={handleDelete} />
		</div>
	);
};

export default Home;
