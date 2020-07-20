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
      <div>
        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{ display: 'flex' }}
        />
      </div>
      <Nav>
        {menuEntries.map(entry => (
          <>
            <NavItem key={entry.name}>
              <Link to={entry.slug} activeClassName="active">
                <p>
                  {entry.icon} {entry.name}
                </p>
              </Link>
            </NavItem>
            <HLine />
          </>
        ))}
      </Nav>
      <SocialLinks>
        <ul>
          {socialLinks.map((link, index) => {
            let liStyle;

            if (index != 0) {
              liStyle = { paddingLeft: '22px' };
            }
            return (
              <li style={liStyle}>
                <a href={link.link}> {link.icon}</a>
              </li>
            );
          })}

						<li> <DarkToggle/> </li>
        </ul>
      </SocialLinks>
    </SidebarWrapper>
  );
};

const SocialLinks = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style-type: none;
    padding: 0;
  }
  li:hoover {
  }
  a {
    color: white;
  }
`;

const HLine = styled.div`
  margin-left: 10%;
  width: 80%;
  border-bottom: 1px solid gray;
  border-radius: 50%;
`;

const SidebarWrapper = styled.div`
  background: var(--color-sidebar_background);
	p {
		color: white
	}
  position: fixed;
  width: 20rem;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.5fr 2fr 0fr;
`;

const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
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

    color: black;
  }

  .active {
    color: var(--color-secondary);
  }
`;

export default Sidebar;
