import Link from "next/link";
import logo from "@/assets/logo.png"
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Navbar = () => {

    const NavLink = <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/pages">Pages</Link></li>
        <li><Link href="/categories/news?category=all-news">Category</Link></li>
        <li><Link href="/news">News</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
    </>
    return (
       
            <div className="navbar bg-black text-white rounded">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavLink}
                        </ul>
                    </div>
                    <Image src={logo} alt="Logo" height={100} width={100} />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavLink}
                    </ul>
                </div>
                <div className="navbar-end gap-x-4">
                    
                        <FaFacebook></FaFacebook>
                        <FaTwitter/>
                        <FaInstagram/>
                    
                </div>
            </div>
        
    );
};

export default Navbar;