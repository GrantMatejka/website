import Head from 'next/head';
import React from 'react';
import { Table } from '../components/Table';
import styled from 'styled-components';

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
   {
      frontMatter: {
         title: 'BonBon',
         description: 'A small kanban board for organizing life tasks',
         buttonText: 'demo',
      },
      key: 'bonbon',
      href: '/project/bonbon',
      as: '/project/bonbon',
   },
];

const Container = styled.div`
   margin-top: 1em;
`;

export default function Projects({}) {
   return (
      <>
         <Head>
            <title>Projects</title>
         </Head>
         <Container>
            <Table entries={PROJECTS} />
         </Container>
      </>
   );
}
