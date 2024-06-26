import { z } from "zod";

import { AssignmentDelivery } from "./assignment";

export const Participant = z.object({
	id: z.string(),
	fullName: z.string().min(1, "Debe tener un nombre"),
	role: z.string().min(1, "Debe tener un rol"),
	cvUrl: z.string().min(1, "Debe tener un curriculum").url("Debe ser una URL"),
	photoUrl: z
		.string()
		.min(1, "Debe tener una foto de perfil")
		.url("Debe ser una URL"),
	assignments: AssignmentDelivery.array().default([]),
});

export type ParticipantType = z.infer<typeof Participant>;
