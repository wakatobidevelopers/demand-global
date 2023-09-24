import Layout from "@/components/Layout"
import Image from "next/image"
import data from "../../../public/data.json"

export default function page(){
    return <>
        <section className="">
            <div className=" text-lg p-4 md:px-28 md:py-20 text-dark-blue ">
                <h1 className=" font-extrabold text-3xl md:text-5xl mb-12">Explore Our Exquisite Product Selection</h1>
                <p>Welcome to the world of PT. Haediri Bintang Sejahtera, where we take pride in offering you a curated selection of exceptional local commodities directly sourced from the vibrant landscapes of Southeast Sulawesi, Indonesia.
        </p>
            </div>
        </section>
        <section className="px-4 md:px-28 grid  md:grid-cols-2 columns-2 gap-8 pb-28">
            {data.products.map((item, index) => (
                    <div className="h-max bg-dark-blue ">
                    <div className = " bg-white max-h-52 overflow-hidden">

                        <Image
                            alt="Dry Cashew"
                            src={`/images/products/${item.image}`}
                            width={1000}
                            height={0}
                            className=""
                        />
                    </div>
                    <h2 className="text-white font-black text-2xl p-4 text-center">{item.name}</h2>
                </div>
            ))}
        </section>
    </>
}