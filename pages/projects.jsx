import Head from 'next/head';
import React from 'react';

export default function Projects({}) {
   return (
      <div className="full">
         <Head>
            <title>Projects</title>
         </Head>
         <div>
            <p>Some Project Stuff</p>
         </div>
         <div
            style={{
               height: '50px',
               backgroundColor: 'red',
            }}
         ></div>
      </div>
   );
}
