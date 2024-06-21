import { z } from "zod";

export const ErrorResponse = z.object({
	status: z.number(),
	message: z.string(),
});

export type ErrorResponseType = z.infer<typeof ErrorResponse>;

export function isErrorResponse(value: unknown): value is ErrorResponseType {
	return ErrorResponse.safeParse(value).success;
}
