'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Check, Phone, Clock } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/Badge';

// LINE contact configuration
const CONTACT_INFO = {
    lineUrl: 'https://line.me/ti/p/~0894376117',
    lineId: '@0894376117',
    qrCodePath: '/images/line-qr.png',
};

export default function BookingCard() {
    return (
        <div className="glass rounded-2xl p-6 sticky top-24 shadow-large">
            {/* Price Header */}
            <div className="mb-6">
                <div className="space-y-3">
                    {/* รถเล็ก */}
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-2">
                            <span className="text-lg">🚗</span>
                            <span className="font-medium text-dark-900">รถเล็ก</span>
                        </div>
                        <div className="text-right">
                            <span className="font-display font-bold text-lg text-primary-600">฿10</span>
                            <span className="text-body-sm text-neutral-600"> / กม.</span>
                        </div>
                    </div>
                    {/* รถตู้/รถใหญ่ */}
                    <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                        <div className="flex items-center gap-2">
                            <span className="text-lg">🚐</span>
                            <span className="font-medium text-dark-900">รถตู้ / รถใหญ่</span>
                        </div>
                        <div className="text-right">
                            <span className="font-display font-bold text-lg text-amber-600">฿15</span>
                            <span className="text-body-sm text-neutral-600"> / กม.</span>
                        </div>
                    </div>
                </div>
                <p className="text-caption text-neutral-500 mt-2 text-center">* ราคาเริ่มต้น</p>
                <div className="flex items-center justify-center gap-2 mt-3">
                    <Badge variant="success" size="sm">
                        <Check className="w-3 h-3 mr-1" />
                        พร้อมให้บริการ
                    </Badge>
                </div>
            </div>

            {/* Contact via LINE Section */}
            <div className="space-y-4 mb-6">
                {/* Header */}
                <div className="text-center">
                    <h3 className="font-display font-semibold text-heading-sm text-dark-900 mb-2">
                        สนใจจองรถ? ติดต่อเราเลย!
                    </h3>
                    <p className="text-body-sm text-neutral-600">
                        แอดไลน์สอบถามข้อมูลและจองรถได้ตลอด 24 ชม.
                    </p>
                </div>

                {/* QR Code */}
                <div className="bg-white rounded-xl p-4 border border-neutral-200">
                    <div className="flex flex-col items-center">
                        <p className="text-caption font-medium text-neutral-600 mb-3">
                            สแกน QR Code เพื่อแอดไลน์
                        </p>
                        <motion.div
                            className="relative w-52 h-52 bg-white rounded-lg overflow-hidden shadow-md"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Image
                                src={CONTACT_INFO.qrCodePath}
                                alt="LINE QR Code"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                        <p className="mt-3 text-caption text-neutral-500">
                            LINE ID: <span className="font-semibold text-dark-900">{CONTACT_INFO.lineId}</span>
                        </p>
                    </div>
                </div>

                {/* หรือ */}
                <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-neutral-200"></div>
                    <span className="text-caption text-neutral-500">หรือ</span>
                    <div className="flex-1 h-px bg-neutral-200"></div>
                </div>

                {/* Add LINE Button */}
                <motion.a
                    href={CONTACT_INFO.lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#00B900] text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                    {/* LINE Icon */}
                    <svg
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                    แอดไลน์เลย
                </motion.a>
            </div>

            {/* Features */}
            <div className="border-t border-neutral-200 pt-4">
                <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-3 text-body-sm">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            <MessageCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-neutral-700">ตอบกลับไว รับข้อมูลทันที</span>
                    </div>
                    <div className="flex items-center gap-3 text-body-sm">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <Clock className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-neutral-700">พร้อมให้บริการ 24 ชั่วโมง</span>
                    </div>
                    <div className="flex items-center gap-3 text-body-sm">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                            <Phone className="w-4 h-4 text-purple-600" />
                        </div>
                        <span className="text-neutral-700">โทรสอบถามได้โดยตรง</span>
                    </div>
                </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-4 pt-4 border-t border-neutral-200 flex items-center justify-center gap-4 text-caption text-neutral-500">
                <span className="flex items-center gap-1">
                    <Check className="w-4 h-4 text-green-500" />
                    บริการมืออาชีพ
                </span>
                <span className="flex items-center gap-1">
                    <Check className="w-4 h-4 text-green-500" />
                    ราคายุติธรรม
                </span>
            </div>
        </div>
    );
}
