// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<header>
			<nav>
				<ul>
					<li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/events">Events</Link>
                    </li>
                    <li>
                        <Link to="/team">Team</Link>
                    </li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
