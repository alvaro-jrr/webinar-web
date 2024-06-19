import { z } from "zod";

export const Participant = z.object({
	id: z.string(),
	fullName: z.string().min(1, "Debe tener un nombre"),
	role: z.string().min(1, "Debe tener un rol"),
	cvUrl: z.string().min(1, "Debe tener un curriculum").url("Debe ser una URL"),
});

export type ParticipantType = z.infer<typeof Participant>;
