import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

import techTalentHubLandingImage from "@/assets/tech-talent-hub-landing.webp";

import { Main } from "@/components/main";
import { Button } from "@/components/ui/button";

import { About } from "../components/about";
import { Participants } from "../components/participants";

export function HomePage() {
	return (
		<Main className="space-y-24 py-28">
			<div className="w-full space-y-6">
				<div className="space-y-4">
					<p className="text-sm text-muted-foreground">Webinar</p>

					<h1 className="text-4xl font-bold md:text-5xl">
						Gana tiempo y dinero
					</h1>

					<p className="max-w-2xl text-xl text-muted-foreground">
						Descubre como Tech Talent Hub puede revolucionar la gestión de
						ofertas laborales en tu empresa
					</p>
				</div>

				<div className="flex gap-4">
					<Calendar className="h-8 w-8" />

					<span className="text-2xl font-medium">10 de Julio</span>
				</div>

				<Button size="lg" asChild>
					<Link to="/assistants/enroll">Inscribirme en el Webinar</Link>
				</Button>
			</div>

			<img
				className="mx-auto aspect-video rounded-md border shadow-sm"
				src={techTalentHubLandingImage}
				width="3003"
				alt="Landing de Tech Talent Hub"
				loading="eager"
			/>

			<About />

			<Participants />
		</Main>
	);
}
