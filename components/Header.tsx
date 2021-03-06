import Link from 'next/link';
import { ReactElement } from 'react';
import styles from '../styles/Header.module.css';
import { CgPushChevronDown, CgPushChevronUp } from 'react-icons/cg';
import { useState } from 'react';
import useWindowDimensions from '../utils/windowDimensions';

const ContactInfo = (): ReactElement => {
   return (
      <div className={styles.contact}>
         <span>Grant Matejka</span>
         <a href="mailto: grantmatejka1@gmail.com">grantmatejka1@gmail.com</a>
         <span>
            <Link href="https://www.linkedin.com/in/grantmatejka/">
               <a rel="noreferrer" target="_blank">
                  LinkedIn
               </a>
            </Link>
            {', '}
            <Link href="https://github.com/GrantMatejka">
               <a rel="noreferrer" target="_blank">
                  GitHub
               </a>
            </Link>
            {', '}
            <Link href="/GrantMatejkaResume.pdf">
               <a rel="noreferrer" target="_blank">
                  Resume
               </a>
            </Link>
         </span>
      </div>
   );
};

export default function Header(): ReactElement {
   const { width } = useWindowDimensions();
   const [open, setOpen] = useState(true);

   const toggleOpen = () => {
      setOpen(!open);
   };

   const isNotMobile = width > 600;

   return (
      <header>
         {open || isNotMobile ? (
            <div className={styles.container}>
               <Link href="/">
                  <a className={styles.link}>Home</a>
               </Link>
               <Link href="/blog">
                  <a className={styles.link}>Thoughts</a>
               </Link>
               <Link href="/books">
                  <a className={styles.link}>Readings</a>
               </Link>
               <ContactInfo />
               <button className={styles.mobileBtn} onClick={toggleOpen}>
                  <CgPushChevronUp />
               </button>
            </div>
         ) : (
            <div className={styles.container}>
               <button className={styles.mobileBtn} onClick={toggleOpen}>
                  <CgPushChevronDown />
               </button>
            </div>
         )}
      </header>
   );
}
