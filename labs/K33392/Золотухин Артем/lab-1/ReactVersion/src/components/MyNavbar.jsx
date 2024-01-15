import { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import '../App.css'
import { IconContext } from 'react-icons'

export default function MyNavbar() {
  const SidebarData = [
    {
      title: 'Home',
      path: '/',
      icon: <AiIcons.AiOutlineHome />,
      cName: 'nav-text',
    },
    {
      title: 'About',
      path: '/about',
      icon: <AiIcons.AiOutlineIdcard />,
      cName: 'nav-text',
    },
    {
      title: 'Work',
      path: '/work',
      icon: <AiIcons.AiOutlineLaptop />,
      cName: 'nav-text',
    },
    {
      title: 'Blog',
      path: '/blog',
      icon: <AiIcons.AiOutlinePicRight />,
      cName: 'nav-text',
    },
    {
      title: 'Notes',
      path: '/notes',
      icon: <AiIcons.AiOutlineFile />,
      cName: 'nav-text',
    },
    {
      title: 'About this page',
      path: '/about_page',
      icon: <AiIcons.AiOutlineWarning />,
      cName: 'nav-text',
    },
    {
      title: 'Search',
      path: '/search',
      icon: <AiIcons.AiOutlineSearch />,
      cName: 'nav-text',
    },
  ]
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <IconContext.Provider value={{ color: 'undefined' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul>
            <li className='navbar-toggle' onClick={showSidebar}>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li>
              <div className='navbar_logo'>
                <img src='src/assets/logo.svg' alt='Logo' />
              </div>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} onClick={showSidebar}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
          <footer className='navbar-footer'>
            <h5>2023 © Useless Student</h5>
          </footer>
        </nav>
      </IconContext.Provider>
    </>
  )
}
