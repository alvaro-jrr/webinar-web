import { z } from "zod";

export const Assistant = z.object({
	id: z.string().min(1, "Debe tener un ID"),
	fullName: z
		.string()
		.min(1, "Debe ingresar el nombre completo")
		.min(2, "Debe tener al menos 2 caracteres")
		.max(50, "Debe ser menor o igual a 50 caracteres"),
	email: z
		.string()
		.min(1, "Debe ingresar un email")
		.max(50, "Debe ser menor o igual a 50 caracteres")
		.email("Debe ser un email valido"),
	company: z.nullable(
		z.string().max(50, "Debe ser menor o igual a 50 caracteres"),
	),
	position: z.nullable(
		z.string().max(50, "Debe ser menor o igual a 50 caracteres"),
	),
	interests: z.nullable(z.string()),
	isConfirmed: z.boolean(),
});

export const CreateAssistant = Assistant.omit({
	id: true,
	isConfirmed: true,
});

export type CreateAssistantType = z.infer<typeof CreateAssistant>;
