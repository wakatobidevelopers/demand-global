'use client'

import Image from "next/image"

interface ProductsProps {
    images: string
    name: string
    desc: string
    openDesc : boolean
    btnCLick:  () => void
}

export default function Products({images, name, btnCLick, desc, openDesc} : ProductsProps){
    return <div className="">
        <div className="flex flex-col md:flex-row justify-center  items-center text-white">
            <div className="h-32 md:h-[292px] bg-black overflow-hidden">
                <Image
                    alt="img1"
                    src={`/images/products/${images}`}
                    width={1000}
                    height={0}/>
            </div>
            <div className="w-full flex justify-around bg-dark-blue flex-col p-4  z-[1]">
                <h1 className="text-xl font-bold pb-2"> {name}</h1>
                <p className={` h-32 md:h-[224px] overflow-y-scroll no-scrollbar`}>{desc}</p>
            </div>
    </div>
    </div>
}