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
// ======Data for Dashboard=========Start
export const dashboard = [
  {
    id: 1,
    path: 'orders',
    title: 'Orders',
  },
  {
    id: 2,
    path: '/dashboard',
    title: 'Payments',
  },
]
// ======Data for Dashboard=========End

// category for gender
export const gender = [
  {
    id: 1,
    title: 'Women’s Glasses',
    link: 'https://res.cloudinary.com/inam6530/image/upload/v1659543265/photo-1658437902644-e5414badf0f2_xasajc.jpg',
  },
  {
    id: 2,
    title: 'Kids’ Glasses',
    link: 'https://res.cloudinary.com/inam6530/image/upload/v1659543359/photo-1658752648780-bab3cea5766f_mkcgsp.jpg',
  },
  {
    id: 3,
    title: 'men’s Glasses',
    link: 'https://res.cloudinary.com/inam6530/image/upload/v1659543186/photo-1651218859577-97abc369d12f_cyltc4.jpg',
  },
]

// About us =========

export const aboutUsData = [
  {
    id: 1,
    heading: 'Your Friendly Neighborhood Optical Professionals...',
    paragraph: `The opening of 20/20 Vision Clinic, located in the heart of downtown Kitchener dates back to 1996, a family-owned and run optical business. With 34 years of experience, we can create the most complex prescriptions and strive to give you an enjoyable and memorable experience.

With the performance of a comprehensive exam, our experts can detect any ocular conditions by offering in-house optometry services, which can be conveniently booked online through our website or by calling the office.

Our store offers a large selection of designer, kids, safety frames, contact lenses, and sunglasses, with over a thousand frames to choose from to fit your personality and lifestyle.

We work hard to accommodate the busy schedules of all our patients; as we are open late hours during the week, open Saturdays, and on-call on Sundays. We strive to ensure each experience is great from start to finish.`,
  },
  {
    id: 2,
    heading: 'Our Mission',
    paragraph:
      'Our goal is to present our customers with the best eye care solutions by providing quality products at affordable prices from our professional and knowledgeable staff. Your satisfaction is important to us.',
  },
  {
    id: 3,
    heading: 'Great Service',
    paragraph:
      'Our professional staff throughout the store will be sure to provide you with 100% customer satisfaction.',
  },
  {
    id: 4,
    heading: 'High Quality',
    paragraph:
      'Seeing is believing. Our showroom has what you are looking for: designer frames, eyeglasses, safety glasses, sunglasses, and contact lenses at a quality that best suits your needs.',
  },
  {
    id: 5,
    heading: 'Affordable Prices',
    paragraph:
      'We offer quality products and extensive services at a price that suits your needs.',
  },
]
