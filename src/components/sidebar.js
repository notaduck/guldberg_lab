import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import DarkToggle from './DarkToggle';
import {
  Facebook,
  GitHub,
  Mail,
  Book,
  Hexagon,
  Briefcase,
} from 'react-feather';

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { regex: "/rev4/" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);

  const menuEntries = [
    {
      name: 'Blog',
      slug: '/blog',
      icon: <Book />,
    },
    {
      name: 'About',
      slug: 'about',
      icon: <Hexagon />,
    },
    {
      name: 'Projects',
      slug: 'projects',
      icon: <Briefcase />,
    },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/daniel.guldberg.aaes',
      icon: <Facebook />,
    },
    {
      name: 'Github',
      link: 'https://github.com/notaduck',
      icon: <GitHub />,
    },
    {
      name: 'Mail',
      link: 'mailto:guldberg72@gmail.com?Subject=Hello%20again',
      icon: <Mail />,
    },
  ];

  return (
    <SidebarWrapper>
      <Img
        fluid={data.file.childImageSharp.fluid}
        style={{ display: 'flex' }}
      />
      <DarkToggle />
      <Nav>
        {menuEntries.map(entry => (
          <NavItem key={entry.name}>
            <Link to={entry.slug} activeClassName="active">
              <p>
                {entry.icon} {entry.name}
              </p>
            </Link>
          </NavItem>
        ))}
      </Nav>
      <SocialLinks>
        {socialLinks.map(link => (
          <li>
            {' '}
            <a target="_blank" href={link.link}>
              {' '}
              {link.icon}
            </a>{' '}
          </li>
        ))}
      </SocialLinks>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled.div`
  background: var(--color-sidebar_background);
  position: fixed;
  width: 20rem;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 5% 1fr;
`;

const Nav = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  display: flex;

  a {
    width: 100%;
    color: var(--color-text);
    text-decoration: none;
    transition: 0.5s;
    padding: 1.5rem 1rem;

    & p {
      margin: 0 5rem;
    }
  }

  a:hover {
    background-color: var(--color-secondary);
  }
  /* a:hover:not(.active) {
    background-color: var(--color-secondary);
  } */

  .active {
    border: 1px solid #efef;
  }
`;

const SocialLinks = styled.li`
  display: flex;
  flex-direction: row;
`;

export default Sidebar;
