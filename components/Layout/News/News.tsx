import Divider from "@/components/UI/Divider/Divider";
import { createClient } from "contentful";
import Image from "next/image";
import Link from "next/link";
import Animation from "@/components/UI/Animation/Animation";

async function getData() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  } as any);

  const entries = await client.getEntries({
    content_type: "entradas",
  });

  return {
    props: {
      posts: entries.items,
    },
  };
}

export default async function News() {
  const data = await getData();
  const { posts: postsData } = data.props;

  return (
    <section className="container mx-auto pt-0 md:pt-10">
      <div className="max-w-screen-xl mx-auto py-10 md:py-20 px-8 ">
        <Divider />
        <h2 className="text-2xl font-bold uppercase">News & Press</h2>
        <div className="my-20 ">
          <Animation
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {postsData.slice(0, 8).map((post: any, numeroIndice: number) => (
              <Link
                key={numeroIndice}
                href={`/news/${post.fields.slug}`}
                target="_blank"
                className="grid grid-cols-1 sm:grid-cols-2 items-center hover:bg-zinc-100"
              >
                <div
                  className={`w-full h-[400px] relative ${
                    numeroIndice % 2 ? "md:hidden" : ""
                  }`}
                >
                  <Image
                    src={`https:${post.fields.image.fields.file.url}`}
                    alt="Press 1"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4 sm:p-10">
                  <h4 className="text-xl sm:text-3xl font-bold uppercase">
                    {post.fields.title}
                  </h4>
                  <button className="font-bold my-4 hover:underline">
                    Ver más
                  </button>
                </div>
                {numeroIndice % 2 === 1 && (
                  <div className="w-full h-[400px] relative hidden md:block">
                    <Image
                      src={`https:${post.fields.image.fields.file.url}`}
                      alt="Press 1"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                )}
              </Link>
            ))}
          </Animation>
        </div>
      </div>
    </section>
  );
}
