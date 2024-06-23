import useSWR from "swr";

import { participantsApi } from "@/api/participants-api";

export function useParticipant(
	id: string,
	{ assignments }: { assignments: boolean } = { assignments: false },
) {
	const { data, isLoading } = useSWR(
		`participant/${id}`,
		() => participantsApi.getById(id, { assignments }),
		{
			revalidateIfStale: false,
			revalidateOnFocus: false,
		},
	);

	return { participant: data, isLoading };
}
