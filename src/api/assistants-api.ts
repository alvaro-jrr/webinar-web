import { Assistant, type CreateAssistantType } from "@/models/assistant";
import { isErrorResponse } from "@/models/error-response";

import { client } from "./client";
import { createApiResponseSchema } from "./utils";

export const assistantsApi = {
	/**
	 * Enrolls an assistant.
	 *
	 * @returns A promise that resolves with the assistant on success.
	 */
	async enroll(assistant: CreateAssistantType) {
		const response = await client("assistants/enroll", {
			method: "POST",
			body: assistant,
		});

		const json = await response?.json();

		const parsed = createApiResponseSchema(Assistant).safeParse(json);

		if (!parsed.success || isErrorResponse(parsed.data)) {
			return null;
		}

		return parsed.data.data;
	},
	/**
	 * Confirms an assistant.
	 *
	 * @returns A promise that resolves with the assistant on success.
	 */
	async confirm(token: string) {
		const response = await client(`assistants/confirm?token=${token}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			method: "POST",
		});

		const json = await response?.json();

		const parsed = createApiResponseSchema(Assistant).safeParse(json);

		if (!parsed.success || isErrorResponse(parsed.data)) {
			return null;
		}

		return parsed.data.data;
	},
};
