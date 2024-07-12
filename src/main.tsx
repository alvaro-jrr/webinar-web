import "@fontsource-variable/dm-sans";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BasePage } from "./components/base-page";
import { ErrorPage } from "./features/error/error-page";
import "./index.css";

const router = createBrowserRouter([
	{
		element: <BasePage />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				lazy: async () => {
					const { HomePage } = await import("./features/home/pages/home-page");

					return {
						Component: HomePage,
					};
				},
			},
			{
				path: "/participants/:participantId",
				lazy: async () => {
					const { ParticipantPage } = await import(
						"./features/participants/pages/participant-page"
					);

					return {
						Component: ParticipantPage,
						loader: ParticipantPage.loader,
					};
				},
			},
			{
				path: "/tutorials",
				lazy: async () => {
					const { TutorialsPage } = await import(
						"./features/tutorials/pages/tutorials-page"
					);

					return {
						Component: TutorialsPage,
					};
				},
			},
			{
				path: "/topics",
				lazy: async () => {
					const { TopicsPage } = await import(
						"./features/topics/pages/topics-page"
					);

					return {
						Component: TopicsPage,
					};
				},
			},
			{
				path: "/topics/:id",
				lazy: async () => {
					const { TopicsDetail } = await import(
						"./features/topics/pages/topics-detail"
					);

					return {
						Component: TopicsDetail,
					};
				},
			},
			{
				path: "/assistants/",
				children: [
					{
						path: "enroll",
						lazy: async () => {
							const { CreateAssistantPage } = await import(
								"./features/assistants/pages/create-assistant-page"
							);

							return {
								Component: CreateAssistantPage,
							};
						},
					},
					{
						path: "confirm",
						lazy: async () => {
							const { ConfirmAssistantPage } = await import(
								"./features/assistants/pages/confirm-assistant-page"
							);

							return {
								Component: ConfirmAssistantPage,
								loader: ConfirmAssistantPage.loader,
							};
						},
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
