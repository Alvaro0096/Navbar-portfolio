import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import NavItem from './components/NavItem';
import DropdownMenu from './components/DropdownMenu';

// ICONOS
import {ReactComponent as HomeIcon} from './icons_svg/home.svg';
import {ReactComponent as UserIcon} from './icons_svg/user.svg';
import {ReactComponent as PhoneIcon} from './icons_svg/phone-call.svg';
import {ReactComponent as ArrowDownIcon} from './icons_svg/caret-down.svg';
import {ReactComponent as GraduationIcon} from './icons_svg/graduation-cap.svg';

function App() {
  return (
    <Navbar>
      <NavItem icon={<HomeIcon />}></NavItem>
      <NavItem icon={<UserIcon />}></NavItem>
      <NavItem icon={<PhoneIcon />}></NavItem>
      <NavItem icon={<ArrowDownIcon />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  );
}

export default App;
