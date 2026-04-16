// ==================================================
// ไฟล์: luxury.ts
// คำอธิบาย: ข้อมูลรถหรูระดับ VIP
// รวมถึง: Toyota Alphard
// ==================================================

// นำเข้า Interface จากไฟล์ types
import { Vehicle } from './types';

// ข้อมูลรถหรูทั้งหมด
export const luxuryVehicles: Vehicle[] = [
    // --------------------------------------------------
    // Toyota Alphard - รถตู้หรูระดับโลก
    // --------------------------------------------------
    {
        // รหัสรถ
        id: '9',

        // ยี่ห้อ: Toyota
        brand: 'Toyota',

        // รุ่น: Alphard 2.5 HV Premium
        model: 'Alphard 2.5 HV Premium',

        // ปีที่ผลิต
        year: 2024,

        // ประเภท: รถหรู
        type: 'luxury',

        // เกียร์ออโต้
        transmission: 'auto',

        // จำนวนที่นั่ง 7 ที่
        seats: 7,

        // เครื่องยนต์ไฮบริด
        fuel: 'hybrid',

        // ราคา 8,000 บาท/วัน (แพงที่สุด)
        pricePerDay: 8000,

        // รูปภาพหลัก
        image: '/images/vehicles/alphard.png',

        // รูปภาพทั้งหมด
        images: ['/images/vehicles/alphard.png'],

        // คุณสมบัติพิเศษ (ครบทุกอย่าง)
        features: [
            'เบาะ Captain Seat ไฟฟ้า',     // เบาะกัปตันปรับไฟฟ้า
            'Ottoman Leg Rest',            // ที่พักขาปรับได้
            'JBL Premium Audio',           // ลำโพง JBL คุณภาพสูง
            'ม่านไฟฟ้าแถว 2',              // ม่านปรับไฟฟ้า
            'Air Purifier',                // เครื่องฟอกอากาศ
            'Toyota Safety Sense 3.0',     // ความปลอดภัยรุ่นใหม่
            'ประตูสไลด์ไฟฟ้าทั้ง 2 ฝั่ง'    // ประตูไฟฟ้า 2 ฝั่ง
        ],

        // คะแนนรีวิว 5.0 ดาว (เต็ม!)
        rating: 5.0,

        // จำนวนรีวิว 89 คน
        reviews: 89,

        // พร้อมให้บริการ
        available: true,

        // แรงม้า 190
        horsepower: 190,

        // อัตราสิ้นเปลือง (ไฮบริดประหยัด)
        fuelConsumption: '5.8 L/100km',

        // คำอธิบาย
        description: 'รถตู้หรู VIP ระดับโลก เบาะ Captain Seat หนังแท้ นั่งสบายเหมือนเฟิร์สคลาส เครื่องยนต์ไฮบริดเงียบและประหยัด เหมาะกับผู้บริหาร VIP และงานแต่งงาน',

        // รถระดับพรีเมียม
        premium: true,
    },
];
