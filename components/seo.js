import React from "react";
import Head from "next/head";
import axios from "axios";
import seoImage from "../public/images/hero-image.jpg";

export default function SEO() {
  const [seoDescription, setSeoDescription] = React.useState();

  React.useEffect(() => {
    (async function () {
      axios.get("https://login.findie.se/api/profiles/251/").then((res) => {
        const seoDescription = res.data.data.description;
        setSeoDescription(seoDescription);
      });
    })();
  }, []);

  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Mr.Mango | it takes two to mango</title>
      <meta name="title" content="Mr.Mango | it takes two to mango" />
      <meta name="description" content={seoDescription || ""} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mrmangostreetfood.com/" />
      <meta property="og:title" content="Mr.Mango | it takes two to mango" />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://mrmangostreetfood.com/" />
      <meta
        property="twitter:title"
        content="Mr.Mango | it takes two to mango"
      />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={seoImage}></meta>
      <link rel="shortcut icon" href="/favicon-32x32.png" />
    </Head>
  );
}
