import { Link } from "react-router-dom";

import { Button } from "./ui/button";

export function Header() {
	return (
		<header className="sticky top-0 z-50 flex w-full items-center border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<nav className="container mx-auto py-2.5">
				<div className="flex items-center justify-between">
					<Link to="/" className="font-medium">
						Webinar
					</Link>

					<Button variant="secondary" asChild>
						<Link to="/assistants/enroll">Inscribirme</Link>
					</Button>
				</div>
			</nav>
		</header>
	);
}
