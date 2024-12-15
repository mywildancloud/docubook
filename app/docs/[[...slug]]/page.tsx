import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { notFound } from "next/navigation";
import { getDocsForSlug } from "@/lib/markdown";
import { Typography } from "@/components/typography";
import EditThisPage from "@/components/edit-on-github";
import { formatDate2 } from "@/lib/utils";
import Head from "next/head";

// Definisi tipe untuk props halaman
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

  // Path absolut untuk `og:image`
  const ogImage = image
    ? `${meta.baseURL}/images/${image}`
    : `${meta.baseURL}/images/og-image.png`; // Gambar default jika `image` tidak ada

  // Path file untuk link edit
  const filePath = `contents/docs/${slug.join("/") || ""}/index.mdx`;

  return (
    <>
      <Head>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}/docs/${slug.join("/")}`} />
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
