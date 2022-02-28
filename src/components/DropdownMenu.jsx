import React, {useState, useEffect, useRef} from 'react';
import { CSSTransition } from 'react-transition-group';
import './dropdown_style.css';

// ICONOS
import {ReactComponent as HomeIcon} from '../icons_svg/home.svg';
import {ReactComponent as UserIcon} from '../icons_svg/user.svg';
import {ReactComponent as PhoneIcon} from '../icons_svg/phone-call.svg';
import {ReactComponent as ArrowDownIcon} from '../icons_svg/caret-down.svg';
import {ReactComponent as ArrowLeftIcon} from '../icons_svg/caret-left.svg';
import {ReactComponent as GraduationIcon} from '../icons_svg/graduation-cap.svg';

const DropdownMenu = () => {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
      }, [])

    function calcHeight(el){
        const height = el.offsetHeight;
        setMenuHeight(height);
    }   

    function DropdownItem(props) {
        return (
            <a href='#' className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className='icon-button'>{props.leftIcon}</span>
                {props.children}
                {/* <span className='icon-right'>{props.rightIcon}</span> */}
            </a>
        );
    }

    return (
        <div className='dropdown' style={{height: menuHeight}} ref={dropdownRef}>
        <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames='menu-primary'
        unmountOnExit
        onEnter={calcHeight}>
            <div className='menu'>
                <DropdownItem>
                    My Profile
                </DropdownItem>
                <DropdownItem
                leftIcon={<UserIcon />}
                // rightIcon={<UserIcon />}
                goToMenu='settings'>
                    settings
                </DropdownItem>
            </div>
        </CSSTransition>

        <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
        classNames='menu-secondary'>
            <div className='menu'>
                <DropdownItem leftIcon={<ArrowLeftIcon />} goToMenu='main'>
                    <h2>Tutorial text</h2>
                </DropdownItem>
                <DropdownItem leftIcon={<GraduationIcon />}></DropdownItem>
                <DropdownItem leftIcon={<GraduationIcon />}></DropdownItem>
                <DropdownItem leftIcon={<GraduationIcon />}></DropdownItem>
                <DropdownItem leftIcon={<GraduationIcon />}></DropdownItem>
                <DropdownItem leftIcon={<GraduationIcon />}></DropdownItem>
            </div>
        </CSSTransition>
        </div>
    );
}
 
export default DropdownMenu;