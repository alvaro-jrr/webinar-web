import { Skeleton } from "@/components/ui/skeleton";

import { useParticipants } from "@/hooks/use-participants";

import { ParticipantItem } from "./participant-item";

export function ParticipantsList() {
	const { participants, isLoading } = useParticipants();

	// No participants.
	if (!isLoading && !participants.length) {
		return (
			<div className="p-6 text-center">
				<p className="text-muted-foreground">
					No hay participantes por mostrar
				</p>
			</div>
		);
	}

	return (
		<ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
			{isLoading ? (
				<ParticipantsSkeleton length={6} />
			) : (
				participants.map((participant) => {
					return (
						<li key={participant.id}>
							<ParticipantItem participant={participant} />
						</li>
					);
				})
			)}
		</ul>
	);
}

/**
 * The skeleton to display for the participants.
 */
function ParticipantsSkeleton({ length }: { length: number }) {
	const items = Array(length).fill(0);

	return items.map((_, index) => {
		return (
			<li key={index}>
				<div className="flex items-center gap-4 rounded-md border p-6">
					<Skeleton className="h-14 w-14 rounded-lg" />

					<div className="flex-1 space-y-2">
						<Skeleton className="h-4 w-full" />

						<Skeleton className="h-4 w-full" />
					</div>
				</div>
			</li>
		);
	});
}
