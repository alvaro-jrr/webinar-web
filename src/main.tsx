import "@fontsource-variable/dm-sans";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BasePage } from "./components/base-page";
import "./index.css";

const router = createBrowserRouter([
	{
		element: <BasePage />,
		children: [
			{
				path: "/",
				lazy: async () => {
					const { HomePage } = await import("./features/home/pages/home-page");

					return {
						Component: HomePage,
						loader: HomePage.loader,
					};
				},
			},
			{
				path: "/participants/:participantId",
				lazy: async () => {
					const { ParticipantPage } = await import(
						"./features/home/pages/participant-page"
					);

					return {
						Component: ParticipantPage,
						loader: ParticipantPage.loader,
					};
				},
			},
			{
				path: "/assistants/enroll",
				lazy: async () => {
					const { CreateAssistantPage } = await import(
						"./features/assistants/pages/create-assistant-page"
					);

					return {
						Component: CreateAssistantPage,
					};
				},
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
