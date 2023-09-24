
interface titleProps{
    text : string
    text2? : string
    subTitle? : string
    bigText? : boolean
}

export default function Title({text, text2, bigText = true, subTitle} : titleProps){

    const style = {
        heading1 : "z-[1] mt-6 font-extrabold text-4xl md:text-5xl"
    }

    return <>
        <h1 className={style.heading1}>{text} {text2 !== undefined && <br/>} {text2}</h1>
        {subTitle !== undefined && <p>{subTitle}</p>}
    </>
}