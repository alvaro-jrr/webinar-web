import { Link } from "react-router-dom";

import type { ParticipantType } from "@/models/participant";

export function ParticipantItem({
	participant,
}: {
	participant: ParticipantType;
}) {
	return (
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
	);
}
