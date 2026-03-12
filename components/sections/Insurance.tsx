'use client'

import { useState } from 'react'
import { Card } from '@/components/Card'
import { ToggleSwitch } from '@/components/ToggleSwitch'
import { SectionNumber } from '@/components/SectionNumber'

export function Insurance() {
    const [isActive, setIsActive] = useState(true)

    return (
        <section id="insurance" className="py-20 sm:py-32 bg-white px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <SectionNumber number={2} label="Mon assurance" />
                <div className="text-center mb-16">
                    <span className="text-pulse-accent font-semibold text-sm uppercase tracking-wide">
                        Contrôle total
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
                        Mon assurance
                    </h2>

                </div>

                <div className="max-w-4xl mx-auto">
                    <Card variant={isActive ? 'active' : 'inactive'} className="space-y-8">
                        {/* Toggle Section */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    {isActive ? 'Assurance active' : 'Assurance en pause'}
                                </h3>
                                <p className="text-gray-600">
                                    {isActive
                                        ? ''
                                        : ''}
                                </p>
                            </div>
                            <div className="flex justify-center sm:justify-end">
                                <ToggleSwitch
                                    defaultChecked={isActive}
                                    onChange={setIsActive}
                                    label=""
                                />
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-gray-200"></div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-center space-x-4">
                                <div className={`w-12 h-12 rounded-SIDRA flex items-center justify-center flex-shrink-0 ${isActive ? 'bg-pulse-accent/20' : 'bg-gray-200'
                                    }`}>
                                    <svg
                                        className={`w-6 h-6 ${isActive ? 'text-pulse-accent' : 'text-gray-500'}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Adaptatif et transparent</h4>

                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className={`w-12 h-12 rounded-SIDRA flex items-center justify-center flex-shrink-0 ${isActive ? 'bg-pulse-accent/20' : 'bg-gray-200'
                                    }`}>
                                    <svg
                                        className={`w-6 h-6 ${isActive ? 'text-pulse-accent' : 'text-gray-500'}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Vous gardez le contrôle</h4>

                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className={`w-12 h-12 rounded-SIDRA flex items-center justify-center flex-shrink-0 ${isActive ? 'bg-pulse-accent/20' : 'bg-gray-200'
                                    }`}>
                                    <svg
                                        className={`w-6 h-6 ${isActive ? 'text-pulse-accent' : 'text-gray-500'}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Tarification juste</h4>

                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className={`w-12 h-12 rounded-SIDRA flex items-center justify-center flex-shrink-0 ${isActive ? 'bg-pulse-accent/20' : 'bg-gray-200'
                                    }`}>
                                    <svg
                                        className={`w-6 h-6 ${isActive ? 'text-pulse-accent' : 'text-gray-500'}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-1">Sécurisé et conforme</h4>

                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
