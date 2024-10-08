import { Actor, Allerta, Inter, Paytone_One } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });
const paytone = Paytone_One({ subsets: ["latin"], weight: "400" });
const actor = Actor({ subsets: ["latin"], weight: "400" });
const allerta = Allerta({ subsets: ["latin"], weight: "400" });
const App = () => {
  return (
    <div className="h-screen overflow-auto">
      <section className="h-screen w-full bg-black overflow-hidden px-20 py-10 relative flex flex-col">
        <nav className="flex justify-between items-center bg-black text-white">
          <div
            className={`${inter.className} font-bold text-2xl hover:text-red-700 duration-300`}
          >
            <a href="#">Namık Korona</a>
          </div>
          <div className="flex gap-8">
            <ul className="flex justify-between gap-8 text-lg ">
              <li className=" hover:text-red-700 duration-300">
                <a href="#">Home</a>
              </li>
              <li className=" hover:text-red-700 duration-300">
                <a href="#">Projects</a>
              </li>
              <li className=" hover:text-red-700 duration-300">
                <a href="#">About</a>
              </li>
              <li className=" hover:text-red-700 duration-300">
                <a href="#">Contacts</a>
              </li>
            </ul>
            <div>
              <ul className="flex justify-between gap-8">
                <li>
                  <a href="#">
                    <img src="/github.png" alt="Github link" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="linkedin.png" alt="Linkedin link" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="instagram.png" alt="Instagram link" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Content? */}
        <div className="flex justify-between items-center z-20 flex-grow">
          <div className="text-white">
            <p className="font-medium text-[28px]">Hi, I'm Namık</p>
            <h1 className="uppercase text-[96px] leading-[110px] text-[#F8F7F9] font-bold">
              I'm a <br />
              developer
            </h1>
            <ul className="text-[#F8F7F980] text-2xl">
              <li>Interactive Elements</li>
              <li>Prototyping for Web</li>
              <li>Responsive Design</li>
              <li>Collaborative Design Workflows</li>
            </ul>
            <div className="flex flex-col justify-center items-start w-fit">
              <a
                href="#"
                className="font-extrabold text-[26px] text-white underline"
              >
                View My Projects
              </a>
              <hr className="w-full border-[#A6BBCC] border-2" />
            </div>
          </div>
          <img src="/Preview.png" alt="Infectious Disease" />
        </div>
        <img
          src="/smoke.png"
          alt="Smoke"
          className="absolute left-0 top-10 pointer-events-none"
        />
      </section>
      <section className="h-screen w-full bg-[#121212] flex flex-col justify-center items-center gap-36">
        <div className="flex flex-col justify-center items-center gap-7">
          <img src="/avatar.png" alt="Genz Face" />
          <div className="flex flex-col justify-center items-center gap-4">
            <h2 className={`${paytone.className} text-[47px] text-[#F7F7F5]`}>
              Namık Korona
            </h2>
            <p className={`${actor.className} text-[#f7f7f588] text-[23px]`}>
              Designer | Developer
            </p>
          </div>
          <a href="#">
            <button
              className={`${allerta.className} bg-[#FFB829] rounded-[15px] underline text-[#121212] text-[22px] py-2 px-14 hover:bg-[#ffb829ce]`}
            >
              Follow
            </button>
          </a>
        </div>
        <div className="flex gap-[110px]">
          <div className="flex gap-6">
            <img src="/telegram.svg" alt="Telegram" />
            <div className="flex flex-col">
              <span className={`${actor.className} text-[#F0F8FD] text-[21px]`}>
                Telegram
              </span>
              <span className="text-[#FFB829]">
                <a href="#">@🐳</a>
              </span>
            </div>
          </div>
          <div className="flex gap-6">
            <img src="/mail.svg" alt="Mail" />
            <div className="flex flex-col">
              <span className={`${actor.className} text-[#F0F8FD] text-[21px]`}>
                Mail
              </span>
              <span className="text-[#FFB829]">
                <a href="#">@gmail.com</a>
              </span>
            </div>
          </div>
          <div className="flex gap-6">
            <img src="/github.svg" alt="GitHub" />
            <div className="flex flex-col">
              <span className={`${actor.className} text-[#F0F8FD] text-[21px]`}>
                GitHub
              </span>
              <span className="text-[#FFB829]">
                <a href="#">@🤖</a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
