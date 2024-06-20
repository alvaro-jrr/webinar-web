import { Assignment } from "@/models/assignment";
import { isErrorResponse } from "@/models/error-response";

import { client } from "./client";
import { createApiResponseSchema } from "./utils";

export const assignmentsApi = {
	/**
	 * Gets all the assignments.
	 *
	 * @returns A promise that resolves with the assignments.
	 */
	async getAll() {
		const response = await client("assignments", {
			method: "GET",
		});

		const json = await response?.json();

		const parsed = createApiResponseSchema(Assignment.array()).safeParse(json);

		if (!parsed.success || isErrorResponse(parsed.data)) {
			return [];
		}

		return parsed.data.data;
	},
	/**
	 * Gets the assignment.
	 *
	 * @returns A promise that resolves with the assignment.
	 */
	async getById(assignmentId: string) {
		const response = await client(`assignments/${assignmentId}`, {
			method: "GET",
		});

		const json = await response?.json();

		const parsed = createApiResponseSchema(Assignment.nullable()).safeParse(
			json,
		);

		if (!parsed.success || isErrorResponse(parsed.data)) {
			return null;
		}

		return parsed.data.data;
	},
};
