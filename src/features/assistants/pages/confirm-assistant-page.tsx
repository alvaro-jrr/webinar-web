import { type LoaderFunctionArgs, useLoaderData, Link } from "react-router-dom";

import { assistantsApi } from "@/api/assistants-api";

import { Confetti } from "@/components/confetti";
import { Main } from "@/components/main";
import { Button } from "@/components/ui/button";

async function loader({ request }: LoaderFunctionArgs) {
	const url = new URL(request.url);
	const token = url.searchParams.get("token");

	const assistant = token ? await assistantsApi.confirm(token) : null;

	return { assistant };
}

export function ConfirmAssistantPage() {
	const { assistant } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

	if (!assistant) {
		return (
			<Main className="space-y-8 py-28 text-center">
				<div className="space-y-4">
					<h1 className="text-4xl font-bold">Intenta de nuevo más tarde</h1>

					<p className="text-muted-foreground">
						Ha ocurrido un error al intentar completar tu registro, intenta de
						nuevo más tarde.
					</p>
				</div>

				<Button asChild>
					<Link to="/">Volver al inicio</Link>
				</Button>
			</Main>
		);
	}

	return (
		<>
			<Confetti />

			<Main className="space-y-8 py-28 text-center">
				<div className="space-y-4">
					<p className="text-sm text-muted-foreground">Gracias por unirte</p>

					<h1 className="text-4xl font-bold">Tu registro se ha completado</h1>

					<p className="text-muted-foreground">
						Hemos completado tu registro con éxito, nos vemos en el webinar
					</p>
				</div>

				<Button asChild>
					<Link to="/">Volver al inicio</Link>
				</Button>
			</Main>
		</>
	);
}

ConfirmAssistantPage.loader = loader;
