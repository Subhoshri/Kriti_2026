import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import Events from "./screens/Events";
import "./App.css";

const App = () => {
    return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/events" element={<Events />} />
				</Routes>
				<div className="bg-img">
					<img src="./imgs/fold-texture-bg.webp" alt="" />
					<img src="./imgs/fold-texture-bg.webp" alt="" />
					<img src="./imgs/fold-texture-bg.webp" alt="" />
					<img src="./imgs/fold-texture-bg.webp" alt="" />
					<img src="./imgs/fold-texture-bg.webp" alt="" />
					<img src="./imgs/fold-texture-bg.webp" alt="" />
					<img src="./imgs/fold-texture-bg.webp" alt="" />
					<img src="./imgs/fold-texture-bg.webp" alt="" />
					<img src="./imgs/fold-texture-bg.webp" alt="" />
					<img src="./imgs/fold-texture-bg.webp" alt="" />
					<img src="./imgs/fold-texture-bg.webp" alt="" />
					<img src="./imgs/fold-texture-bg.webp" alt="" />
					<img src="./imgs/fold-texture-bg.webp" alt="" />
				</div>
				<div className="bg-img2"></div>
				{/* <div className="bg-img3"></div> */}
				{/* <div className="bg-img4"></div> */}
			</div>
		</Router>
	);
};

export default App;
