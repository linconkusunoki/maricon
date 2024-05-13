"use client";

import { CountdownTimer } from "@/components/countdown";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useLocale } from "@/components/language-context";
import { OurHistory } from "@/components/our-history";
import { Playlist } from "@/components/playlist";

export default function Home() {
  const { t } = useLocale();
  return (
    <>
      <Header className="bg-green" />
      <main className="bg-green">
        <figure className="relative w-full px-4 pt-8 md:-mb-10">
          <img
            src="/nozes.png"
            alt="Mariana e Lincon"
            height={430}
            className="rounded-t-full max-w-[500px] mx-auto w-full"
          />

          <div className="absolute top-0 left-0 w-full h-full">
            <img
              src="/star-1.svg"
              alt="star"
              className="absolute left-0 w-20 rotate-45 -top-4 md:top-auto md:bottom-[10%] md:rotate-0 md:w-32 xl:left-[15%] xl:w-44"
            />

            <img
              src="/star-2.svg"
              alt="star"
              className="absolute right-2 w-20 top-2 -rotate-12 md:rotate-[-5deg] md:w-44 md:right-[5%] md:top-[5%] xl:right-[20%]"
            />

            <div className="md:absolute md:top-0 md:left-0 md:w-full md:h-[750px] md:overflow-hidden md:pointer-events-none">
              <img
                src="/card-sun.svg"
                alt="card sun"
                className="absolute z-20 -translate-x-20 -bottom-16 left-1/2 w-28 md:left-0 md:translate-x-0 md:top-28 md:rotate-[-15deg] md:w-44 xl:w-64"
              />
              <img
                src="/card-moon.svg"
                alt="card moon"
                className="absolute z-10 -translate-x-2 -bottom-16 left-1/2 w-28 md:right-0 md:translate-x-0 md:bottom-0 md:left-auto md:w-48 xl:w-72"
              />
            </div>
          </div>
        </figure>

        <div className="absolute w-full text-center -translate-x-1/2 top-[200px] left-1/2 text-beige font-tertiary md:top-[230px] xl:top-[230px]">
          <h1 className="text-4xl font-medium uppercase md:leading-relaxed md:text-6xl">
            Mariana <br /> & <br /> Lincon
          </h1>

          <div className="flex items-center justify-center my-8">
            <div className="text-2xl font-light md:text-4xl">{t.outubro}</div>
            <div className="px-4 mx-4 text-5xl font-semibold md:mx-8 md:px-8 border-x border-x-beige md:text-8xl">
              6
            </div>
            <div className="text-2xl font-light md:text-4xl">2024</div>
          </div>

          <p>
            <span className="italic font-medium md:text-2xl">
              {" "}
              18h, Masía Xamandreu
            </span>
            <br />
            <span className="font-semibold uppercase md:text-2xl">
              Valencia, Spain
            </span>
          </p>
        </div>
      </main>

      <OurHistory />

      <section className="flex flex-col gap-4 py-10 text-center bg-green xl:grid xl:grid-cols-2 xl:text-left">
        <div className="px-4 mb-10 xl:max-w-[450px] xl:ml-auto">
          <h2
            className="mb-8 text-[32px] font-secondary text-bronze xl:text-5xl"
            style={{ lineHeight: "120%" }}
          >
            {t.music_title}
          </h2>
          <p className="font-primary text-bronze">{t.music_text}</p>
        </div>

        <div className="xl:-mt-28 xl:w-[120%] 2xl:w-[90%]">
          <Playlist />
        </div>
      </section>

      <Faq />

      <section className="flex flex-col items-center gap-10 lg:gap-[70px] px-4 py-14 bg-green">
        <div className="flex items-center justify-center">
          <svg
            width="56"
            height="41"
            viewBox="0 0 56 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="lg:w-[100px] lg:h-auto"
          >
            <path
              d="M20.8645 34.6555C33.561 47.2773 55.4188 38.3063 55.4188 20.2829C55.4188 5.27586 39.7435 -4.35958 26.4446 1.97827C36.1313 1.58885 44.0833 9.33391 44.0833 18.909C44.0833 30.9515 31.9035 39.0568 20.8645 34.6555Z"
              fill="#A25A44"
            />
            <path
              d="M11.1792 14.0388C11.1792 9.42868 7.35061 5.6996 2.6866 5.88713C9.08965 2.8358 16.637 7.47497 16.637 14.7004C16.637 23.3782 6.11299 27.6974 0 21.6203C5.31491 23.7395 11.1792 19.8371 11.1792 14.0388Z"
              fill="#A25A44"
            />
          </svg>

          <h2 className="text-bronze font-secondary text-[32px] px-8 lg:text-[54px]">
            {t.our_day}
          </h2>

          <svg
            width="56"
            height="41"
            viewBox="0 0 56 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="lg:w-[100px] lg:h-auto"
          >
            <path
              d="M11.7545 18.909C11.7545 9.33385 19.7065 1.58879 29.3932 1.97821C16.0943 -4.3595 0.418945 5.2758 0.418945 20.283C0.418945 38.3064 22.2768 47.2774 34.9733 34.6555C23.9343 39.0568 11.7545 30.9515 11.7545 18.909ZM44.6586 14.0389C44.6586 9.42876 48.4872 5.69969 53.1512 5.88722C46.7481 2.83575 39.2008 7.47491 39.2008 14.7006C39.2008 23.3784 49.7248 27.6977 55.8378 21.6206C50.5229 23.7396 44.6586 19.8372 44.6586 14.0389Z"
              fill="#A25A44"
            />
          </svg>
        </div>

        <ul className="relative flex flex-col gap-5 lg:flex-row">
          <span className="absolute w-[2px] left-[8px] top-8 bottom-7 bg-[#A25A44] lg:left-14 lg:right-14 lg:bottom-[11px] lg:top-auto lg:w-auto lg:h-[2px]" />

          <li className="flex items-center lg:flex-col-reverse lg:flex-1">
            <svg
              width="18"
              height="24"
              viewBox="0 0 18 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-2 mr-4 lg:mr-0"
            >
              <path
                d="M9.08136 0C9.57061 5.27496 13.4316 10.4956 17.9997 11.6919H18V11.7465C13.5951 12.9972 9.89741 18.0003 9.13597 23.0579H8.86403C7.99393 17.946 4.29619 13.0516 0 11.8009V11.7463C5.27496 10.6043 8.42885 5.32956 8.9727 0H9.08136Z"
                fill="#A25A44"
              />
            </svg>

            <div className="flex flex-col lg:text-center text-bronze lg:flex-col-reverse">
              <h3 className="text-4xl font-semibold font-secondary">18h</h3>
              <p className="text-[12px] font-primary">{t.our_day_arrival}</p>
            </div>
          </li>

          <li className="flex items-center lg:flex-col-reverse lg:flex-1">
            <svg
              width="18"
              height="24"
              viewBox="0 0 18 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-2 mr-4 lg:mr-0"
            >
              <path
                d="M9.08136 0C9.57061 5.27496 13.4316 10.4956 17.9997 11.6919H18V11.7465C13.5951 12.9972 9.89741 18.0003 9.13597 23.0579H8.86403C7.99393 17.946 4.29619 13.0516 0 11.8009V11.7463C5.27496 10.6043 8.42885 5.32956 8.9727 0H9.08136Z"
                fill="#A25A44"
              />
            </svg>

            <div className="flex flex-col lg:text-center text-bronze lg:flex-col-reverse">
              <h3 className="text-4xl font-semibold font-secondary">18h30</h3>
              <p className="text-[12px] font-primary">{t.our_day_ceremony}</p>
            </div>
          </li>

          <li className="flex items-center lg:flex-col-reverse lg:flex-1">
            <svg
              width="18"
              height="24"
              viewBox="0 0 18 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-2 mr-4 lg:mr-0"
            >
              <path
                d="M9.08136 0C9.57061 5.27496 13.4316 10.4956 17.9997 11.6919H18V11.7465C13.5951 12.9972 9.89741 18.0003 9.13597 23.0579H8.86403C7.99393 17.946 4.29619 13.0516 0 11.8009V11.7463C5.27496 10.6043 8.42885 5.32956 8.9727 0H9.08136Z"
                fill="#A25A44"
              />
            </svg>

            <div className="flex flex-col lg:text-center text-bronze lg:flex-col-reverse">
              <h3 className="text-4xl font-semibold font-secondary">19h30</h3>
              <p className="text-[12px] font-primary">{t.our_day_cocktails}</p>
            </div>
          </li>

          <li className="flex items-center lg:flex-col-reverse lg:flex-1">
            <svg
              width="18"
              height="24"
              viewBox="0 0 18 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-2 mr-4 lg:mr-0"
            >
              <path
                d="M9.08136 0C9.57061 5.27496 13.4316 10.4956 17.9997 11.6919H18V11.7465C13.5951 12.9972 9.89741 18.0003 9.13597 23.0579H8.86403C7.99393 17.946 4.29619 13.0516 0 11.8009V11.7463C5.27496 10.6043 8.42885 5.32956 8.9727 0H9.08136Z"
                fill="#A25A44"
              />
            </svg>

            <div className="flex flex-col lg:text-center text-bronze lg:flex-col-reverse">
              <h3 className="text-4xl font-semibold font-secondary">21h</h3>
              <p className="text-[12px] font-primary">{t.our_day_dinner}</p>
            </div>
          </li>

          <li className="flex items-center lg:flex-col-reverse lg:flex-1">
            <svg
              width="18"
              height="24"
              viewBox="0 0 18 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-2 mr-4 lg:mr-0"
            >
              <path
                d="M9.08136 0C9.57061 5.27496 13.4316 10.4956 17.9997 11.6919H18V11.7465C13.5951 12.9972 9.89741 18.0003 9.13597 23.0579H8.86403C7.99393 17.946 4.29619 13.0516 0 11.8009V11.7463C5.27496 10.6043 8.42885 5.32956 8.9727 0H9.08136Z"
                fill="#A25A44"
              />
            </svg>

            <div className="flex flex-col lg:text-center text-bronze lg:flex-col-reverse">
              <h3 className="text-4xl font-semibold font-secondary">22h30</h3>
              <p className="text-[12px] font-primary">{t.our_day_party}</p>
            </div>
          </li>
        </ul>

        <p className="font-primary text-bronze lg:max-w-[1100px] lg:mx-auto text-center">
          {t.our_day_p1}
          <a className="font-bold underline" href="http://wa.link/jkh2p2">
            {t.our_day_contact}
          </a>
        </p>
      </section>

      <section className="px-4 py-16 text-center bg-bronze">
        <h2 className="text-3xl text-green font-secondary xl:text-5xl">
          {t.countdown_title}
        </h2>
        <CountdownTimer futureDate="2024-10-06T18:00:00" />
      </section>

      <Footer />
    </>
  );
}
