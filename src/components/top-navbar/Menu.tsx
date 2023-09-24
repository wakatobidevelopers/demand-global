import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react";

const menu = [
    {
        name : "Home",
        path : "/"
    },
    {
        name : `Company Profile`,
        path : "/profile"
    },
    {
        name : "Company Legality",
        path : "/legality"
    },
    {
        name : "Products",
        path : "/products"
    },
    {
        name : "Contact Us",
        path : "/contacts"
    }
];


interface menuProps {
    toggle : boolean
}

const className = {
    ulStyle : `absolute md:static md:flex md:w-auto p-5 text-[#3D51B2] w-full top-[4.9rem] right-0 flex-col md:flex-row md:gap-x-16 md:p-0 gap-7 text-left`,
    liStyle : 'font-bold border-b-4 border-[#f44238] w-max box-border ' 
}

export default function Menu({toggle} : menuProps) {

    const pathName = usePathname();

    return <ul className={` ${toggle ? "flex" : "hidden"} ${className.ulStyle}`}>
        {menu.map((item, index) => (
            <li key={index}
            className={pathName === `${item.path}` ? `${className.liStyle}` : " "}>
                <Link href={item.path}>{item.name}</Link>
            </li>
        ))}
    </ul>
}