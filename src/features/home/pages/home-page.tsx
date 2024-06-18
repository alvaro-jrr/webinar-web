import { Main } from "@/components/main";
import { Button } from "@/components/ui/button";

import { About } from "../components/about";
import { Speakers } from "../components/speakers";

export function HomePage() {
	return (
		<Main className="max-w-4xl space-y-24 py-28">
			<div className="mx-auto w-full max-w-2xl md:text-center">
				<h1 className="text-4xl font-bold">Gana tiempo y dinero</h1>

				<p className="text-muted-foreground mt-4 text-2xl">
					Descubre como Tech Talent Hub puede revolucionar la gestión de ofertas
					laborales en tu empresa
				</p>

				<Button className="mt-6" size="lg">
					Inscribirme en el Webinar
				</Button>
			</div>

			<div className="bg-muted-foreground mx-auto aspect-video rounded-md">
				<span></span>
			</div>

			<About />

			<Speakers />
		</Main>
	);
}
