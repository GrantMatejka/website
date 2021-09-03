import Link from 'next/link';
import { ReactElement } from 'react';
import styles from '../styles/Header.module.css';

export default function Header(): ReactElement {
   return (
      <header className={styles.container}>
         <Link href="/">
            <a className={styles.link}>About</a>
         </Link>
         <Link href="/blog">
            <a className={styles.link}>Thoughts</a>
         </Link>
         <Link href="/books">
            <a className={styles.link}>Readings</a>
         </Link>
         <Link href="/bonbon">
            <a className={styles.link}>BonBon</a>
         </Link>
         <div className={styles.contact}>
            <span>Grant Matejka</span>
            <a href="mailto: grantmatejka1@gmail.com">
               grantmatejka1@gmail.com
            </a>
            <span>
               <Link href="https://www.linkedin.com/grantmatejka">
                  <a rel="noreferrer" target="_blank">
                     LinkedIn
                  </a>
               </Link>
               {', '}
               <Link href="/GrantMatejkaResume.pdf">
                  <a rel="noreferrer" target="_blank">
                     Resume
                  </a>
               </Link>
               {', '}
               <Link href="https://www.github.com/grantmatejka">
                  <a rel="noreferrer" target="_blank">
                     GitHub
                  </a>
               </Link>
            </span>
         </div>
      </header>
   );
}
