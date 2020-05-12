import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import DarkToggle from './DarkToggle';
import {
  // Facebook,
  // GitHub,
  // Mail,
  Book,
  Hexagon,
} from 'react-feather';

const Sidebar = () => {
  const menuEntries = [
    {
      name: 'Blog',
      slug: '/blog',
      icon: Book,
    },
    {
      name: 'about',
      slug: 'about',
      icon: Hexagon,
    },
  ];

  // const socialLinks = [
  //   {
  //     name: 'Facebook',
  //     link: 'https://www.facebook.com/daniel.guldberg.aaes',
  //     icon: Facebook,
  //   },
  //   {
  //     name: 'Github',
  //     link: 'https://github.com/notaduck',
  //     icon: GitHub,
  //   },
  //   {
  //     name: 'Mail',
  //     link: 'mailto:guldberg72@gmail.com?Subject=Hello%20again',
  //     icon: Mail,
  //   },
  // ];

  return (
    <SidebarWrapper>
      <DarkToggle />
      <MenuEntries>
        {menuEntries.map(entry => (
          <Link to={entry.slug}>
            <p> {entry.name} </p>
          </Link>
        ))}
      </MenuEntries>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  background: var(--color-sidebar_background);
  position: fixed;
  width: 20rem;
  height: 100%;
  /* left: 0;
  width: 20rem;
  min-height: 100vh;
  width: 20rem; */
`;

const MenuEntries = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Sidebar;
