import styles from '../styles/Header.module.css';

import Link from 'next/link';

export default function Header() {
  return (
    <div className={styles.inline_list}>
      <Link href="/">
        <a className={styles.link}>
          About
        </a>
      </Link>
      <Link href="/blog">
        <a className={styles.link}>
          Thoughts
        </a>
      </Link>
      <Link href="/books">
        <a className={styles.link}>
          Readings
        </a>
      </Link>
      <Link href="/bonbon">
        <a className={styles.link}>
          BonBon
        </a>
      </Link>
    </div>
  );
}