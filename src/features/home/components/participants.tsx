import { ParticipantsList } from "./participants-list";

export function Participants() {
	return (
		<section className="space-y-6">
			<div className="space-y-4">
				<h2 className="text-3xl font-bold">Participantes</h2>

				<p className="text-muted-foreground">
					Parte del equipo innovador de Tech Talent Hub
				</p>
			</div>

			<ParticipantsList />
		</section>
	);
}
