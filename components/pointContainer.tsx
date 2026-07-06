interface Props {
    key: number,
    icon: React.ReactNode,
    title: string,
    description: string,
}

const PointContainer = ({ key, icon, description, title } : Props) => {
    return (
        <div
            key={key}
            className="group flex flex-col items-start p-6 bg-white border border-slate-100 rounded-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_-6px_rgba(180,140,100,0.08)] hover:border-amber-700/20 transition-all duration-500"
        >
            {/* De-saturated Luxury Icon Square */}
            <div className="flex items-center justify-center p-3 bg-slate-50 border border-slate-100 rounded-sm shrink-0 mb-4 group-hover:bg-amber-50 group-hover:border-amber-100 transition-colors duration-500">
                {icon}
            </div>

            {/* Clean Typographic Contrast Layer */}
            <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-medium text-slate-900 tracking-tight group-hover:text-amber-800 transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-sm font-light text-slate-500 leading-relaxed text-pretty">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default PointContainer;