import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Index.module.css';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
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
         </Head>
         <div className={styles.mainContent}>
            <div>
               <h1 className={styles.title}>Grant Matejka</h1>
               <h3 className={styles.text}>
                  {'Student - Engineer - WebAssembly Believer - Part Time Fixer'}
               </h3>
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
            </div>
         </div>
      </div>
   );
};

export default Home;
