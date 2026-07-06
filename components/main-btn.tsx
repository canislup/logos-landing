import Image from "next/image";

type props = {
    href: string,
    text: string,
    textColor: string,
    margin?: string
    icon?: React.ReactNode,
}

const MainBtn = ({ href, text, textColor, margin, icon } : props) => {
    return (
        <a className={`nav-cta flex gap-2 align-center items-center ${textColor} ${margin ? margin : ""}`}
           href={`${href}`}>
            {text}
            <span>
                {icon ? icon : <Image src={"/arrow-long-right.svg"} alt="Arrow right icon" width={24} height={24} />}
            </span>
        </a>
    )
}

export default MainBtn;