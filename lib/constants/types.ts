// ==================================================
// ไฟล์: types.ts
// คำอธิบาย: ไฟล์เก็บ Type/Interface สำหรับข้อมูลรถยนต์
// ==================================================

// Interface สำหรับข้อมูลรถยนต์แต่ละคัน
export interface Vehicle {
    // รหัสรถยนต์ (ไม่ซ้ำกัน)
    id: string;

    // ยี่ห้อรถยนต์ เช่น Toyota, Ford, Isuzu
    brand: string;

    // รุ่นรถยนต์ เช่น Camry, Fortuner
    model: string;

    // ปีที่ผลิต
    year: number;

    // ประเภทรถยนต์: sedan=รถเก๋ง, suv=รถอเนกประสงค์, van=รถตู้, luxury=รถหรู
    type: 'sedan' | 'suv' | 'van' | 'luxury';

    // ประเภทเกียร์: auto=เกียร์ออโต้, manual=เกียร์ธรรมดา
    transmission: 'auto' | 'manual';

    // จำนวนที่นั่ง
    seats: number;

    // ประเภทเชื้อเพลิง: petrol=เบนซิน, diesel=ดีเซล, hybrid=ไฮบริด, lpg=แก๊ส
    fuel: 'petrol' | 'diesel' | 'hybrid' | 'lpg';

    // ราคาเช่าต่อวัน (หน่วย: บาท)
    pricePerDay: number;

    // รูปภาพหลักของรถ (path ไปยังไฟล์รูป)
    image: string;

    // รูปภาพทั้งหมดของรถ (array ของ path)
    images: string[];

    // คุณสมบัติพิเศษของรถ (array ของข้อความ)
    features: string[];

    // คะแนนรีวิว (1-5 ดาว)
    rating: number;

    // จำนวนรีวิวทั้งหมด
    reviews: number;

    // สถานะพร้อมให้บริการ: true=พร้อม, false=ไม่ว่าง
    available: boolean;

    // แรงม้า
    horsepower: number;

    // อัตราสิ้นเปลืองน้ำมัน (ลิตร/100กม.)
    fuelConsumption: string;

    // คำอธิบายรถยนต์
    description: string;

    // รถระดับพรีเมียม: true=พรีเมียม, false=ปกติ
    premium: boolean;
}
