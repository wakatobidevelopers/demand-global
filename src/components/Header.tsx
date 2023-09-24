'use client'
import Image from "next/image"
import { useState } from "react"
import Burger from "../../public/icons/Burger"
import Menu from "./top-navbar/Menu"

export default function Header(){
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu)
    }
  
    return <div>
        <nav className={`md:static fixed flex md:items-center justify-between p-4 ${menu ? "h-[390px]" : " "} text-lg md:px-28 z-30 bg-white w-full`}>
          <div className="logo">
            <Image src='images/logo.svg'
                    alt='logo'
                    width={50}
                    height={50}
              />
          </div>
          <Menu toggle={menu}/>
          {/* <ul className={`absolute md:static md:flex md:w-auto p-5 text-[#3D51B2] w-full top-[4.9rem] right-0 flex-col md:flex-row md:gap-x-16 md:p-0 ${menu ? "flex" : "hidden"} gap-7 text-left`}>
            <li className={pathname === '/' ? 'font-bold border-b-4 border-[#f44238] w-max box-border   '  : " "}>
              <Link href='/'>Home</Link>
            </li>
            <li  className={pathname === '/profile' ? 'font-bold border-b-4 border-[#f44238] w-max box-border   '  : " "}><Link href='/'>Company Profile</Link></li>
            <li className={pathname === '/legality' ? 'font-bold border-b-4 border-[#f44238] w-max box-border   '  : " "}><Link href='/'>Comapny Legality</Link></li>
            <li className={pathname === '/products' ? 'font-bold border-b-4 border-[#f44238] w-max box-border   '  : " "}><Link href='/'>Products</Link></li>
          </ul> */}
          <div className="burger md:hidden">
            <Burger
              className={`${menu ? 'active' : ""}`}
              onClick={toggleMenu}
            />
          </div>
        </nav>
    </div>
}