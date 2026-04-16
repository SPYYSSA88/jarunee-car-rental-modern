import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import Link from 'next/link';
import {
    Calendar,
    Clock,
    ArrowLeft,
    Share2,
    Facebook,
    MessageCircle,
    ChevronRight
} from 'lucide-react';
import { blogArticles, blogCategories, getLatestArticles } from '@/lib/constants/blog';

interface BlogDetailPageProps {
    params: Promise<{ slug: string }>;
}

// Generate static params for all blog articles
export async function generateStaticParams() {
    return blogArticles.map((article) => ({
        slug: article.slug,
    }));
}

// Generate metadata for each article
export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = blogArticles.find((a) => a.slug === slug);

    if (!article) {
        return {
            title: 'ไม่พบบทความ',
        };
    }

    return {
        title: article.title,
        description: article.excerpt,
        keywords: [article.category, 'เช่ารถเชียงใหม่', 'Jarunee Car Rental', article.title],
        openGraph: {
            title: article.title,
            description: article.excerpt,
            type: 'article',
            publishedTime: article.publishedAt,
            authors: [article.author],
        },
    };
}

const categoryColors: Record<string, string> = {
    news: 'bg-blue-100 text-blue-700',
    tips: 'bg-amber-100 text-amber-700',
    promotion: 'bg-green-100 text-green-700',
    travel: 'bg-purple-100 text-purple-700',
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { slug } = await params;
    const article = blogArticles.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    const relatedArticles = getLatestArticles(3).filter(a => a.id !== article.id).slice(0, 2);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    const shareUrl = `https://jaruneecarrental.com/blog/${article.slug}`;

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-thai-subtle">
                {/* Breadcrumb */}
                <div className="bg-white border-b border-neutral-100">
                    <div className="container-custom py-4">
                        <nav className="flex items-center gap-2 text-body-sm text-neutral-500">
                            <Link href="/" className="hover:text-primary-500 transition-colors">
                                หน้าแรก
                            </Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link href="/blog" className="hover:text-primary-500 transition-colors">
                                บล็อก
                            </Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-dark-900 font-medium truncate max-w-[200px]">
                                {article.title}
                            </span>
                        </nav>
                    </div>
                </div>

                {/* Article Header */}
                <section className="py-12 md:py-16">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto">
                            {/* Back Link */}
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-primary-500 font-medium mb-6 hover:gap-3 transition-all"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                กลับไปหน้าบล็อก
                            </Link>

                            {/* Category & Meta */}
                            <div className="flex flex-wrap items-center gap-4 mb-6">
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[article.category]}`}>
                                    {blogCategories.find(c => c.value === article.category)?.label}
                                </span>
                                <span className="text-body-sm text-neutral-500 flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    {formatDate(article.publishedAt)}
                                </span>
                                <span className="text-body-sm text-neutral-500 flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {article.readTime} นาที
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="font-display text-heading-xl md:text-display-sm text-dark-900 mb-6">
                                {article.title}
                            </h1>

                            {/* Excerpt */}
                            <p className="text-body-lg text-neutral-600 mb-8 leading-relaxed">
                                {article.excerpt}
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 pb-8 border-b border-neutral-200">
                                <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center text-white font-semibold">
                                    JC
                                </div>
                                <div>
                                    <div className="font-medium text-dark-900">{article.author}</div>
                                    <div className="text-body-sm text-neutral-500">Jarunee Car Rental</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="pb-16">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto">
                            <article className="prose prose-lg prose-primary max-w-none">
                                {/* Simple markdown-like rendering */}
                                <div className="space-y-4">
                                    {article.content.split('\n').map((line, index) => {
                                        const trimmedLine = line.trim();

                                        if (!trimmedLine) return null;

                                        // H1
                                        if (trimmedLine.startsWith('# ')) {
                                            return (
                                                <h2 key={index} className="font-display text-heading-lg text-dark-900 mt-8 mb-4">
                                                    {trimmedLine.replace('# ', '')}
                                                </h2>
                                            );
                                        }

                                        // H2
                                        if (trimmedLine.startsWith('## ')) {
                                            return (
                                                <h3 key={index} className="font-display text-heading-md text-dark-900 mt-6 mb-3">
                                                    {trimmedLine.replace('## ', '')}
                                                </h3>
                                            );
                                        }

                                        // H3
                                        if (trimmedLine.startsWith('### ')) {
                                            return (
                                                <h4 key={index} className="font-display text-heading-sm text-dark-900 mt-4 mb-2">
                                                    {trimmedLine.replace('### ', '')}
                                                </h4>
                                            );
                                        }

                                        // List item
                                        if (trimmedLine.startsWith('- ')) {
                                            return (
                                                <div key={index} className="flex items-start gap-2 ml-4">
                                                    <span className="text-primary-500 mt-1.5">•</span>
                                                    <span className="text-body-md text-neutral-700">
                                                        {trimmedLine.replace('- ', '')}
                                                    </span>
                                                </div>
                                            );
                                        }

                                        // Regular paragraph
                                        return (
                                            <p key={index} className="text-body-md text-neutral-700 leading-relaxed">
                                                {trimmedLine}
                                            </p>
                                        );
                                    })}
                                </div>
                            </article>

                            {/* Share Section */}
                            <div className="mt-12 pt-8 border-t border-neutral-200">
                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <span className="font-medium text-dark-900 flex items-center gap-2">
                                        <Share2 className="w-5 h-5" />
                                        แชร์บทความนี้
                                    </span>
                                    <div className="flex items-center gap-3">
                                        <a
                                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                                        >
                                            <Facebook className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={`https://line.me/R/share?text=${encodeURIComponent(article.title + ' ' + shareUrl)}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors"
                                        >
                                            <MessageCircle className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                    <section className="py-16 bg-white">
                        <div className="container-custom">
                            <div className="max-w-3xl mx-auto">
                                <h2 className="font-display text-heading-lg text-dark-900 mb-8">
                                    บทความอื่นที่น่าสนใจ
                                </h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {relatedArticles.map((related) => (
                                        <Link
                                            key={related.id}
                                            href={`/blog/${related.slug}`}
                                            className="glass rounded-xl p-5 hover:shadow-premium transition-all duration-300 group"
                                        >
                                            <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium mb-3 ${categoryColors[related.category]}`}>
                                                {blogCategories.find(c => c.value === related.category)?.label}
                                            </span>
                                            <h3 className="font-display text-heading-sm text-dark-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                                                {related.title}
                                            </h3>
                                            <p className="text-body-sm text-neutral-600 line-clamp-2">
                                                {related.excerpt}
                                            </p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA Section */}
                <section className="py-16">
                    <div className="container-custom">
                        <div className="max-w-3xl mx-auto glass rounded-2xl p-8 text-center bg-gradient-to-r from-primary-50 to-accent-yellow/10">
                            <h2 className="font-display text-heading-lg text-dark-900 mb-4">
                                พร้อมออกเดินทางแล้วหรือยัง?
                            </h2>
                            <p className="text-body-md text-neutral-600 mb-6">
                                เลือกรถที่เหมาะกับคุณและเริ่มต้นการเดินทางในเชียงใหม่
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link
                                    href="/cars"
                                    className="inline-flex items-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-600 transition-colors"
                                >
                                    ดูรถทั้งหมด
                                </Link>
                                <a
                                    href="tel:089-437-6117"
                                    className="inline-flex items-center gap-2 border-2 border-primary-500 text-primary-600 px-6 py-3 rounded-xl font-medium hover:bg-primary-50 transition-colors"
                                >
                                    โทร 089-437-6117
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
