import { useState, useEffect } from "react";

const useFetch = (url) => {
	// state

	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	// functions/actions

	useEffect(() => {
		// abort controller
		const abortCont = new AbortController();

		fetch(url, { signal: abortCont.signal })
			.then((response) => {
				// console.log(response)
				if (!response.ok) {
					throw Error("could not fetch the data for that resource");
				}
				return response.json();
			})
			.then((data) => {
				setData(data);
				setIsPending(false);
				setError(null);
			})
			.catch((error) => {
				if (error.name === "AbortError") {
					console.log("fetch aborted");
				} else {
					setIsPending(false);
					setError(error.message);
				}
			});

		// cleaning function
		return () => abortCont.abort();
	}, [url]);

	return { data, isPending, error };
};

export default useFetch;
