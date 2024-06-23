import { Skeleton } from "@/components/ui/skeleton";

export function ParticipantSkeleton() {
	return (
		<div className="w-full">
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div>
					<Skeleton className="h-5 w-full" />

					<Skeleton className="mt-2 h-10 w-full" />

					<Skeleton className="mt-4 h-8 w-full" />

					<Skeleton className="mt-6 h-10 w-full max-w-[12rem]" />
				</div>

				<Skeleton className="mx-auto aspect-square h-auto w-full max-w-[300px] rounded-full" />
			</div>

			<div className="space-y-6">
				<div className="space-y-4">
					<Skeleton className="h-9 w-full max-w-[200px]" />

					<Skeleton className="h-6 w-full" />
				</div>

				<Skeleton className="h-80 w-full" />
			</div>
		</div>
	);
}
