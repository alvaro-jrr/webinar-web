// Supports weights 100-900
import "@fontsource-variable/dm-sans";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BasePage } from "./components/base-page";
import { HomePage } from "./features/home/pages/home-page";
import "./index.css";

const router = createBrowserRouter([
	{
		element: <BasePage />,
		children: [
			{
				path: "/",
				element: <HomePage />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
