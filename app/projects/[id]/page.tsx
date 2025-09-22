import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";

type Props = { params: { id: string } };

export default async function ProjectPage({ params }: Props) {
    const { id } = await params
    const filePath = path.join(process.cwd(), "public/ProjectsFiles", `${id}.md`);

    if (!fs.existsSync(filePath)) return notFound();

    const markdown = await fs.promises.readFile(filePath, "utf-8");

    return (
        <div className="max-w-4xl mx-auto p-6 mt-10 ">
            <div className="mx-auto p-6 flex justify-center">
                <article className="prose prose-invert text-lg">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {markdown}
                    </ReactMarkdown>
                </article>
            </div>
        </div>
    );
}
