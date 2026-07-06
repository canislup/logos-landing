type HeroProps = {
    text: string;
    textColor: string;
    icon?: React.ReactNode;
    emoji?: string;
    iconColor?: string;
    bgColor?: string;
    border?: boolean;
    borderColor?: string;
    animation?: boolean;
}

const TitleTag = ({text, textColor, icon, emoji, iconColor, bgColor, border, borderColor, animation}: HeroProps ) => {
    return (
        <div className={`
            ${bgColor ? bgColor : 'bg-slate-50'} 
            flex items-center justify-center 
            px-4 py-2 gap-2.5 
            /* Luxury elements favor sharper, architectural corners over full round shapes */
            ${border ? 'rounded-sm' : 'rounded-full'} 
            ${border ? 'border border-solid' : ''}  
            ${borderColor ? borderColor : 'border-slate-100'} 
            ${animation ? 'animate-pulse' : ''}
            transition-all duration-300
        `}>
            {icon && <div className={`shrink-0 ${iconColor ? iconColor : ''}`}>{icon}</div>}
            <p className={`${textColor}`}>{emoji ? emoji : ''}{text}</p>
        </div>
    )
}

export default TitleTag;
