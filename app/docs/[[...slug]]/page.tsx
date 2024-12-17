import { notFound } from "next/navigation";
import Head from "next/head";
import { getDocsForSlug } from "@/lib/markdown";
import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { Typography } from "@/components/typography";
import EditThisPage from "@/components/edit-on-github";
import { formatDate2 } from "@/lib/utils";
import docuConfig from "@/docu.json"; // Base URL dari config

const { meta } = docuConfig;

type PageProps = {
  params: {
    slug: string[];
  };
};

export default async function DocsPage({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);

  if (!res) notFound();

  const { title, description, image, date } = res.frontmatter;

  // Generate og:image URL
  const ogImage = image
    ? `${meta.baseURL}/images/${image}` // Base URL dari konfigurasi
    : `${meta.baseURL}/images/og-image.png`; // Fallback image jika tidak ada

  const filePath = `contents/docs/${slug.join("/") || ""}/index.mdx`;

  return (
    <>
      <Head>
        <title>{`${title} | Docs`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${meta.baseURL}/docs/${slug.join("/")}`} />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <div className="flex items-start gap-10">
        <div className="flex-[4.5] pt-10">
          <DocsBreadcrumb paths={slug} />
          <Typography>
            <h1 className="text-3xl !-mt-0.5">{title}</h1>
            <p className="-mt-4 text-muted-foreground text-[16.5px]">{description}</p>
            <div>{res.content}</div>
            <div className="my-8 flex justify-between items-center border-b-2 border-x-muted-foreground">
              {date && (
                <p className="text-[13px] text-muted-foreground">
                  Published on {formatDate2(date)}
                </p>
              )}
              <EditThisPage filePath={filePath} />
            </div>
            <Pagination pathname={pathName} />
          </Typography>
        </div>
        <Toc path={pathName} />
      </div>
    </>
  );
}
