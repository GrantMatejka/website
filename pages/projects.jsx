import Head from 'next/head';
import React from 'react';
import { Table } from '../components/Table';

const PROJECTS = [
   {
      frontMatter: {
         title: 'Rasm',
         description: 'A Racket to WebAssembly Compiler',
         buttonText: 'read',
      },
      key: 'rasm',
      href: '/post/rasm',
      as: '/post/rasm',
   },
   // {
   //    frontMatter: {
   //       title: 'BonBon',
   //       description: 'A small kanban board for organizing life tasks',
   //       buttonText: 'demo',
   //    },
   //    key: 'bonbon',
   //    href: '/project/bonbon',
   //    as: '/project/bonbon',
   // },
];

export default function Projects({}) {
   return (
      <>
         <Head>
            <title>Projects</title>
         </Head>
         <Table entries={PROJECTS} />
      </>
   );
}
