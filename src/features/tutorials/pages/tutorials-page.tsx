import { Video } from "lucide-react";

import { Main } from "@/components/main";

const tutorials: Array<{
	title: string;
	videoUrl: string;
	description: string;
}> = [
	{
		title: "Agregar confetti",
		description: "Aprende como agregar confetti en una página",
		videoUrl: "https://youtu.be/xDXteUxb1X8",
	},
	{
		title: "Mostrar skeleton durante la carga de datos",
		description:
			"Aprende a mostrar un skeleton durante la carga de datos desde una API",
		videoUrl: "https://youtu.be/rLadJ7XkiSM",
	},
	{
		title: "Validación de respuestas",
		description: "Aprende como usar Zod para validar los datos de una API",
		videoUrl: "https://youtu.be/gDqOgB5o7co",
	},
	{
		title: "Instalar Tailwind CSS y shadcn/ui",
		description: "Aprende instalar Tailwind y configurar shadcn/ui",
		videoUrl: "https://youtu.be/HHUIjhN7uVc",
	},
].sort((a, b) => a.title.localeCompare(b.title));

export function TutorialsPage() {
	return (
		<Main className="space-y-6 py-28">
			<div className="space-y-4">
				<h1 className="text-4xl font-bold">Tutoriales</h1>

				<p className="text-muted-foreground">
					Aprende sobre cómo se realizó esta página
				</p>
			</div>

			<ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{tutorials.map((tutorial, index) => {
					return (
						<li key={index} className="transition-transform hover:scale-105">
							<a
								href={tutorial.videoUrl}
								target="_blank"
								className="flex h-full flex-col gap-2 rounded-md border p-6"
							>
								<Video className="h-4 w-4 text-red-700" />

								<h3 className="font-medium">{tutorial.title}</h3>

								<p className="text-muted-foreground">{tutorial.description}</p>
							</a>
						</li>
					);
				})}
			</ul>
		</Main>
	);
}
