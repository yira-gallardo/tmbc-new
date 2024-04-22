import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Layout/Footer/Footer";
import Nav from "@/components/Layout/Nav/Nav";
import Divider from "@/components/UI/Divider/Divider";
import Animation from "@/components/UI/Animation/Animation";
import { createClient } from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

async function getPostBySlug(slug: string) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  } as any);

  const entry = await client.getEntries({
    content_type: "pageBlogPost",
    "fields.slug": slug,
  });

  return {
    props: {
      post: entry.items[0],
    },
  };
}

export default async function NewsPress({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getPostBySlug(params.slug);
  const { post: postData }: any = data.props;
  const richTextHtml = documentToHtmlString(postData.fields.content);

  return (
    <main>
      <Nav />
      <Animation
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <section className="container max-w-screen-xl mx-auto py-20 md:py-40 px-8 md:px-0">
          <Divider />
          <h2 className="text-2xl font-bold uppercase">
            {postData.fields.title}
          </h2>
          <div className="flex items-center my-4 gap-10">
            <div className="w-2/12">
              <Image
                src={`https:${postData.fields.image.fields.file.url}`}
                alt={postData.fields.title}
                width={1000}
                height={1000}
                className="w-full"
              />
            </div>
            <div className="w-10/12">
              <div dangerouslySetInnerHTML={{ __html: richTextHtml }} />
            </div>
          </div>
        </section>
      </Animation>
      <Footer />
    </main>
  );
}
