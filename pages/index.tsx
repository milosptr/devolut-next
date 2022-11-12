import Head from 'next/head'
import { Button } from '../components/common/button/Button'
import { Card } from '../components/common/card/Card'
import { MidPageCTA } from '../components/common/cta/MidPageCTA'
import { ContactFormSection } from '../layouts/ContactFormSection'
import Footer from '../layouts/Footer'
import { Header } from '../layouts/Header'
import { getFooter, getHomepage } from '../services'

interface Props {
  homepage: any;
  footer: any;
}

const Home = ({ homepage, footer }: Props) => {
  const pageTitle = homepage.seo && homepage.seo.title ? homepage.seo.title : 'Homepage | Devolution'
  return (
    <div className="">
      <Head>
        <title>{pageTitle}</title>
        { homepage.seo && homepage.seo.title && (
          <meta name="title" content={homepage.seo.title} />
        )}
        { homepage.seo && homepage.seo.description && (
          <meta name="description" content={homepage.seo.description} />
        )}
        { homepage.seo && homepage.seo.keywords && (
          <meta name="keywords" content={homepage.seo.keywords} />
        )}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <section id="hero" className="relative border-b">
          <div className="hero-image">
            <img src="/img/hero.svg" alt="devolution hero" />
          </div>
          <div className="container mx-auto py-32 md:py-64">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="w-full sm:w-2/3">
                <h1 className="font-semibold text-4xl md:text-6xl leading-normal">{ homepage.heroTitle }</h1>
                <p className="w-full sm:w-1/2 mt-6 px-1">{ homepage.heroDescription }</p>
                <Button
                  value='Get Started'
                  className="mt-10"
                  href="#contactFormSection"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container">
            <div className="text-center"><small>Services</small></div>
            <h2 className="text-center text-3xl font-bold">{homepage.servicesTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              { homepage.services.map((service: any) => (
                <Card
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-gray-50 py-20">
          <div className="container">
            <div className="flex">
              <div className="lg:w-5/12 ml-auto">
                <small>About Us</small>
                <h2 className="text-3xl font-bold">{homepage.aboutUsTitle}</h2>
                <div className="about-content text-sm" dangerouslySetInnerHTML={{__html: homepage.aboutUsDescription.html}} />
              </div>
              <div className="lg:w-5/12 ml-auto hidden md:block">
                <div className="sticky top-[100px]">
                  <img src="/img/howdevolutionworks.svg" alt="how devolution works" width="100%" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <MidPageCTA
          title={homepage.midCtaTitle}
          description={homepage.midCtaDescription}
          href="#contactFormSection"
          button='Get Started'
        />

        <section id="process" className="bg-gray-50 py-20">
          <div className="container">
            <div className="text-center"><small>Our Process</small></div>
            <h2 className="text-center text-3xl font-bold">{homepage.ourProcessTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              { homepage.ourProcessCards.map((process: any, index: number) => (
                <Card
                  key={process.id}
                  title={process.title}
                  description={process.description}
                  icon={process.icon}
                  bigIcon={process.bigIcon}
                  index={index + 1}
                />
              ))}
            </div>
          </div>
        </section>

        <ContactFormSection />
      </main>
      <Footer footer={footer} />
    </div>
  )
}
export default Home

export async function getStaticProps() {
  const homepage = await getHomepage()
  const footer = await getFooter()
  return {
    props: { homepage, footer }
  }
}
