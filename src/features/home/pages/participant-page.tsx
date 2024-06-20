import { ExternalLink } from "lucide-react";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

import { participantsApi } from "@/api/participants-api";

import { Main } from "@/components/main";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

async function loader({ params }: LoaderFunctionArgs) {
	const participant = await participantsApi.getById(params.participantId ?? "");

	const assignments = await participantsApi.getAssignmentsDelivery(
		params.participantId ?? "",
	);

	return { participant, assignments };
}

export function ParticipantPage() {
	const { participant, assignments } = useLoaderData() as Awaited<
		ReturnType<typeof loader>
	>;

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
		<Main className="space-y-24 py-28">
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div>
					<p className="text-sm text-muted-foreground">Participante</p>

					<h1 className="mt-2 text-4xl font-bold">{participant.fullName}</h1>

					<p className="mt-4 text-2xl text-muted-foreground">
						{participant.role}
					</p>

					<Button className="mt-6" asChild>
						<a href={participant.cvUrl} target="_blank">
							<span>Visitar página</span>

							<ExternalLink className="ml-2 h-4 w-4" />
						</a>
					</Button>
				</div>

				<img
					src={participant.photoUrl}
					width="300"
					height="300"
					alt={`Foto de perfil de ${participant.fullName}`}
					className="mx-auto mt-6 rounded-full object-cover"
				/>
			</div>

			<section className="space-y-6">
				<div className="space-y-4">
					<h2 className="text-3xl font-bold">Notas</h2>

					<p className="text-muted-foreground">
						Las notas de las tareas entregadas por el participante
					</p>
				</div>

				<div className="relative overflow-x-auto rounded-md border">
					<Table className="min-w-full">
						<TableHeader>
							<TableRow>
								<TableHead>Tarea</TableHead>
								<TableHead>Ponderación</TableHead>
								<TableHead>Nota</TableHead>
								<TableHead>Entrega</TableHead>
							</TableRow>
						</TableHeader>

						<TableBody className="text-nowrap">
							{assignments.map((assignment) => (
								<TableRow key={assignment.id}>
									<TableCell className="font-medium">
										{assignment.title}
									</TableCell>

									<TableCell>{assignment.weighting}%</TableCell>

									<TableCell>{assignment.delivery?.score ?? ""}</TableCell>

									<TableCell>
										{assignment.delivery?.url ? (
											<Button
												asChild
												className="p-0"
												variant="outline"
												size="icon"
											>
												<a href={assignment.delivery.url} target="_blank">
													<ExternalLink className="h-4 w-4" />

													<span className="sr-only">Ver entrega</span>
												</a>
											</Button>
										) : null}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</section>
		</Main>
	);
}

ParticipantPage.loader = loader;
