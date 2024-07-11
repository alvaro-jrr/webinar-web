import { Main } from "@/components/main";
import { topics } from "../topic-data";
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export function TopicsDetail() {
    const { id } = useParams<{ id: string }>();
    const topic = topics.find(t => t.id === id);

    if (!topic) {
        return (
			<Main className="grid place-content-center p-6">
				<p className="text-muted-foreground">
					Tema no ha sido encontrado
				</p>
			</Main>
		);
    }

    return (
        <Main className="space-y-6 py-28">
            <div className="space-y-4">
                <h1 className="text-4xl font-bold">{topic.title}</h1>
                <ReactMarkdown remarkPlugins={[remarkGfm]} className="text-muted-foreground">{topic.content}</ReactMarkdown> 
            </div>
        </Main>
        )
}