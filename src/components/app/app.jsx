import React from "react";
import Header from "../header";
import Sidebar from "../sidebar";


const App = ({children}) => {
	return (
		<>
			<Header/>
			 <Sidebar/>
			{children}
		</>
	);
};

export default App;
