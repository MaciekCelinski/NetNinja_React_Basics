import { useHistory, useParams } from "react-router-dom";
// custom hook
import useFetch from "./useFetch";

const BlogDetails = () => {
	const { id } = useParams();

	// history hook
	const history = useHistory();

	// custom hook
	const { data: blog, isPending, error } = useFetch(
		"http://localhost:8000/blogs/" + id
	);

	const deleteBlog = () => {
		fetch(`http://localhost:8000/blogs/${id}`, {
			method: "DELETE",
		}).then(() => {
			history.push("/");
		});
	};

	return (
		<div className="blog-details">
			{isPending && <div>Loading ...</div>}
			{error && <div>{error}</div>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by: {blog.author}</p>
					<div>{blog.body}</div>
					<button onClick={deleteBlog}>Delete</button>
				</article>
			)}
		</div>
	);
};

export default BlogDetails;
