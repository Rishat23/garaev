import React from "react";
import {
	Card,
	List,
	ListItem, Navbar
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";


const Sidebar = () => {
	return (
		<Card className="fixed top-4 left-4 h-[calc(100vh-2rem)] w-full max-w-[25%] p-4 shadow-xl shadow-blue-gray-900/5 rounded-lg" >
			<List className="flex-col ">
				<Navbar>
					<NavLink exact to="/" >
						<ListItem>Главная</ListItem>
					</NavLink>
					<NavLink exact to="/about">
						<ListItem>Введение</ListItem>
					</NavLink>
					<NavLink exact to="/Fundamentals of wireless network technologies">
						<ListItem>Основы технологий беспроводных сетей</ListItem>
					</NavLink>
				</Navbar>
			</List>
		</Card>
	);
}
export default Sidebar
