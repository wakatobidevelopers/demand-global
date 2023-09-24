import Layout from "@/components/Layout"
import data from '../../../public/data.json'
import Image from "next/image"


export default function Profile(){
    return <>
        <section className="">
            <div className=" text-lg p-4 md:px-28 md:py-20 bg-dark-blue text-white">
                <h1 className=" font-extrabold text-3xl md:text-5xl mb-12">About <br/> PT.Haediri Bintang Sejahtera</h1>
                <p>At <b>PT. Haediri Bintang Sejahtera</b>, we take pride in our commitment to supporting local communities and sharing the authentic treasures of Indonesia with the world. Located in Kendari, Southeast Sulawesi, Indonesia, we have established ourselves as a trusted partner in sourcing and exporting local commodities directly from farmers, fishermen, and micro, small, and medium enterprises (MSMEs).
        </p>
            </div>
        </section>
        <section className="px-4 md:px-28 text-dark-blue bg-[#D9D9D9] bg-opacity-20 py-20">
            <ul className="">
            <h2 className='text-2xl font-bold text-dark-blue mb-8'>Our Vission</h2>
                {data.vision.map((item, index) => (

                    <li key={index}
                        className=" text-lg flex gap-2 mb-4"
                    >   <span className="text-2xl  text-dark-blue  font-bold">0{index+1}.</span>{item}
                    </li>
                    
                ))}

                <hr />

            <h2 className='text-2xl font-bold text-dark-blue mb-8'>Our Mission</h2>
                {data.mission.map((item, index) => (

                    <li key={index}
                    className=" text-lg flex gap-2 mb-4"
                    >   <span className="text-2xl  text-dark-blue  font-bold">0{index+1}.</span>{item}
                    </li>
                    
                ))}
            </ul>
        </section >
        <section className="px-4 md:px-28 text-dark-blue bg-opacity-20 pt-40">
            <h2 className='text-2xl font-black text-dark-blue'>Our Core Values</h2>
            <p className=" mb-8">Our values are the foundation of our business, guiding every decision we make:</p>
            <div className="grid gap-4 md:grid-rows-2 md:grid-cols-2">
                {data.core_values.map((item, index) => (
                    <div className="bg-[#F7F7F7] p-5 group hover:bg-dark-blue peer/activeItem ">
                        <h2 className="text-xl font-bold mb-2 group-hover:text-white">{item.title}</h2>
                        <p className="group-hover:text-white">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
        <section className="px-4 md:px-28 text-dark-blue bg-opacity-20 py-40">
            <h2 className='mb-8 text-2xl font-black text-dark-blue'>Why Choose Us?</h2>
            <ul className="grid md:grid-cols-2 md:grid-rows-2 gap-8">
                {data.why.map((item, index) => (
                    <li key={index} className=" text-dark-blue flex items-center gap-4">
                        <Image
                            alt={item.title}
                            src={`/images/why/${item.icon}`}
                            width={85}
                            height={50}
                            className="bg-dark-blue"
                        />
                        <div className="content">
                            <h2 className=" font-extrabold">{item.title}</h2>
                            <p className="">{item.desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    </>
}