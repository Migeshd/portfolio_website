import Link from 'next/link';
import React from 'react';

export default function HomeContents() {
  return (
    <>
      <div className="flex  justify-center mt-10">
        <p className="w-3/4 textcolor tracking-widest suse-light">
          I'm <b>MIGESH</b> your friendly neighborhood frontend focused web
          developer based in kathmandu, UX architect, and JavaScript engineer. I
          spend my days (and often nights) painting the Internet canvas with{' '}
          <Link href="./projects">
            <b>PROJECTS</b>
          </Link>{' '}
          and lines of code, turning zeroes and ones into immersive, interactive
          experiences,
        </p>
      </div>
      <br></br>
      <div className="flex justify-center ">
        <p className="w-3/4 tracking-widest textcolor suse-light">
          I specialize in building dynamic applications that are fast, scalable,
          and fault-tolerant. Along the frontend journey, I've aquired a lot of
          skill set but, I specialize in React, TypeScript, Next.js, and Zod.
        </p>
      </div>
    </>
  );
}
