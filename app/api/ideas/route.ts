import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "ideas.json");

async function readIdeas() {
  const data = await fs.readFile(DATA_PATH, "utf-8");
  return JSON.parse(data);
}

async function writeIdeas(ideas: unknown[]) {
  await fs.writeFile(DATA_PATH, JSON.stringify(ideas, null, 2), "utf-8");
}

export async function GET() {
  const ideas = await readIdeas();
  return NextResponse.json(ideas);
}

export async function POST(request: Request) {
  const body = await request.json();
  const ideas = await readIdeas();

  const newIdea = {
    id: String(Date.now()),
    title: body.title,
    icon: body.icon || "📌",
    description: body.description,
    category: body.category,
    order: ideas.length + 1,
  };

  ideas.push(newIdea);
  await writeIdeas(ideas);

  return NextResponse.json(newIdea, { status: 201 });
}
