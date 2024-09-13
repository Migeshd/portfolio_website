'use client';

import React from 'react';
import Link from 'next/link';
import './ToolBar.css';

export default function TopBar() {
  return (
    <topbar className="justify-around flex d-flex mt-14 ">
      <logo className="w-1/4">
        <div className="Social-Btn ">
          <span className="svgContainer ">
            <p className="textcolor">M D</p>
          </span>
          <span className="BG textcolor">REACT</span>
        </div>
      </logo>
      <nav className="text-sm  flex  justify-around w-1/4 poppins-thin">
        <Link href="/about" className="relative group textcolor">
          ABOUT
        </Link>
        <Link href="/projects" className="relative group textcolor">
          PROJECTS
        </Link>
        <Link href="contact" className="relative group textcolor">
          CONTACT
        </Link>
      </nav>
    </topbar>
  );
}
