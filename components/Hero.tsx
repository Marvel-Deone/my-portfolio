import Image from 'next/image'
import React from 'react'
import { useEffect, useState } from 'react';

type SectionProps = {
  id?: string;
};

const Hero: React.FC<SectionProps> = ({ id }) => {
  const [showCursor, setShowCursor] = useState(true);
  const texts = ["DEV", "DEVELOPER"];
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  const typingSpeed = 100;
  const erasingSpeed = 100;
  const pauseBetweenCycles = 1000;

  useEffect(() => {
    const typeWriter = () => {
      if (textIndex >= texts.length) {
        // Hide the cursor when the last text is complete
        setShowCursor(false);
        return;
      }

      if (!isErasing && characterIndex < texts[textIndex].length) {
        // Typing phase
        setDisplayedText((prev) => prev + texts[textIndex].charAt(characterIndex));
        setCharacterIndex((prev) => prev + 1);
      } else if (isErasing && displayedText.length > 0) {
        // Erasing phase
        setDisplayedText((prev) => prev.slice(0, -1));
      } else if (!isErasing && characterIndex === texts[textIndex].length) {
        // Pause after typing the word
        if (textIndex >= texts.length - 1) {
          setTimeout(() => {
            setShowCursor(false)
          }, 1000)
        }
        if (textIndex < texts.length - 1) {
          setTimeout(() => setIsErasing(true), pauseBetweenCycles);
        }
      } else if (isErasing && displayedText.length === 0) {
        // Move to the next word
        setIsErasing(false);
        setCharacterIndex(0);
        setTextIndex((prev) => prev + 1);
      }
    };

    const timer = setTimeout(typeWriter, isErasing ? erasingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isErasing, characterIndex, textIndex, texts]);

  return (
    <section id={id} className='w-full bg-gradient-to-r from-[#041c32] from-40% to-[#050c16]'>
      <div className='w-full h-full lg:max-w-[82rem] flex flex-col mx-auto mb-2 px-[.85rem] md:px-[2.1rem] lg:px-[4rem] 2xl:px-0'>
        <div className='flex flex-col lg:flex-row xl:gap-[3.8rem] mt-16 lg:mt-36 xl:mt-[3.8rem]'>
          {/* Text Content */}
          <div className='flex flex-col lg:items-start 2xl:space-y-6 tracking-wide transform mt-[4rem] xl:mt-[10rem] 2xl:mt-[11rem]'>
            <span className="mb-1 lg:mb-0 inline whitespace-nowrap text-white w-auto px-[12px] py-[5px] rounded-[4px] uppercase tracking-widest text-[16px] bg-[#063560]" style={{
              inlineSize: "fit-content"
            }} data-aos="fade-up" data-aos-duration="1500" data-aos-delay="800">Folagbade Olowofela</span>
            <div className='flex flex-col lg:gap-4'>
              <h1 className="mb-[.75rem] lg:mb-0 text-[38px] md:text-[45px] xl:text-[60px] font-bold uppercase" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000">
                Hay! I'm <span className="">Folagbade</span>
              </h1>
              <div className="mb-4 2xl:mb-0 mt-[-1rem] xl:mt-[-1.5rem] typewriter text-[38px] md:text-[45px] xl:text-[65px] text-[#0788FF] uppercase font-semibold" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1200">I'm a <span className="typewriter-text">{displayedText}</span>{showCursor && <label htmlFor="" className='blink'>|</label>}</div>
            </div>
            <p className="text-white text-[16px] md:text-[18px] font-[500] lg:w-[30rem] xl:w-[37rem] leading-7" data-aos="flip-down" data-aos-duration="1500" data-aos-delay="1400">
              Full-stack developer focused on building responsive and scalable web applications. Passionate about creating user-friendly solutions with clean, maintainable code.
            </p>
            <div className="mt-8 lg:mt-4 flex flex-col md:flex-row gap-6 items-center" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="1600">
              <button className="w-full md:w-auto text-center justify-center md:text-start uppercase flex md:justify-between items-center bg-blue-500 text-[white] font-[500] px-[28px] py-[14px] rounded-full border-[2px] border-blue-500 hover:bg-black hover:border-white transition-all duration-[.35s] ease-linear">
                <span>Get in Touch</span>
                <i className="flex ml-3"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--bi" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path></svg></i>
              </button>

              {/* Social Icons */}
              <div className="flex space-x-2" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1800">
                <a href="https://www.linkedin.com/in/folagbade-olowofela" target='_blank' className="social-icon bg-[#1275b1] p-3 rounded-full hover:bg-blue-500 border-2 border-white transition-all duration-[.3s] my-ease hover:transform hover:translate-y-[-5%]">
                  {/* LinkedIn Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--fa-brands" width="0.88em" height="1em" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                </a>
                <a href="https://github.com/Marvel-Deone" target='_blank' className="social-icon bg-[#181717] p-3 rounded-full hover:bg-gray-800 border-2 border-white transition-all duration-[.3s] my-ease hover:transform hover:translate-y-[-5%]">
                  {/* GitHub Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.385c.6.111.793-.26.793-.577v-2.162c-3.338.726-4.042-1.416-4.042-1.416c-.546-1.385-1.333-1.754-1.333-1.754c-1.089-.744.083-.729.083-.729c1.205.085 1.84 1.24 1.84 1.24c1.07 1.834 2.809 1.304 3.494.996c.108-.775.42-1.304.763-1.604c-2.665-.303-5.467-1.334-5.467-5.93c0-1.311.469-2.384 1.236-3.222c-.124-.303-.535-1.527.117-3.182c0 0 1.007-.322 3.3 1.23c.957-.266 1.98-.398 3-.403c1.02.005 2.043.137 3 .403c2.292-1.552 3.297-1.23 3.297-1.23c.653 1.655.242 2.88.12 3.182c.77.838 1.235 1.911 1.235 3.222c0 4.609-2.807 5.624-5.479 5.921c.431.372.815 1.103.815 2.222v3.293c0 .32.19.693.8.575C20.565 21.797 24 17.303 24 12C24 5.373 18.627 0 12 0"></path>
                  </svg>
                </a>
                {/* X Icon */}
                <a href="https://x.com/deevcoder" target='_blank' className="relative inline-flex items-center justify-center bg-[#181717] border-2 border-white h-[46px] w-[46px] rounded-full text-white hover:bg-gray-800 transition-all duration-[.3s] my-ease hover:transform hover:translate-y-[-5%]">
                  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M18.244 2H21.5l-7.52 8.57L23 22h-6.313l-4.937-6.47L5.95 22H2.692l8.064-9.187L1 2h6.438l4.486 5.953L18.244 2Zm-2.27 17h1.884L7.145 4.104H5.164L15.974 19Z"
                    />
                  </svg>
                </a>
                <a href="https://dev.to/folagbade_olowofela" target='_blank' className="social-icon bg-[#0A0A0A] p-2 rounded-full hover:bg-gray-800 border-2 border-white transition-all duration-[.3s] my-ease hover:transform hover:translate-y-[-5%]">
                  {/* Dev.to Icon */}
                  <img src="/images/dev_icon_w.png" alt="" className='w-6 h-6' />
                </a>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="flex justify-center items-center pr-7 md:px-0 xl:mt-[3rem] 2xl:mt-[4rem]" data-aos="fade-in" data-aos-duration="3000" data-aos-delay="800">
            <div className="md:w-[590px] md:h-[580px] lg:w-[400px] lg:h-[400px] xl:w-[470px] xl:h-[470px] 2xl:w-[590px] 2xl:h-[575px] image-container mt-16 lg:mt-0 xl:mt-12 ml-8 rounded-full overflow-hidden box-shadow ">
              <Image
                src="/images/my-profile.png"
                alt="Folagbade Olowofela"
                width={618}
                height={600}
                className="w-auto h-auto md:w-[590px] md:h-[580px] lg:w-auto lg:h-auto xl:h-[470px] 2xl:w-[590px] 2xl:h-[575px] rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
