import aboutImg from "../assets/sboutme.png";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  const paragraphs = ABOUT_TEXT.split('\n').filter(line => line.trim() !== "");

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-yellow-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="About me"/>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col justify-center lg:justify-start">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="my-2 max-w-xl py-2">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
