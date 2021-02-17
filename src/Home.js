const Home = () => {
	const handleClick = (e) => {
		console.log("e: ", e);
		console.log("hello ninjas");
	};

	const handleClickAgain = (name, e) => {
		console.log("Hello", name, e.target.innerHTML);
	};

	return (
		<div className="home">
			<h2>Homepage</h2>
			<button onClick={handleClick}>click me</button>
			<button onClick={(e) => handleClickAgain("Maciek", e)}>
				click me again
			</button>
		</div>
	);
};

export default Home;
