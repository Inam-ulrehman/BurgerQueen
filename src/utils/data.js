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

  {
    id: 3,
    path: '/products',
    title: 'Menu',
    icon: <CgMenuOreos />,
  },
  { id: 5, path: '/cart', title: 'Cart', icon: <IoMdCart /> },
  { id: 4, path: '/user', title: 'SignUp', icon: <FaUserTie /> },

  { id: 2, path: '/contact', title: 'ContactUS', icon: <FaPhoneAlt /> },
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

// ======Landing page Two cart=====Start
export const landingTwo = [
  {
    id: 1,
    title: 'Box-1',
    classType: 'box1',
    paragraph: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            repellendus quibusdam, deleniti nisi molestiae quas neque sint non
            fugit quaerat dicta et tenetur eos. Nulla delectus rem alias eum
            error.`,
    path: '/user',
    image:
      'https://firebasestorage.googleapis.com/v0/b/burger-queen-6b0d2.appspot.com/o/2_800x800.png?alt=media&token=c8a8107c-03a6-4c18-815b-bfa9e683656a',
    buttonTitle: 'SignUp to Order',
  },
  {
    id: 2,
    title: 'Box-2',
    classType: 'box2',
    paragraph: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            repellendus quibusdam, deleniti nisi molestiae quas neque sint non
            fugit quaerat dicta et tenetur eos. Nulla delectus rem alias eum
            error.`,
    path: '/user',
    image:
      'https://firebasestorage.googleapis.com/v0/b/burger-queen-6b0d2.appspot.com/o/3_800x800.png?alt=media&token=ab2b725b-86e7-4c25-9d5e-4beadf05105c',
    buttonTitle: 'SignUp to Order',
  },
  {
    id: 3,
    title: 'Box-3',
    classType: 'box3',
    paragraph: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            repellendus quibusdam, deleniti nisi molestiae quas neque sint non
            fugit quaerat dicta et tenetur eos. Nulla delectus rem alias eum
            error.`,
    path: '/products',
    image:
      'https://firebasestorage.googleapis.com/v0/b/burger-queen-6b0d2.appspot.com/o/4_800x800.png?alt=media&token=edef8b60-740a-4597-ac86-f9d69329f98b',
    buttonTitle: 'Special Offers',
  },
  {
    id: 4,
    title: 'Box-4',
    classType: 'box4',
    paragraph: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            repellendus quibusdam, deleniti nisi molestiae quas neque sint non
            fugit quaerat dicta et tenetur eos. Nulla delectus rem alias eum
            error.`,
    path: '/products/breakfast',
    image:
      'https://firebasestorage.googleapis.com/v0/b/burger-queen-6b0d2.appspot.com/o/5_800x800.png?alt=media&token=d832fe01-8c27-4f86-80d4-5e12aa1e2b20',
    buttonTitle: 'BreakFast Menu',
  },
]
// ======Landing page Two cart=====End
