import Image from "next/image"
import npwpimg from "../../public/images/kemenkumham.png"
import kemenkumhamimg from "../../public/images/npwp.png"

export default function Footer(){
    return <div>
        <footer className="relative flex flex-col md:flex-row justify-between flex-wrap md:px-28 md:py-28  text-white bg-[#3D51B2] w-full text-lg gap-8 h-max p-4">
            <div className=" -pt-32 grid grid-cols-2 grid-rows-2  w-max z-20">
                <Image alt="footer_logo"
                       src="icons/logo.svg"
                       width={45}
                       height={45}
                />
                <h1 className="-ml-32 w-max">
                    PT. Haediri <br/>
                    Bintang Sejahtera
                </h1>
                <div className="w-[380px] col-span-2 row-start-2 -mt-5">
                <h1>Alamat kantor: Jl.Merpati , RT/RW : 003/002, Kel. Kambu, kec. Kambu, kota Kendari, Sulawesi Tenggara, Indonesia. Kode pos 93231</h1>
                </div>
            </div>
            <div className="z-20 featured_products md:-ml-9">
                <h2 className="font-bold pb-3">Featured Products</h2>
                <ul>
                    <li>Peeled Coconut</li>
                    <li>Dry Cashews</li>
                    <li>Dry Seaweed</li>
                </ul>
            </div>
            <div className="z-20 w-max company-legality">
                <h2 className="font-bold pb-3">Company Legality</h2>
                <div className="flex flex-row-reverse gap-1">
                    <Image alt="kemenkumham"
                           src={kemenkumhamimg}
                    />
                    <Image alt="NPWP"
                           src={npwpimg}
                    />
                </div>
            </div>
            <span className="z-20 md:block text-sm w-full md:mt-10 text-center md:-mb-12">&copy; 2023 PT HAEDIRI BINTANG SEJAHTERA</span>
        </footer>
    </div>
}