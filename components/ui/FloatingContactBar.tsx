'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// Floating Contact Bar - แสดงปุ่มโทรและ LINE ลอยอยู่ด้านล่างบนมือถือ
export default function FloatingContactBar() {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
            {/* Gradient shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/20 to-transparent pointer-events-none h-8 -top-8" />

            {/* Contact Bar */}
            <div className="bg-white border-t border-neutral-200 shadow-lg px-4 py-3 safe-area-pb">
                <div className="flex gap-3">
                    {/* Phone Button */}
                    <a
                        href="tel:089-437-6117"
                        className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white py-3 px-4 rounded-xl font-semibold hover:bg-red-600 active:scale-95 transition-all"
                    >
                        <Phone className="w-5 h-5" />
                        <span>โทรเลย</span>
                    </a>

                    {/* LINE Button */}
                    <a
                        href="https://line.me/ti/p/~0894376117"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 bg-[#00B900] text-white py-3 px-4 rounded-xl font-semibold hover:bg-[#00A000] active:scale-95 transition-all"
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span>แอดไลน์</span>
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
