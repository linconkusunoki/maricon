"use client";

import Link from "next/link";
import { useLocale } from "./language-context";

export function OurHistory() {
  const { t } = useLocale();
  return (
    <section className="flex flex-col gap-4 px-4 pt-32 pb-16 text-center bg-beige xl:pb-32">
      <svg
        width="50"
        height="56"
        viewBox="0 0 50 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mb-4"
      >
        <path
          d="M6.54793 45.7565C7.71578 47.1813 8.99253 48.56 10.3734 49.8236C11.0873 50.4242 11.8247 50.9951 12.6031 51.5157C15.5123 53.4598 19.0034 54.3901 22.4226 54.9283C22.6778 54.9683 22.933 55.005 23.1885 55.0398C23.7217 55.0787 24.2556 55.1106 24.7909 55.1274C29.7453 55.2825 34.6239 54.4029 39.3066 52.8057C41.6918 51.992 44.0774 51.1344 46.287 49.9064C47.299 49.3443 48.227 48.6799 49.1756 48.021C49.2445 47.973 49.3138 47.9264 49.3831 47.8798C49.3829 47.8424 49.3815 47.805 49.3791 47.7676C48.462 47.691 47.5468 47.5847 46.6338 47.475C44.2857 47.1934 41.9118 46.921 39.5934 46.444C34.6778 45.4323 29.3732 44.6799 24.9137 42.2448C22.5806 40.971 20.5591 39.116 19.3495 36.7184C17.9936 34.0303 17.5279 30.8748 17.7373 27.8787C17.6728 27.9697 17.5868 28.0433 17.4869 28.093C17.387 28.1427 17.2764 28.1668 17.1649 28.1632C16.8088 28.1508 16.5877 27.7925 16.7443 27.4812C16.9137 27.1446 17.4366 27.0445 17.72 27.2994C17.7431 27.3203 17.7615 27.3437 17.7783 27.3672C18.4207 20.667 22.189 14.5146 27.3334 10.313C32.4063 6.16959 38.7566 5.25915 44.9259 3.86323C44.901 3.69206 44.8552 3.52458 44.7895 3.36456C43.9262 2.9126 43.0371 2.51187 42.1267 2.16445C36.6549 0.415432 30.9059 -0.651946 25.2558 0.885504C21.9653 1.78091 18.9198 3.40086 15.9948 5.12385C13.1689 6.78853 10.2557 8.45395 7.82285 10.6811C3.0972 15.0082 1.60925 21.3424 0.983341 27.4952C0.644537 30.8256 0.212967 34.3717 1.37935 37.5885C2.47899 40.6223 4.52281 43.2855 6.54793 45.7565ZM40.8419 49.949C40.9552 49.9757 41.0483 50.0894 41.1129 50.1367C41.1363 50.3934 41.0069 50.5529 40.8331 50.5532C40.6567 50.5536 40.5915 50.4256 40.5658 50.2823C40.5321 50.0975 40.6773 49.9101 40.8419 49.949ZM29.6005 47.3185C29.6434 47.4318 29.7061 47.5187 29.6841 47.5616C29.6592 47.6103 29.5594 47.632 29.4898 47.6393C29.4696 47.6415 29.408 47.5381 29.4216 47.5102C29.4509 47.449 29.5162 47.4046 29.6005 47.3185ZM26.8582 47.9297C27.2175 47.907 27.4397 48.0892 27.4478 48.4126C27.4548 48.7063 27.2513 48.9204 26.9678 48.9175C26.6833 48.9146 26.4981 48.7224 26.4831 48.4144C26.4688 48.1174 26.6011 47.9458 26.8582 47.9297ZM23.8849 45.7352C23.905 45.781 23.952 45.8379 23.9388 45.8694C23.9237 45.9053 23.8552 45.9182 23.8097 45.9413L23.7092 45.8312L23.8849 45.7352ZM23.2648 47.3397L23.3077 47.3966L23.2516 47.5132C23.2369 47.4945 23.2072 47.4717 23.2109 47.4582C23.2219 47.4167 23.2457 47.379 23.2648 47.3397ZM21.401 52.9131C21.6559 52.7239 21.9426 52.6059 22.2667 52.6044C22.4057 52.6037 22.5674 52.7654 22.5403 52.8728C22.5333 52.9003 22.5322 52.9315 22.5183 52.9546C22.2891 53.3333 21.8836 53.4851 21.496 53.3234C21.4579 53.3048 21.4241 53.2786 21.3964 53.2465C21.3688 53.2143 21.3481 53.1769 21.3354 53.1364C21.3185 53.0693 21.3493 52.9513 21.401 52.9131ZM18.526 42.1165C18.6462 42.071 18.8006 42.0831 18.9308 42.1114C18.9891 42.1242 19.025 42.2386 19.0987 42.3479C18.996 42.4513 18.9132 42.5672 18.8021 42.6383C18.6778 42.7179 18.5252 42.7369 18.4006 42.6203C18.3619 42.5791 18.3374 42.5267 18.3305 42.4707C18.3074 42.3068 18.3903 42.1678 18.526 42.1165ZM11.4067 30.1473L11.5178 30.2415L11.3865 30.3897C11.3612 30.3457 11.3143 30.3006 11.3165 30.258C11.3183 30.2195 11.3744 30.1839 11.4067 30.1473ZM8.43152 26.4204C8.52319 26.4307 8.60825 26.5004 8.74576 26.5711C8.63392 26.6643 8.58295 26.7398 8.51879 26.753C8.39632 26.7783 8.28925 26.7123 8.28962 26.5814C8.28962 26.5242 8.38789 26.4157 8.43152 26.4204ZM8.46049 44.0639C8.64492 44.5226 8.66069 44.8258 8.53529 45.1316C8.51769 45.1749 8.43775 45.231 8.40402 45.2211C8.32812 45.1987 8.21592 45.1503 8.20198 45.0924C8.12462 44.7716 8.19392 44.4738 8.46049 44.0639ZM5.24992 20.5548C5.28035 20.5478 5.36762 20.6314 5.36102 20.6538C5.34085 20.7216 5.28769 20.7792 5.22389 20.8775L5.05742 20.663C5.12085 20.6245 5.18099 20.5702 5.24992 20.5548Z"
          fill="#A25A44"
        />
      </svg>

      <div className="max-w-[600px] mx-auto flex flex-col gap-4 md:gap-8">
        <h2 className="text-3xl font-secondary text-earth xl:text-5xl">
          {t.history_title}
        </h2>
        <p className="font-primary text-earth">{t.history_p1}</p>
        <p className="font-primary text-earth">{t.history_p2}</p>
        <p className="font-primary text-earth">{t.history_p3}</p>
        <p className="font-primary text-earth">{t.history_p4}</p>
        <p className="font-primary text-earth">{t.history_p5}</p>

        <Link href="/" className="self-center btn">
          {t.confirmar_presenca}
        </Link>
      </div>
    </section>
  );
}
