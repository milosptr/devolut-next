import { useEffect, useState } from "react"

export const Header = () => {
  const [navOpened, setNavOpened] = useState(false)
  const scrollToSection = () => {
    if(window.innerWidth < 600)
      setNavOpened(false)
  }

  useEffect(() => {
    const navigation = document.getElementById('header-navigation')
    window.addEventListener('scroll', () => {
      if(window.scrollY > 40) {
        navigation?.classList.add('sticked')
      } else {
        navigation?.classList.remove('sticked')
      }
    })

    document.querySelectorAll('a[href^="/#"]').forEach((anchor: any) => {
      anchor.addEventListener('click', function (e: any) {
        if(e.target) {
          if(window.location.pathname === '/')
            e.preventDefault()
          const href: string = e.target.getAttribute("href").replace('/#', '')
          const element = document.getElementById(href)
          if(element) {
            element.scrollIntoView({
              behavior: 'smooth'
            })
          }
        }
      })
    })
  }, [])

  return (
    <header id="header-navigation" className="fixed left-0 top-0 w-full z-50">
      <nav className="container mx-auto">
        <div className="w-full py-4 flex items-center justify-between">
          <div className="md:w-1/3 md:px-3 logo">
            <a href="/">
              <img src="/img/devolution-logo.svg" width="250" alt="devolution logo" />
            </a>
          </div>
          <div className="md:w-5/12">
            <div className="responsive-btn" onClick={() => setNavOpened(!navOpened)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`flex items-center relative navigation ${navOpened && 'open'}`}>
              <div className="sm:hidden absolute top-0 right-0 mt-3 mr-5 text-5xl text-white" onClick={() => setNavOpened(!navOpened)}>×</div>
              <a href="/" className="text-sm px-6 font-normal text-gray-500 active mt-10 sm:mt-0" onClick={scrollToSection}>Home</a>
              <a href="/#services" className="text-sm px-6 font-normal text-gray-500" onClick={scrollToSection}>Services</a>
              <a href="/#about" className="text-sm px-6 font-normal text-gray-500 " onClick={scrollToSection}>About</a>
              <a href="/#process" className="text-sm px-6 font-normal text-gray-500 " onClick={scrollToSection}>Process</a>
              <a href="/blog" className="text-sm px-6 font-normal text-gray-500 " onClick={scrollToSection}>Blog</a>
              <a href="/#contactFormSection" className="text-sm px-6 font-normal text-gray-500 " onClick={scrollToSection}>Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
