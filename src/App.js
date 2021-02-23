// components
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/create" exact>
							<Create />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
