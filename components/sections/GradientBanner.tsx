import { SectionNumber } from '@/components/SectionNumber'

export function GradientBanner() {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <SectionNumber number={1} label="Vue d'ensemble" />
                <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-12 text-white rounded-2xl shadow-xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-3">
                        Assurance nouvelle génération
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                        Payez uniquement ce que vous utilisez
                    </h2>
                    <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                        SIDRA adapte votre couverture à votre usage réel — en temps réel.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-medium">
                        <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">✅ 0 frais cachés</span>
                        <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">⚡ Activation instantanée</span>
                        <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">📊 Suivi en temps réel</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
