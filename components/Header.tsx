import Link from 'next/link';
import { ReactElement } from 'react';

import styles from '../styles/Header.module.css'

export default function Header(): ReactElement {
  return (
    <div className={styles.link_list}>
      <Link href="/">
        <a className='link'>
          About
        </a>
      </Link>
      <Link href="/blog">
        <a className='link'>
          Thoughts
        </a>
      </Link>
      <Link href="/books">
        <a className='link'>
          Readings
        </a>
      </Link>
      <Link href="/bonbon">
        <a className='link'>
          BonBon
        </a>
      </Link>
    </div>
  );
}