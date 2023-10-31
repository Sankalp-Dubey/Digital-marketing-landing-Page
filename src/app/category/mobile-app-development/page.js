import { SectionContainer } from "@/components/layout.component";
import { PageTitle } from "@/components/typography.component";

import BlogCategories from "@/components/blog/BlogCategories";
import BlogCategoryTab from "@/components/blog/BlogCategoryTab";
export const metadata = {
  title: "Mobile Apps Development in India Blog | SpireHub Softwares",
  description:
    "SpireHub Softwares Blogs - Ready for the latest news, feeds, technology, and blog posts along with recent updates on mobile app development.",
  alternates: {
    canonical: "https://www.spirehubs.com/category/mobile-app-development",
  },
  metadataBase: new URL("https://www.spirehubs.com"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mobile Apps Development in India Blog | SpireHub Softwares",
    description:
      "SpireHub Softwares Blogs - Ready for the latest news, feeds, technology, and blog posts along with recent updates on mobile app development.",
    url: "https://www.spirehubs.com/category/mobile-app-development",
    siteName: "SpireHub",
    locale: "en_US",
    type: "website",
  },
};
function DigitalMarketingBlog() {
  const customStyle = {
    backgroundImage: `linear-gradient(to right, 
      rgba(39,61,80, 1), rgba(39,61,80, 1))`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    minHeight: "400px",
  };
  return (
    <div className="mt-[-88px] mb-[90px]">
      <div
        className="py-14 md:py-20 lg:py-24 text-white flex items-center"
        style={customStyle}
      >
        <div className="w-full">
          <SectionContainer className="">
            <div className="flex items-center">
              <div className="w-full">
                <PageTitle>Mobile App Development Blogs</PageTitle>
              </div>
            </div>
          </SectionContainer>
        </div>
      </div>
      <BlogCategoryTab activeURL="mobile-app-development" />
      <BlogCategories slug="mobile-app-development" />
    </div>
  );
}

export default DigitalMarketingBlog;
