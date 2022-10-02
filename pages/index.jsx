import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

import Head from 'next/head';
import { IoNewspaperOutline } from 'react-icons/io5';
import Link from 'next/link';
import styles from '../styles/Index.module.css';

const Home = () => {
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
               <h3 className={styles.text}>{'Sofware Engineer'}</h3>
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
