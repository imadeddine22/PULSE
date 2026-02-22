interface SectionNumberProps {
    number: number
    label?: string
}

export function SectionNumber({ number, label }: SectionNumberProps) {
    return (
        <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-pulse-accent text-white font-extrabold text-base shadow-lg select-none">
                {number}
            </div>
            {label && (
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    {label}
                </span>
            )}
            <div className="flex-1 h-px bg-gray-200" />
        </div>
    )
}
