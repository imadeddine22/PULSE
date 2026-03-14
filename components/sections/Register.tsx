'use client'

import { useState } from 'react'

export function Register() {
    const [copilotAccepted, setCopilotAccepted] = useState(false)

    return (
        <section id="register" className="py-16 sm:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <span className="inline-block px-4 py-1.5 bg-pulse-accent/10 text-pulse-accent text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                        Inscription
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        Créez votre compte SIDRA
                    </h2>
                    <p className="text-gray-500 mt-2 text-sm">
                        Remplissez les informations ci-dessous pour commencer.
                    </p>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-5">

                    {/* Nom et prénom */}
                    <div className="space-y-1.5">
                        <label
                            htmlFor="reg-fullname"
                            className="block text-sm font-semibold text-gray-700"
                        >
                            Nom et prénom
                        </label>
                        <input
                            id="reg-fullname"
                            type="text"
                            placeholder="Ex: Ahmed Benali"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pulse-accent/50 focus:border-pulse-accent transition-all duration-200"
                        />
                    </div>

                    {/* Numéro de téléphone */}
                    <div className="space-y-1.5">
                        <label
                            htmlFor="reg-phone"
                            className="block text-sm font-semibold text-gray-700"
                        >
                            Numéro de téléphone
                        </label>
                        <div className="flex items-center gap-2">
                            <span className="flex-shrink-0 px-3 py-3 rounded-xl border border-gray-200 bg-gray-100 text-gray-500 text-sm font-medium select-none">
                                +213
                            </span>
                            <input
                                id="reg-phone"
                                type="tel"
                                placeholder="07 00 00 00 00"
                                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pulse-accent/50 focus:border-pulse-accent transition-all duration-200"
                            />
                        </div>
                    </div>

                    {/* Code confirmation SMS */}
                    <div className="space-y-1.5">
                        <label
                            htmlFor="reg-sms"
                            className="block text-sm font-semibold text-gray-700"
                        >
                            Code confirmation SMS
                        </label>
                        <div className="flex gap-3">
                            <input
                                id="reg-sms"
                                type="text"
                                placeholder="- - - - - -"
                                maxLength={6}
                                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm placeholder-gray-400 tracking-[0.4em] text-center font-mono focus:outline-none focus:ring-2 focus:ring-pulse-accent/50 focus:border-pulse-accent transition-all duration-200"
                            />
                            <button
                                type="button"
                                className="flex-shrink-0 px-4 py-3 rounded-xl border border-pulse-accent text-pulse-accent text-sm font-semibold hover:bg-pulse-accent hover:text-white transition-all duration-200 whitespace-nowrap"
                            >
                                Envoyer
                            </button>
                        </div>
                    </div>

                    {/* Immatriculation */}
                    <div className="space-y-1.5">
                        <label
                            htmlFor="reg-plate"
                            className="block text-sm font-semibold text-gray-700"
                        >
                            Immatriculation de votre véhicule
                        </label>
                        <input
                            id="reg-plate"
                            type="text"
                            placeholder="Ex: 123-456-16"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 text-sm placeholder-gray-400 uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-pulse-accent/50 focus:border-pulse-accent transition-all duration-200"
                        />
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-100 pt-5 space-y-4">

                        {/* CO-PILOTE notice */}
                        <p className="text-xs text-gray-500 leading-relaxed">
                            Co-Pilote analysera les trajets pour calculer votre prime réelle. Vous pouvez
                            désactiver CO-PILOTE à tout moment.
                        </p>

                        {/* Checkbox */}
                        <label
                            htmlFor="reg-copilot"
                            className="flex items-center gap-3 cursor-pointer group"
                        >
                            <div className="relative flex-shrink-0">
                                <input
                                    id="reg-copilot"
                                    type="checkbox"
                                    checked={copilotAccepted}
                                    onChange={(e) => setCopilotAccepted(e.target.checked)}
                                    className="peer sr-only"
                                />
                                <div className="w-5 h-5 rounded-md border-2 border-gray-300 bg-white peer-checked:bg-pulse-accent peer-checked:border-pulse-accent transition-all duration-200 flex items-center justify-center">
                                    {copilotAccepted && (
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <span className="text-sm font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                                Accepter CO-PILOTE
                            </span>
                        </label>
                    </div>

                    {/* CTA */}
                    <button
                        type="button"
                        className="w-full mt-2 py-4 rounded-xl bg-pulse-accent text-white font-bold text-sm uppercase tracking-widest shadow-lg shadow-pulse-accent/30 hover:bg-pulse-accent-dark hover:shadow-pulse-accent/50 active:scale-[0.98] transform transition-all duration-200"
                    >
                        Valider inscription
                    </button>
                </div>
            </div>
        </section>
    )
}
