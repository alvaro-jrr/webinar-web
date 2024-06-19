import { Link } from "react-router-dom";

import { ParticipantType } from "@/models/participant";

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
						<Link
							className="transition-transform hover:scale-105"
							key={participant.id}
							to={`/participants/${participant.id}`}
						>
							<li className="space-y-2 rounded-md border p-6">
								<h3 className="font-medium">{participant.fullName}</h3>

								<p className="text-muted-foreground">{participant.role}</p>
							</li>
						</Link>
					);
				})}
			</ul>
		</section>
	);
}
