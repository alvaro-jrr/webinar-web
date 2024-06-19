import { isErrorResponse } from "@/models/error-response";
import { Participant } from "@/models/participant";

import { client } from "./client";
import { createApiResponseSchema } from "./utils";

export const participantsApi = {
	/**
	 * Gets all the webinar participants.
	 *
	 * @returns A promise that resolves with the participants.
	 */
	async getAll() {
		const response = await client("participants", {
			method: "GET",
		});

		const json = await response?.json();

		const parsed = createApiResponseSchema(Participant.array()).safeParse(json);

		if (!parsed.success || isErrorResponse(parsed.data)) {
			return [];
		}

		return parsed.data.data;
	},
	/**
	 * Gets the webinar participant.
	 *
	 * @returns A promise that resolves with the participant.
	 */
	async getById(participantId: string) {
		const response = await client(`participants/${participantId}`, {
			method: "GET",
		});

		const json = await response?.json();

		const parsed = createApiResponseSchema(Participant.nullable()).safeParse(
			json,
		);

		if (!parsed.success || isErrorResponse(parsed.data)) {
			return null;
		}

		return parsed.data.data;
	},
};
