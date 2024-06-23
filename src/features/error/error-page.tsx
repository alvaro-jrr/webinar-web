import { Link } from "react-router-dom";

import { BasePage } from "@/components/base-page";
import { Main } from "@/components/main";
import { Button } from "@/components/ui/button";

export function ErrorPage() {
	return (
		<BasePage>
			<Main className="flex flex-col items-center justify-center space-y-6 p-6">
				<div className="space-y-4">
					<h1 className="text-center text-3xl font-bold">
						Página no encontrada{" "}
					</h1>

					<p className="text-center text-muted-foreground">
						Esta no es la página que estás buscando
					</p>
				</div>

				<Button asChild>
					<Link to="/">Volver al inicio</Link>
				</Button>
			</Main>
		</BasePage>
	);
}
