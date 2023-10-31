import Header from "@/components/header/Header";
import "../styles/globals.css";
import Footer from "@/components/footer/Footer";
import { Raleway } from "next/font/google";
import ScrollToTop from "@/components/scroll.to.top";
import ReduxProvider from "@/components/provider/ReduxProvider";
import SocialMediaIcons from "@/components/social.media";
import ChatBot from "@/components/chat.bot";
import Script from "next/script";
import Head from "next/head";

const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Web & Mobile App Development Company in India | SpireHub",
  description:
    "SpireHub Softwares is a dynamic Mobile App, Web Development & Digital Marketing agency in India, specializing in crafting innovative digital solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      className={raleway.className}
    >
      <head>
        <meta
          name="google-site-verification"
          content="xHM3UVdf4dO670c05fw3abdl0jEMyZ5K-mCTRCGJZpg"
        />
        {/* <!-- Google Tag Manager --> */}

        <Script id="my-script">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MZL8JTCS');`}
        </Script>
        {/* <!-- End Google Tag Manager --> */}

        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          id="gtag"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-902NPPQ926"
        />
        <Script id="google-tag">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-902NPPQ926');`}
        </Script>
      </head>
      <body className="flex flex-col h-screen layout-class">
        <ReduxProvider>
          <Header />
          {children}
        </ReduxProvider>
        <Footer />
        {/* <ScrollToTop /> */}
        <Script
          type="text/javascript"
          src="https://widget.clutch.co/static/js/widget.js"
        ></Script>
        <SocialMediaIcons />
        <ChatBot />

        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZL8JTCS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
      </body>
    </html>
  );
}
