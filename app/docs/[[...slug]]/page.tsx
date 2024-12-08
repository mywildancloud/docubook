import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { page_routes } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getDocsForSlug } from "@/lib/markdown";
import { Typography } from "@/components/typography";
import EditThisPage from "@/components/edit-on-github";
import { formatDate2 } from "@/lib/utils";

type PageProps = {
  params: { slug: string[] };
};

export default async function DocsPage({ params: { slug = [] } }: PageProps) {
  const pathName = slug.join("/");
  const res = await getDocsForSlug(pathName);

  if (!res) notFound();

  // Path file untuk link edit
  const filePath = `contents/docs/${slug.join("/") || ""}/index.mdx`;

  // Ambil tanggal publikasi dari frontmatter
  const publishDate = res.frontmatter.date;

  return (
    <div className="flex items-start gap-10">
      <div className="flex-[4.5] pt-10">
        <DocsBreadcrumb paths={slug} />
        <Typography>
          <h1 className="text-3xl !-mt-0.5">{res.frontmatter.title}</h1>
          <p className="-mt-4 text-muted-foreground text-[16.5px]">
            {res.frontmatter.description}
          </p>
          <div>{res.content}</div>
          <div className="my-8 flex justify-between items-center border-b-2 border-x-muted-foreground">
            {/* Tampilkan tanggal publikasi jika ada */}
            {publishDate && (
              <p className="text-[13px] text-muted-foreground">
                Published on {formatDate2(publishDate)}
              </p>
            )}
            <EditThisPage filePath={filePath} />
          </div>
          <Pagination pathname={pathName} />
        </Typography>
      </div>
      <Toc path={pathName} />
    </div>
  );
}
