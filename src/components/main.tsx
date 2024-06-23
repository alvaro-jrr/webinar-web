import { cn } from "@/lib/utils";

export function Main({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) {
	return (
		<main className={cn("container max-w-screen-lg flex-1", className)}>
			{children ?? null}
		</main>
	);
}
