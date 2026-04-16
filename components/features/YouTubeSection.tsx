'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// ==================================================
// YouTubeSection Component
// คำอธิบาย: แสดงวิดีโอ YouTube แบบ Embed
// ==================================================

// ===== ข้อมูลวิดีโอ YouTube =====
// แก้ไขข้อมูลตรงนี้เพื่อเปลี่ยน Video
const youtubeConfig = {
    // Video ID จาก YouTube URL (หลัง ?v=)
    // ตัวอย่าง: https://www.youtube.com/watch?v=cKjZu5rUXWk -> videoId = 'cKjZu5rUXWk'
    videoId: 'cKjZu5rUXWk',

    // หัวข้อ Section (ภาษาไทย)
    titleTh: 'ดูวิดีโอ',

    // หัวข้อ Highlight (ภาษาไทย)
    titleHighlightTh: 'แนะนำสถานที่ท่องเที่ยว',

    // คำอธิบาย (ภาษาไทย)
    descriptionTh: 'ชมวิดีโอแนะนำสถานที่ท่องเที่ยวในเชียงใหม่',

    // หัวข้อ Section (ภาษาอังกฤษ)
    titleEn: 'Watch Our',

    // หัวข้อ Highlight (ภาษาอังกฤษ)
    titleHighlightEn: 'Video',

    // คำอธิบาย (ภาษาอังกฤษ)
    descriptionEn: 'Watch a video introducing tourist attractions in Chiang Mai.',

    // หัวข้อ Section (ภาษาจีน)
    titleZh: '观看我们的',

    // หัวข้อ Highlight (ภาษาจีน)
    titleHighlightZh: '视频',

    // คำอธิบาย (ภาษาจีน)
    descriptionZh: '观看介绍清迈旅游景点的视频。',
};

export default function YouTubeSection() {
    const { language } = useLanguage();

    // เลือกข้อความตามภาษา
    const getTitle = () => {
        switch (language) {
            case 'en': return youtubeConfig.titleEn;
            case 'cn': return youtubeConfig.titleZh;
            default: return youtubeConfig.titleTh;
        }
    };

    const getTitleHighlight = () => {
        switch (language) {
            case 'en': return youtubeConfig.titleHighlightEn;
            case 'cn': return youtubeConfig.titleHighlightZh;
            default: return youtubeConfig.titleHighlightTh;
        }
    };

    const getDescription = () => {
        switch (language) {
            case 'en': return youtubeConfig.descriptionEn;
            case 'cn': return youtubeConfig.descriptionZh;
            default: return youtubeConfig.descriptionTh;
        }
    };

    const getBadge = () => {
        switch (language) {
            case 'en': return '🎬 Video';
            case 'cn': return '🎬 视频';
            default: return '🎬 วิดีโอ';
        }
    };

    return (
        <section className="py-24 bg-thai-pattern-gradient" id="video">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 bg-red-100 rounded-full text-red-600 font-semibold text-sm mb-4"
                    >
                        {getBadge()}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-display text-display-md md:text-display-lg text-dark-900 mb-4"
                    >
                        {getTitle()} <span className="gradient-text">{getTitleHighlight()}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-body-lg text-neutral-600 max-w-2xl mx-auto"
                    >
                        {getDescription()}
                    </motion.p>
                </div>

                {/* YouTube Video Embed */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-strong bg-dark-900">
                        {/* YouTube Iframe */}
                        <iframe
                            src={`https://www.youtube.com/embed/${youtubeConfig.videoId}?rel=0&modestbranding=1`}
                            title="YouTube video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute top-0 left-0 w-full h-full"
                        />
                    </div>

                    {/* YouTube Icon Badge */}
                    <div className="flex items-center justify-center gap-2 mt-6 text-neutral-500">
                        <Youtube className="w-5 h-5 text-red-500" />
                        <span className="text-sm">YouTube</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
