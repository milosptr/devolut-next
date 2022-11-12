import { getFooter } from "../services"
interface Props {
  footer: any
}

type Link = {
  url: string;
  label: string;
  id: number|string;
}

const Footer = ({ footer }: Props) => {

  return (
    <footer id="footer" className="bg-gray-100 footer pt-20 pb-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap md:flex-nowrap items-end">
            <div className="w-full md:w-1/2 lg:w-1/4">
              <div className="footer-content-item">
                  <div className="footer-logo">
                    <a href="/"><img src="/img/devolution-logo.svg" alt="logo" width="80%" /></a>
                  </div>
                  <div className="footer-details pr-5 text-sm font-normal text-black mt-4">
                    <p>{footer.description}</p>
                  </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/6 ml-auto mt-10 lg:mt-0">
              <div className="footer-content-list footer-content-item desk-pad-left-70">
                  <div className="mb-3">
                    <h3 className="font-semibold text-xl">{footer.firstColumnTitle}</h3>
                  </div>
                  <ul className="text-sm text-black leading-6">
                    { footer.first_column_links.map((link: Link) => (
                      <li key={link.id}>
                        <a href={link.url} target="_blank" className="hover:text-secondary text-black">
                          {link.label}
                        </a>
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/5 mt-10 lg:mt-0">
              <div className="footer-content-list footer-content-item desk-pad-left-70">
                  <div className="mb-3">
                    <h3 className="font-semibold text-xl">{footer.secondColumnTitle}</h3>
                  </div>
                  <ul className="text-sm text-black leading-6">
                    { footer.second_column_links.map((link: Link) => (
                      <li key={link.id} className="hover:text-primary text-primary">
                        <a href={link.url} className="hover:text-secondary text-black">
                          {link.label}
                        </a>
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mt-10 lg:mt-0">
              <div className="footer-content-list footer-content-item desk-pad-left-70">
                  <div className="mb-3">
                    <h3 className="font-semibold text-xl">{footer.thirdColumnTitle}</h3>
                  </div>
                  <div className="footer-details footer-address flex items-start">
                    <div className="flex-auto footer-address-item">
                        <div className="footer-address-text">
                          <h4>Phone:</h4>
                          <p>
                            <a href={`tel:${footer.phoneNumber}`} className="hover:text-secondary text-black text-sm">
                              {footer.phoneNumber}
                            </a>
                          </p>
                        </div>
                    </div>
                    <div className="flex-auto footer-address-item">
                        <div className="footer-address-text">
                          <h4>Email:</h4>
                          <p>
                            <a href={`mailto:${footer.email}`} className="hover:text-secondary text-black text-sm">
                              {footer.email}
                            </a>
                          </p>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
