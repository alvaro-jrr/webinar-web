import { Outlet, ScrollRestoration } from "react-router-dom";

import { Header } from "./header";

export function BasePage({ children }: { children?: React.ReactNode }) {
	return (
		<>
			<div className="relative flex min-h-screen flex-col">
				<Header />

				{children ?? <Outlet />}
			</div>

			<ScrollRestoration />
		</>
	);
}
