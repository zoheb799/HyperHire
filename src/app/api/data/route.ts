import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET() {
  const filePath = path.join(process.cwd(), 'src/data/sampleData.md');

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent); 
    return new Response(
      JSON.stringify({ data, content }), 
      { headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error reading file:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to load data' }), 
      { status: 500 }
    );
  }
}
