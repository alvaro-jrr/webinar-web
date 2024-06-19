import { useLoaderData } from "react-router-dom";

import { participantsApi } from "@/api/participants-api";

import { Main } from "@/components/main";
import { Button } from "@/components/ui/button";

import { About } from "../components/about";
import { Participants } from "../components/participants";

async function loader() {
	const participants = await participantsApi.getAll();

	return { participants };
}

export function HomePage() {
	const { participants } = useLoaderData() as Awaited<
		ReturnType<typeof loader>
	>;

	return (
		<Main className="max-w-4xl space-y-24 py-28">
			<div className="mx-auto w-full max-w-2xl md:text-center">
				<h1 className="text-4xl font-bold">Gana tiempo y dinero</h1>

				<p className="mt-4 text-2xl text-muted-foreground">
					Descubre como Tech Talent Hub puede revolucionar la gestión de ofertas
					laborales en tu empresa
				</p>

				<Button className="mt-6" size="lg">
					Inscribirme en el Webinar
				</Button>
			</div>

			<div className="mx-auto aspect-video rounded-md bg-muted-foreground">
				<span></span>
			</div>

			<About />

			<Participants participants={participants} />
		</Main>
	);
}

HomePage.loader = loader;
