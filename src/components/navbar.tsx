import Link from 'next/link'
import React from 'react'
import { PageContext } from '@/contexts/context'

type NavbarPath = {
  href: string;
  value: string;
  icon: JSX.Element;
  ariaLabel: string;
}

export default function Navbar() {
  const briefcaseIcon = <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    width={20}
    height={20}
  >
    <path
      fillRule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z"
      clipRule="evenodd"
    />
    <path
      d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z"
    />
  </svg>

  const userIcon = <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    width={20}
    height={20}
  >
    <path
      d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z"
    />
  </svg>

  const atIcon = <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    width={20}
    height={20}
  >
    <path
      fillRule="evenodd"
      d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
      clipRule="evenodd"
    />
  </svg>


  const paths: NavbarPath[] = [
    {
      href: '/',
      value: 'Work',
      icon: briefcaseIcon,
      ariaLabel: 'get to know about my work',
    },
    {
      href: '/profile',
      value: 'Profile',
      icon: userIcon,
      ariaLabel: 'get to know about me',
    },
    {
      href: '/contact',
      value: 'Contact',
      icon: atIcon,
      ariaLabel: 'for more information, please contact me'
    },
  ]

  const page = React.useContext(PageContext)

  const listElement = paths.map((path, index) => (
    <li
      key={index}
      className="navbar__item"
    >
      <Link
        className={page === path.href ? 'active' : ''}
        href={path.href}
        aria-label={path.ariaLabel}
      >
        {path.icon}
        <span>{path.value}</span>
      </Link>
    </li>
  ))

  return (
    <nav className="navbar">
      <ul className="navbar__list">{listElement}</ul>
    </nav>
  )
}
