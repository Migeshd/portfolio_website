'use client ';

import React from 'react';
import './home.css';
import HomeContents from '@/ui/components/Home-Contents';
import SitesCollection from '@/ui/components/Sites-Collection';
import ContactButton from '@/ui/atoms/Contact-Button';
import ContentHead from '@/ui/components/Content-Head';

export default function Home() {
  return (
    <div className="">
      <div class="outer">
        <div class="dot"></div>
        <div class="card">
          <ContentHead />
          <div>
            <HomeContents />
            <SitesCollection />
            <ContactButton />
          </div>
        </div>
      </div>
    </div>
  );
}
