import {
  ArrowRightOutlined,
  FacebookOutlined,
  GithubOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';
import { SOCIAL_LINKS } from '@/utils/Media-Links';

export default function SitesCollection() {
  return (
    <div className="flex    gap-5 mt-10 ">
      <p className="textcolor ml-52">See more about me </p>
      <div className="arrow textcolor">
        <ArrowRightOutlined />
      </div>
      <Link className="textcolor" href={SOCIAL_LINKS.facebook}>
        <FacebookOutlined />
      </Link>
      <Link className="textcolor" href={SOCIAL_LINKS.instagram}>
        <InstagramOutlined />
      </Link>
      <Link className="textcolor" href={SOCIAL_LINKS.github}>
        <GithubOutlined />
      </Link>
      <Link className="textcolor" href={SOCIAL_LINKS.linkedin}>
        <LinkedinOutlined />
      </Link>
    </div>
  );
}
