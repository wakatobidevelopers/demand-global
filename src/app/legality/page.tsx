import Layout from "@/components/Layout"
import garuda from "../../../public/images/legality/garuda.png"
import djp from "../../../public/images/legality/djp.png"
import kemenkumham from "../../../public/images/legality/kemenkumham.png"
import Image from "next/image"

export default function Legality(){
    return <div>

        <section className="">
            <div className=" text-lg p-4 md:px-28 md:py-20 text-dark-blue ">
                <h1 className=" font-extrabold text-3xl md:text-5xl mb-12">Legality Company</h1>
                <p>At <b>PT. Haediri Bintang Sejahtera</b>, we take pride in our commitment to legal compliance, transparency, and ethical business practices. We understand the importance of upholding the law and ensuring that our operations meet the highest standards of integrity. Our dedication to legality is evident in several key areas:
        </p>
            </div>
        </section>
        <section className="md:px-28 px-4 grid gap-4 md:grid-rows-1 md:grid-cols-3 pb-20">
            <div className=" bg-cover bg-no-repeat p-4" style={{backgroundImage: "url('images/bg/garuda.png')"}}>
                <Image
                    alt="garuda"
                    src={garuda}
                    width={50}
                />
                <h2 className=" text-lg font-extrabold  text-dark-blue">Perizinan Berusaha Berbasis Resiko</h2>
                <h3>Nomor Induk Berusaha: 0703230106278</h3>
            </div>
            <div className=" bg-cover bg-no-repeat p-4" style={{backgroundImage: "url('images/bg/npwp.png')"}}>
                <Image
                    alt="garuda"
                    src={djp}
                    width={150}
                />
                <h2 className=" text-lg font-extrabold  text-dark-blue">Nomor Pokok Wajib Pajak (NPWP)</h2>
                <h3>62.905.207.7-811.000</h3>
            </div>
            <div className=" bg-cover bg-no-repeat p-4" style={{backgroundImage: "url('images/bg/sertifikat.png')"}}>
                <Image
                    alt="garuda"
                    src={kemenkumham}
                    width={100}
                />
                <h2 className=" text-lg font-extrabold  text-dark-blue">Sertifikat Pendaftaran Pendirian Perseroan Perorangan</h2>
                <h3>Nomor: AHU-014011.AH.01.30.Tahun 2023</h3>
            </div>
        </section>
    </div> 
}