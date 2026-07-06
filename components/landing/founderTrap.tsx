import TitleTag from "@/components/landing/title-tag";

const FounderTrap = () => {
    return (
        <div className={"container mx-auto px-4 flex flex-col items-center justify-center align-center pt-28"}>
            <TitleTag
                text={"WARNING: The Founder's Trap"}
                textColor={"text-salmon-pink"}
                icon={'/exclamation-triangle.svg'}
                bgColor={'bg-red-500/10'}
                animation={true}
                borderColor={"border-red-400/30"}/>

            <div className="">
                <h2 className={"text-4xl mt-10"}>Does This Sound Familiar?</h2>
                <p className={"supporting-text"}>You're wearing 6 hats. Growth stalled.</p>
            </div>

            <div className={"grid grid-cols-2"}>
                <div>
                    Image will go here
                </div>

                <div className={"grid grid-cols-2 grid-rows-3"}>
                    <div>item #1</div>
                    <div>item #2</div>
                    <div>item #3</div>
                    <div>item #4</div>
                    <div>item #5</div>
                    <div>item #6</div>
                </div>
            </div>
        </div>
    )
}

export default FounderTrap;