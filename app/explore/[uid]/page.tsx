import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import Link from 'next/link'

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();

  const page = await client.getByUID("post", uid).catch((error) => {
    console.error("Error fetching page:", error);
    notFound();
  });

  const getTitleText = (post: any) => {
    if (!post.data || !post.data.slices || post.data.slices.length === 0) {
      return "No title available";
    }
    const slice = post.data.slices[0];
    const title = slice.primary?.title;
    return title || "No title available";
  };

  const subtitle = page.data.slices[0]?.primary.subtitle
    ? extractTextFromRichText(page.data.slices[0].primary.subtitle)
    : 'No subtitle available';

  const content = page.data.slices[0]?.primary.content || [];

  return (
    <article className="max-w-3xl mx-auto px-4 py-12 text-white">
      <header className="mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-700">
          {getTitleText(page!)}
        </h1>
        <p className="text-xl text-gray-300">{subtitle}</p>
      </header>

      <div className="space-y-6">
        {content.map((block: any, index: number) => {
          switch (block.type) {
            case 'paragraph':
              return <p key={index} className="text-lg text-gray-300 mb-4">{handleHyperlinks(block.text, block.spans)}</p>;
            case 'heading1':
              return <h2 key={index} className="text-3xl font-semibold mb-4 text-gray-300">{block.text}</h2>;
            case 'heading2':
              return <h3 key={index} className="text-2xl font-medium mb-3 text-blue-400">{block.text}</h3>;
            case 'heading3':
              return <h4 key={index} className="text-xl font-medium mb-2 text-blue-200">{block.text}</h4>;
            case 'heading4':
              return <h5 key={index} className="text-lg font-medium mb-2 text-blue-200">{block.text}</h5>;
            case 'heading5':
              return <h6 key={index} className="text-base font-medium mb-2 text-blue-200">{block.text}</h6>;
            case 'heading6':
              return <h6 key={index} className="text-sm font-medium mb-2 text-blue-200">{block.text}</h6>;
            case 'list-item':
              return <ul key={index} className="list-disc pl-5 mb-4 text-gray-300"><li>{block.text}</li></ul>;
            case 'o-list-item':
              return (
                <ol key={index} className="list-decimal pl-5 mb-4 text-gray-300">
                  <li>{block.text}</li>
                </ol>
              );            
            case 'embed':
              return block.oembed?.embed_url ? (
                <div key={index} className="my-6">
                  <Link href={block.oembed.embed_url} target="_blank" rel="noopener noreferrer" className="block">
                    <h3 className="text-xl font-bold text-blue-400">{block.oembed.title}</h3>
                    <img
                      src={block.oembed.thumbnail_url || 'https://via.placeholder.com/150'}
                      alt={block.oembed.title || 'Image'}
                      className="mt-2 w-full rounded-lg"
                    />
                    <p className="mt-2 text-gray-300">{block.oembed.description as string}</p>
                  </Link>
                </div>
              ) : null;
            case 'image':
              return block.url ? (
                <img key={index} src={block.url} alt={block.alt || "Image"} className="mt-4 w-full rounded-lg" />
              ) : null;
            case 'preformatted':
              return (
                <pre key={index} className="bg-gray-800 text-gray-300 p-4 rounded-lg mt-4 whitespace-pre-wrap overflow-x-auto">
                  {block.text}
                </pre>
              );                            
            default:
              return null;
          }
        })}
      </div>
    </article>
  );
}

function extractTextFromRichText(richTextArray: any[]): string {
  return richTextArray?.map((block) => block.text).join(' ') || '';
}

function handleHyperlinks(text: string, spans: any[]) {
  if (!spans || spans.length === 0) return text;

  const processedText = [];
  let lastIndex = 0;

  spans.forEach((span, index) => {
    if (span.type === 'hyperlink') {
      processedText.push(text.substring(lastIndex, span.start));
      processedText.push(
        <Link key={index} href={span.data.url} className="text-blue-400 hover:underline">
          {text.substring(span.start, span.end)}
        </Link>
      );
      lastIndex = span.end;
    }
  });

  processedText.push(text.substring(lastIndex));

  return processedText;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { uid } = await params;
  const client = createClient();

  const page = await client.getByUID("post", uid).catch((error) => {
    console.error("Error fetching page metadata:", error);
    notFound();
  });

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("post").catch((error) => {
    console.error("Error fetching all pages:", error);
    return [];
  });

  return pages.map((page) => {
    return { uid: page.uid };
  });
}