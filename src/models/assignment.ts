import { z } from "zod";

import { Delivery } from "./delivery";

export const Assignment = z.object({
	id: z.string(),
	title: z.string().min(1, "Debe tener un titulo"),
	weighting: z
		.number()
		.gt(0, "Debe ser mayor a 0")
		.lte(100, "Debe ser menor o igual a 100"),
});

export const AssignmentDelivery = Assignment.extend({
	delivery: Delivery.nullable(),
});

export type AssignmentType = z.infer<typeof Assignment>;
