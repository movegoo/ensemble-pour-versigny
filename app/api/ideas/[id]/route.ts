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

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const body = await request.json();
  const ideas = await readIdeas();
  const index = ideas.findIndex((idea: { id: string }) => idea.id === params.id);

  if (index === -1) {
    return NextResponse.json({ error: "Idée non trouvée" }, { status: 404 });
  }

  ideas[index] = { ...ideas[index], ...body };
  await writeIdeas(ideas);

  return NextResponse.json(ideas[index]);
}

export async function DELETE(_request: Request, { params }: { params: { id: string } }) {
  const ideas = await readIdeas();
  const filtered = ideas.filter((idea: { id: string }) => idea.id !== params.id);

  if (filtered.length === ideas.length) {
    return NextResponse.json({ error: "Idée non trouvée" }, { status: 404 });
  }

  await writeIdeas(filtered);
  return NextResponse.json({ success: true });
}
