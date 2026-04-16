'use client';

import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { legalContent } from '@/lib/locales/legal';

export default function PrivacyPage() {
    const { language } = useLanguage();
    const content = legalContent[language].privacy;

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-thai-subtle py-24">
                <div className="container-custom max-w-4xl">
                    <div className="bg-white rounded-2xl p-8 md:p-12 shadow-soft">
                        <h1 className="font-display text-display-sm md:text-display-md text-dark-900 mb-8">
                            {content.title}
                        </h1>

                        <div className="prose prose-lg max-w-none text-neutral-700">
                            <p className="text-body-lg text-neutral-600 mb-8">
                                {content.intro}
                            </p>

                            {content.sections.map((section, index) => (
                                <div key={index}>
                                    <h2 className="text-2xl font-bold text-dark-900 mt-8 mb-4">{section.title}</h2>
                                    {section.content && (
                                        <p className="mb-6">{section.content}</p>
                                    )}
                                    {section.items && (
                                        <ul className="list-disc pl-6 space-y-2 mb-6">
                                            {section.items.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}

                            <div className="bg-neutral-50 rounded-xl p-6">
                                <p><strong>{content.contactBox.name}</strong></p>
                                <p>{content.contactBox.phone}</p>
                                <p>{content.contactBox.line}</p>
                                <p>{content.contactBox.hours}</p>
                            </div>

                            <p className="text-sm text-neutral-500 mt-8">
                                {content.lastUpdated}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

