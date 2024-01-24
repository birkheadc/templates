import * as React from 'react';
import NavLink from './navLink/NavLink';
import { CameraIcon, EyeDropperIcon, FilmIcon, HomeIcon, MapIcon, MapPinIcon, SparklesIcon, SwatchIcon } from '@heroicons/react/24/outline';

type NavLinksProps = {

}

export default function NavLinks(props: NavLinksProps): JSX.Element {
  return (
    <ul className='absolute flex flex-row w-full h-full'>
      <NavLink id='hero'><HomeIcon height={'100%'}/> <span className='hidden lg:inline-block'>home</span></NavLink>
      <NavLink id='nav-brag'><MapIcon height={'100%'} /> <span className='hidden lg:inline-block'>navigation</span></NavLink>
      <NavLink id='colors-generator'><EyeDropperIcon height={'100%'} /> <span className='hidden lg:inline-block'>colors</span></NavLink>
      <NavLink id='parallax'><SparklesIcon height={'100%'} /> <span className='hidden lg:inline-block'>parallax</span></NavLink>
    </ul>
  );
}