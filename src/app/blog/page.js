import BlogCategoryTab from "@/components/blog/BlogCategoryTab";
import BlogCardList from "@/components/common/BlogCardList";
import BlogHeroSection from "@/components/common/BlogHeroSection";
import { SectionContainer } from "@/components/layout.component";
import { PageTitle } from "@/components/typography.component";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Blogs | SpireHub Software Private Limited",
  description:
    "SpireHub Softwares  Blogs - Ready for the latest news, feeds, technology, and blog posts along with recent updates on mobile, web app development, and digital marketing.",
  alternates: {
    canonical: "https://www.spirehubs.com/blog",
  },
  metadataBase: new URL("https://www.spirehubs.com"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mobile & Web App Development Services | SpireHubs",
    description:
      "SpireHub Softwares  Blogs - Ready for the latest news, feeds, technology, and blog posts along with recent updates on mobile, web app development, and digital marketing.",
    url: "https://www.spirehubs.com/blog",
    siteName: "SpireHub",
    locale: "en_US",
    type: "website",
  },
};

function Blog() {
  return (
    <div className="mt-[-88px] mb-[90px]">
      <BlogHeroSection backgroundImage="/images/coding.jpg">
        <PageTitle>
          Read Our <span className="font-[800]">Latest Blog</span>
        </PageTitle>
        <p className="text-lg my-5">
          Have an eye on real-world updates through our blog, news, and
          cutting-edge materials from the latest technology. Sail through a deep
          understanding of the market, product, and vision happening around the
          world.
        </p>
      </BlogHeroSection>
      <BlogCategoryTab />
      <div className="">
        <SectionContainer>
          <section className="blog-listing py-[50px]">
            <BlogCardList />
          </section>
        </SectionContainer>
      </div>
    </div>
  );
}

export default Blog;
