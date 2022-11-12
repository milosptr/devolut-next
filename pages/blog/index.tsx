import { getFooter } from "../../services"
import Head from 'next/head'
import { Header } from "../../layouts/Header";
import Footer from "../../layouts/Footer";

interface Props {
  footer: any;
}

const Blog = ({ footer }: Props) => {
  return (
    <div className="">
      <Head>
        <title>Blog | Devolution</title>
        {/* { homepage.seo && homepage.seo.title && (
          <meta name="title" content={homepage.seo.title} />
        )}
        { homepage.seo && homepage.seo.description && (
          <meta name="description" content={homepage.seo.description} />
        )}
        { homepage.seo && homepage.seo.keywords && (
          <meta name="keywords" content={homepage.seo.keywords} />
        )} */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="py-64 flex items-center justify-center">
          <h1 className="text-3xl">Comming soon.</h1>
        </div>
      </main>
      <Footer footer={footer} />
    </div>
  )
}

export default Blog

export async function getStaticProps() {
  const footer = await getFooter()
  return {
    props: { footer }
  }
}
