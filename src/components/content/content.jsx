import { Card } from "@material-tailwind/react";
import React from "react";


const Content = ({children}) => {
	return (
		<Card className="w-full p-4 max-w-[calc(73%-1rem)] shadow-xl shadow-blue-gray-900/5 rounded-lg ml-auto mr-4 mb-4">
			{children}
		</Card>
	);
};

export default Content;
