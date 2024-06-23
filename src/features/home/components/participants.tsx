import { Link } from "react-router-dom";

import { type ParticipantType } from "@/models/participant";

export function Participants({
	participants,
}: {
	participants: Array<ParticipantType>;
}) {
	return (
		<section className="space-y-6">
			<div className="space-y-4">
				<h2 className="text-3xl font-bold">Participantes</h2>

				<p className="text-muted-foreground">
					Parte del equipo innovador de Tech Talent Hub
				</p>
			</div>

			<ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
				{participants.map((participant) => {
					return (
						<li key={participant.id}>
							<Link
								className="flex items-center gap-4 rounded-md border p-6 transition-transform hover:scale-105"
								to={`/participants/${participant.id}`}
							>
								<img
									src={participant.photoUrl}
									width="56"
									height="56"
									alt={`Foto de perfil de ${participant.fullName}`}
									className="aspect-square rounded-lg object-cover"
								/>

								<div className="space-y-2">
									<h3 className="font-medium">{participant.fullName}</h3>

									<p className="text-muted-foreground md:line-clamp-1">
										{participant.role}
									</p>
								</div>
							</Link>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
