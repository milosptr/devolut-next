import { Button } from "../button/Button";

interface Props {
  title: string;
  description?: string;
  href?: string;
  button?: string;
}

export const MidPageCTA = ({ title, description, href, button }: Props) => {
  return (
    <section id="midPageCta" className="bg-main py-20">
      <div className="content relative">
        <div className="lg:w-1/2 mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">{ title }</h2>
          <p className="text-sm text-white mt-3">
            { description }
          </p>
          <Button
            className="mt-8 white-btn"
            value={button || 'Get Started'}
            href={href}
          />
        </div>
      </div>
    </section>
  )
}
