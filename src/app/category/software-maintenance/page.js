import { SectionContainer } from "@/components/layout.component";
import { PageTitle } from "@/components/typography.component";

import BlogCategories from "@/components/blog/BlogCategories";
import BlogCategoryTab from "@/components/blog/BlogCategoryTab";
export const metadata = {
  title: "Softwares Maintenance in India Blog | SpireHub Softwares",
  description:
    "SpireHub Softwares is a Website Maintenance and Software Development Company in India, if you are looking for a Web development Blog then You can visit here.",
  alternates: {
    canonical: "https://www.spirehubs.com/category/software-maintenance",
  },
  metadataBase: new URL("https://www.spirehubs.com"),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Softwares Maintenance in India Blog | SpireHub Softwares",
    description:
      "SpireHub Softwares is a Website Maintenance and Software Development Company in India, if you are looking for a Web development Blog then You can visit here.",
    url: "https://www.spirehubs.com/category/software-maintenance",
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
                <PageTitle>Software Maintenance Blogs</PageTitle>
              </div>
            </div>
          </SectionContainer>
        </div>
      </div>
      <BlogCategoryTab activeURL="software-maintenance" />
      <BlogCategories slug="software-maintenance" />
    </div>
  );
}

export default DigitalMarketingBlog;
