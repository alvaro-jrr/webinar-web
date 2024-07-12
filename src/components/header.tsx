import { Link, NavLink } from "react-router-dom";

import { Drawer, DrawerItem } from "./drawer";
import { Button } from "./ui/button";

export function Header() {
	return (
		<header className="sticky top-0 z-50 flex w-full items-center border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<nav className="container mx-auto py-2.5">
				<div className="flex items-center justify-between">
					<div className="flex gap-6">
						<Link to="/" className="font-medium">
							Webinar
						</Link>

						<NavLink
							to="/tutorials"
							className="hidden text-foreground/60 transition-colors hover:text-foreground aria-[current=page]:text-foreground md:block"
						>
							Tutoriales
						</NavLink>

						<NavLink
							to="/topics"
							className="hidden text-foreground/60 transition-colors hover:text-foreground aria-[current=page]:text-foreground md:block"
						>
							Temas
						</NavLink>

					</div>

					<div className="md:hidden">
						<Drawer>
							<DrawerItem title="Inscribirme" to="/assistants/enroll" />

							<DrawerItem title="Tutoriales" to="/tutorials" />

							<DrawerItem title="Temas" to="/topics" />
						</Drawer>
					</div>

					<Button className="hidden md:block" variant="secondary" asChild>
						<Link to="/assistants/enroll">Inscribirme</Link>
					</Button>
				</div>
			</nav>
		</header>
	);
}
