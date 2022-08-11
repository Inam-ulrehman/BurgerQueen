import {
  AiOutlineHome,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai'
import { CgMenuOreos } from 'react-icons/cg'
import { FaUserTie, FaPhoneAlt, FaInstagramSquare } from 'react-icons/fa'
import { IoMdCart } from 'react-icons/io'

// ======Data for navbar=========Start

export const navbarData = [
  { id: 1, path: '/', title: 'Home', icon: <AiOutlineHome /> },

  { id: 3, path: '/contact', title: 'ContactUS', icon: <FaPhoneAlt /> },
  {
    id: 4,
    path: '/products',
    title: 'Menu',
    icon: <CgMenuOreos />,
  },
  { id: 5, path: '/user', title: 'SignUp', icon: <FaUserTie /> },

  { id: 6, path: '/cart', title: 'Cart', icon: <IoMdCart /> },
]

// ======Data for navbar=========End
// ======Data for SocialIcons=====Start
export const socialIcons = [
  {
    id: 1,
    path: 'https://facebook.com',
    target: '_blank',
    rel: 'noreferrer',
    icon: <AiFillFacebook />,
    title: 'Facebook',
  },
  {
    id: 2,
    path: 'https://Twitter.com',
    target: '_blank',
    rel: 'noreferrer',
    icon: <AiFillTwitterCircle />,
    title: 'Twitter',
  },
  {
    id: 3,
    path: 'https://Github.com',
    target: '_blank',
    rel: 'noreferrer',
    icon: <AiFillGithub />,
    title: 'Github',
  },
  {
    id: 4,
    path: 'https://Linkedin.com',
    target: '_blank',
    rel: 'noreferrer',
    icon: <AiFillLinkedin />,
    title: 'Linkedin',
  },
  {
    id: 5,
    path: 'https://www.instagram.com/',
    target: '_blank',
    rel: 'noreferrer',
    icon: <FaInstagramSquare />,
    title: 'Instagram',
  },
]
// ======Data for SocialIcons=====End

// ===== Data for Address =====Start
export const address = [
  {
    id: 1,
    title: 'Address',
    titleInfo: '86 cedart street,Kitchener, ON, ON N2H 6R4',
  },
  {
    id: 2,
    title: 'Mobile Number',
    titleInfo: '4165606790',
  },
  {
    id: 3,
    title: 'Landline',
    titleInfo: '4165606790',
  },
  {
    id: 4,
    title: 'Email',
    titleInfo: 'inam6530@hotmail.com',
  },
]
// ======Data for Address ==========End
