import { z } from "zod";

export const Delivery = z.object({
	id: z.string(),
	participantId: z.string().min(1, "Debe seleccionar un participante"),
	assignmentId: z.string().min(1, "Debe seleccionar una tarea"),
	score: z
		.number()
		.gte(0, "Debe ser mayor o igual a 0")
		.lte(100, "Debe ser menor o igual a 100"),
	url: z.nullable(
		z
			.string()
			.min(1, "Debe ingresar una URL")
			.url("Debe ingresar una URL valida"),
	),
});

export type DeliveryType = z.infer<typeof Delivery>;
