import { ExternalLink } from "lucide-react";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import { participantsApi } from "@/api/participants-api";

import { Main } from "@/components/main";
import { Button } from "@/components/ui/button";

async function loader({ params }: LoaderFunctionArgs) {
	const participant = await participantsApi.getById(params.participantId ?? "");

	return { participant };
}

export function ParticipantPage() {
	const { participant } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

	if (!participant) {
		return (
			<Main className="grid place-content-center p-6">
				<p className="text-muted-foreground">
					Participante no ha sido encontrado
				</p>
			</Main>
		);
	}

	return (
		<Main className="py-28">
			<div>
				<h1 className="text-4xl font-bold">{participant.fullName}</h1>

				<p className="mt-4 text-2xl text-muted-foreground">
					{participant.role}
				</p>

				<Button className="mt-6" asChild>
					<a href={participant.cvUrl} target="_blank">
						<ExternalLink className="mr-2 h-4 w-4" />

						<span>Visitar página</span>
					</a>
				</Button>
			</div>
		</Main>
	);
}

ParticipantPage.loader = loader;
