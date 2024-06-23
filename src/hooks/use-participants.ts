import useSWR from "swr";

import { participantsApi } from "@/api/participants-api";

export function useParticipants() {
	const { data = [], isLoading } = useSWR(
		"participants",
		participantsApi.getAll,
		{
			revalidateIfStale: false,
			revalidateOnFocus: false,
		},
	);

	return { participants: data, isLoading };
}
