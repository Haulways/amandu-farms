/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import NavLogo from "../assets/images/nav-logo.png";

const Navbar = () => {
    const location = useLocation();
    const [navbarColor, setNavbarColor] = useState("transparent");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 50) {
                setNavbarColor("alternative-nav-color");
                
            } else {
                if (location.pathname === '/privacy-policy') {
                    console.log("Setting navbar color to #000");
                    setNavbarColor("another-nav-color");
                } else {
                    console.log("Setting navbar color to transparent");
                    setNavbarColor("transparent");
                }
            }
        };

        // Set initial navbar color based on route
        console.log("Current pathname:", location.pathname);
        if (location.pathname === '/privacy-policy') {
            console.log("Setting navbar color to #000");
            setNavbarColor("another-nav-color");
        } else {
            console.log("Setting navbar color to transparent");
            if (window.scrollY >= 50){
                setNavbarColor("alternative-nav-color");
            }
            else{
                setNavbarColor("transparent")
            }
            
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });
    
    return (
        <>
        <nav className={`xui-navbar amd-nav dark-color ${navbarColor} xui-container pd-nav xui-text-black`} brand="true" layout="2" menu="2">
            <div className="brand xui-h-fluid-100">
                <HashLink className="xui-text-dc-none xui-h-fluid-100 xui-text-inherit xui-d-inline-flex xui-flex-ai-center" to={'/'}>
                    <img src={NavLogo} className="xui-img-200" alt="" />
                    {/* <span className="xui-ml-half xui-d-inline-block xui-font-1 xui-font-w-bold">Kathy</span> */}
                </HashLink>
            </div>
            <div className="links" placed="left">
                <div className="main dark-color primary xui-bg-white">
                    <ul>
                        <li>
                            <NavLink className="xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-bold xui-text-inherit" to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <HashLink className="xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-bold xui-text-inherit" smooth to={"#products"}>Product</HashLink>
                        </li>
                        <li>
                            <HashLink className="xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-bold xui-text-inherit" smooth to={"#services"}>Services</HashLink>
                        </li>
                        <li>
                            <HashLink className="xui-font-sz-150 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-bold xui-text-inherit" smooth to={"#about"}>About</HashLink>
                        </li>
                     
                    </ul>
                </div>
                <div className="fixed xui-lg-d-block xui-md-d-block xui-d-none">
                    <ul>
                        <li>
                            <HashLink to={'/contact'} style={{padding: '.8rem 1.4rem'}} className=' nav-btn xui-bdr-rad-half xui-btn white-bdr xui-text-dc-none xui-text-white xui-font-sz-90'>Sign in</HashLink>
                        </li>
                        <li>
                            <HashLink to={'/contact'} style={{padding: '.8rem 1.4rem'}} className='signup xui-py-half xui-px-1 iyd-blue-bg nav-btn xui-bdr-rad-5 xui-btn white-bdr xui-text-dc-none xui-text-white xui-font-sz-90 xui-font-w-bold'>Sign up</HashLink>
                            {/* <BtnCustomI onClick={scrollToContainer("contact")} href="./" text="Book free consultation" mobileText="Book Now" layout="iv"></BtnCustomI> */}
                        </li>
                    </ul>
                </div>
                <div className="menu">
                    <span className={location.pathname === '/privacy-policy' ? 'xui-bg-black' : 'xui-bg-white'}></span>
                    <span className={location.pathname === '/privacy-policy' ? 'xui-bg-black' : 'xui-bg-white'}></span>
                    <span className={location.pathname === '/privacy-policy' ? 'xui-bg-black' : 'xui-bg-white'}></span>
                </div>
            </div>
        </nav>
        </>
    )
};

export default Navbar;