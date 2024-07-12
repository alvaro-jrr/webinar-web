import { Link } from "react-router-dom";

import { Main } from "@/components/main";

import { topics } from "../topic-data";

export function TopicsPage() {
	return (
		<Main className="space-y-6 py-28">
			<div className="space-y-4">
				<h1 className="text-4xl font-bold">Temas</h1>

				<p className="text-muted-foreground">
					Aprende sobre los temas de esta página
				</p>
			</div>

			<ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
				{topics.map((topic, index) => {
					return (
						<li key={index} className="transition-transform hover:scale-105">
							<Link
								to={`/topics/${topic.id}`}
								className="flex h-full flex-col gap-2 rounded-md border p-6"
							>
								<h3 className="font-medium">{topic.title}</h3>

								<p className="text-muted-foreground">{topic.description}</p>
							</Link>
						</li>
					);
				})}
			</ul>
		</Main>
	);
}
