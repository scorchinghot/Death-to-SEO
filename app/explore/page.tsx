import { createClient } from "@/prismicio";
import AllPosts from "@/components/allpost";
import { RichTextField } from '@prismicio/client';
import Featured from "@/components/featured";
import PostCategories from "@/components/postcategories";

type Post = {
  uid: string;
  slug: string;
  subtitle: RichTextField; 
};


export default async function Explore() {
  const client = createClient();

  const pages = await client.getAllByType("post");

  const posts: Post[] = pages.map((page) => {
    const slice = page.data.slices[0]; 
    return {
      uid: page.uid,
      slug: page.slugs[0], 
      subtitle: slice.primary.subtitle, // extracting subtitle 
    };
  });

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-wrap space-x-4"> 
      <PostCategories />
      <Featured />
      <AllPosts posts={posts} />
      </div>
    </div>
  );
}
