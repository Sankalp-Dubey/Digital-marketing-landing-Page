import BlogDetailsSection from "@/components/blog/BlogDetailsSection";
import { baseURL } from "@/config";

export async function generateMetadata({ params, searchParams }, parent) {
  // fetch data
  const blog = await fetch(
    `${baseURL}/api/blog_details?slug=${params?.slug}`
  ).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blog?.data?.seo_title || "Blog | Spirehubs",
    openGraph: {
      title: blog?.data?.seo_title || "Blog | Spirehubs",
      description: blog?.data?.meta_descriptions,
      url: `https://www.spirehubs.com/blog/${blog?.data?.slug}`,
      siteName: "SpireHub",
      locale: "en_US",
      type: "website",
      images: [`${blog?.data?.image}`, ...previousImages],
    },
    twitter: {
      card: "summary_large_image",
      title: blog?.data?.seo_title || "Blog | Spirehubs",
      description: blog?.data?.meta_descriptions,
      url: `https://www.spirehubs.com/blog/${blog?.data?.slug}`,
      images: [`${blog?.data?.image}`],
    },
    facebook: {
      card: "summary_large_image",
      title: blog?.data?.seo_title || "Blog | Spirehubs",
      description: blog?.data?.meta_descriptions,
      url: `https://www.spirehubs.com/blog/${blog?.data?.slug}`,
      images: [`${blog?.data?.image}`],
    },
    metadataBase: new URL("https://www.spirehubs.com"),
    description: blog?.data?.meta_descriptions,
    alternates: {
      canonical: `https://www.spirehubs.com/blog/${blog?.data?.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

function BlogDetails() {
  return <BlogDetailsSection />;
}

export default BlogDetails;
