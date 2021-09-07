import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Index.module.css';
import {
   IoLogoLinkedin,
   IoLogoGithub,
} from 'react-icons/io';
import { IoNewspaperOutline } from 'react-icons/io5';


const Home: NextPage = () => {
   return (
      <div>
         <Head>
            <title>Grant Matejka</title>
            <meta
               name="description"
               content="Small site about me and some projects"
            />
            {/** Favicon */}
            <link
               rel="icon"
               type="image/svg+xml"
               href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%236e97e7%22></rect><path fill=%22%23fff%22 d=%22M42.23 51.02L42.23 64.04Q42.23 65.12 41.60 65.84Q40.97 66.56 39.71 67.22L39.71 67.22Q38.21 67.94 35.57 68.48Q32.93 69.02 30.23 69.02L30.23 69.02Q26.03 69.02 22.55 67.88Q19.07 66.74 16.55 64.40Q14.03 62.06 12.65 58.49Q11.27 54.92 11.27 50.06L11.27 50.06Q11.27 45.26 12.71 41.66Q14.15 38.06 16.64 35.69Q19.13 33.32 22.43 32.15Q25.73 30.98 29.45 30.98L29.45 30.98Q31.97 30.98 34.10 31.40Q36.23 31.82 37.73 32.51Q39.23 33.20 40.07 34.04Q40.91 34.88 40.91 35.72L40.91 35.72Q40.91 36.56 40.43 37.16Q39.95 37.76 39.29 38.06L39.29 38.06Q37.67 36.98 35.45 36.05Q33.23 35.12 29.75 35.12L29.75 35.12Q26.87 35.12 24.41 36.08Q21.95 37.04 20.15 38.90Q18.35 40.76 17.33 43.58Q16.31 46.40 16.31 50.06L16.31 50.06Q16.31 53.96 17.36 56.75Q18.41 59.54 20.30 61.34Q22.19 63.14 24.74 64.01Q27.29 64.88 30.29 64.88L30.29 64.88Q32.45 64.88 34.37 64.52Q36.29 64.16 37.37 63.62L37.37 63.62L37.37 52.58L28.31 52.58Q28.13 52.28 27.95 51.77Q27.77 51.26 27.77 50.66L27.77 50.66Q27.77 49.64 28.25 49.07Q28.73 48.50 29.63 48.50L29.63 48.50L39.65 48.50Q40.73 48.50 41.48 49.19Q42.23 49.88 42.23 51.02L42.23 51.02ZM72.47 58.76L72.47 58.76Q72.05 59.06 71.36 59.30Q70.67 59.54 69.83 59.54L69.83 59.54Q68.87 59.54 68.12 59.24Q67.37 58.94 67.07 58.28L67.07 58.28Q63.83 51.56 61.49 45.98Q59.15 40.40 57.71 36.74L57.71 36.74L57.47 36.74Q57.29 41.24 57.08 45.11Q56.87 48.98 56.63 52.67Q56.39 56.36 56.15 60.14Q55.91 63.92 55.67 68.24L55.67 68.24Q55.31 68.36 54.74 68.48Q54.17 68.60 53.51 68.60L53.51 68.60Q52.19 68.60 51.65 68.06Q51.11 67.52 51.11 66.50L51.11 66.50Q51.11 65.90 51.20 63.92Q51.29 61.94 51.47 59.12Q51.65 56.30 51.86 52.88Q52.07 49.46 52.34 45.92Q52.61 42.38 52.88 38.96Q53.15 35.54 53.39 32.72L53.39 32.72Q53.87 32.30 54.77 31.94Q55.67 31.58 56.81 31.58L56.81 31.58Q59.57 31.58 60.65 33.80L60.65 33.80Q61.79 36.14 62.96 38.75Q64.13 41.36 65.30 44.06Q66.47 46.76 67.58 49.40Q68.69 52.04 69.71 54.44L69.71 54.44L69.95 54.44Q71.27 51.26 72.59 48.17Q73.91 45.08 75.17 42.20Q76.43 39.32 77.57 36.80Q78.71 34.28 79.61 32.18L79.61 32.18Q80.15 31.88 80.99 31.73Q81.83 31.58 82.55 31.58L82.55 31.58Q85.37 31.58 85.79 33.50L85.79 33.50Q86.03 34.58 86.33 37.07Q86.63 39.56 86.93 42.80Q87.23 46.04 87.50 49.76Q87.77 53.48 88.01 56.93Q88.25 60.38 88.43 63.29Q88.61 66.20 88.73 67.88L88.73 67.88Q87.65 68.60 86.21 68.60L86.21 68.60Q85.31 68.60 84.62 68.15Q83.93 67.70 83.81 66.50L83.81 66.50Q83.51 62.12 83.27 57.80Q83.03 53.48 82.82 49.58Q82.61 45.68 82.43 42.41Q82.25 39.14 82.13 36.86L82.13 36.86L81.89 36.86Q81.23 38.54 80.36 40.64Q79.49 42.74 78.32 45.38Q77.15 48.02 75.71 51.35Q74.27 54.68 72.47 58.76Z%22></path></svg>"
            />
         </Head>
         <div className={styles.mainContent}>
            <h1 className={styles.title}>Grant Matejka</h1>
            <hr />
            <div className={styles.iconRow}>
               <Link href="https://www.linkedin.com/in/grantmatejka/">
                  <a
                     rel="noreferrer"
                     target="_blank"
                     className={styles.iconLink}
                  >
                     <IoLogoLinkedin />
                  </a>
               </Link>
               <Link href="https://github.com/GrantMatejka">
                  <a
                     rel="noreferrer"
                     target="_blank"
                     className={styles.iconLink}
                  >
                     <IoLogoGithub />
                  </a>
               </Link>
               <Link href="/GrantMatejkaResume.pdf">
                  <a
                     rel="noreferrer"
                     target="_blank"
                     className={styles.iconLink}
                  >
                     <IoNewspaperOutline />
                  </a>
               </Link>
            </div>

            <h3 className={styles.text}>
               {"Master's Student and Software Engineer"}
            </h3>
            <h3 className={styles.text}>
               {'Student, Web Developer, WebAssembly Believer, Part Time Fixer'}
            </h3>

            <div className={styles.text}>
               <Link href="/thought/about_me">
                  <a className={styles.link}>More About Me</a>
               </Link>
            </div>
            <h3>
               Welcome, feel free to{' '}
               <Link href="/blog">
                  <a className={styles.linkSmall}>explore</a>
               </Link>{' '}
               and learn more{' '}
               <Link href="/thought/about_me">
                  <a className={styles.linkSmall}>about me.</a>
               </Link>
            </h3>
         </div>
      </div>
   );
};

export default Home;
