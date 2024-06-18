import { Button } from "./ui/button";

export function Header() {
	return (
		<header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 flex w-full items-center border-b backdrop-blur">
			<nav className="container mx-auto py-2.5">
				<div className="flex items-center justify-between">
					<p className="font-medium">Webinar</p>

					<Button variant="secondary">Inscribirme</Button>
				</div>
			</nav>
		</header>
	);
}
