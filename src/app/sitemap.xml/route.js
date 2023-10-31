import { baseURL } from "@/config";

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->


<url>
  <loc>https://www.spirehubs.com/</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>1.00</priority>
</url>
<url>
  <loc>https://www.spirehubs.com/company</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.spirehubs.com/services</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.spirehubs.com/web-design</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.spirehubs.com/web-development</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.spirehubs.com/mobile-app-development</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.spirehubs.com/software-maintenance</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.spirehubs.com/digital-marketing</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.spirehubs.com/hire-resources</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.spirehubs.com/portfolios</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.spirehubs.com/contact-us</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.spirehubs.com/blog</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.spirehubs.com/careers</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.spirehubs.com/term-conditions</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.spirehubs.com/privacy-policy</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.spirehubs.com/cookies-policy</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.spirehubs.com/sitemap</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>0.80</priority>
</url>
<url>
  <loc>https://www.spirehubs.com/category/web-design</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://www.spirehubs.com/category/web-development</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://www.spirehubs.com/category/mobile-app-development</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://www.spirehubs.com/category/software-maintenance</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://www.spirehubs.com/category/digital-marketing</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>0.64</priority>
</url>
<url>
  <loc>https://www.spirehubs.com/faq</loc>
  <lastmod>2023-10-05T09:31:29+00:00</lastmod>
  <priority>0.64</priority>
</url>


 ${posts
   .map(({ slug, updated_at }) => {
     const dateTime = updated_at.split(" ");
     return `
       <url>
           <loc>${`https://www.spirehubs.com/blog/${slug}`}</loc>
           <lastmod>${`${dateTime[0]}T${dateTime[1]}+00:00`}</lastmod>
           <priority>0.64</priority>
       </url>
     `;
   })
   .join("")}


</urlset>`;
}

export async function GET() {
  const posts = await fetch(`${baseURL}/api/blog`).then((response) =>
    response.json()
  );
  const body = generateSiteMap(posts.data);

  return new Response(body, {
    status: 200,
    headers: {
      "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
      "content-type": "application/xml",
    },
  });
}
