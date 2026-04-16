// ==================================================
// ไฟล์: vehicles.ts
// คำอธิบาย: ไฟล์หลักสำหรับรวมข้อมูลรถทุกประเภท
// 
// โครงสร้างไฟล์:
// - types.ts    = Interface/Type definitions
// - sedans.ts   = ข้อมูลรถเก๋ง (แท็กซี่, Camry, Altis)
// - suvs.ts     = ข้อมูลรถ SUV (Fortuner, Everest, MU-X)
// - vans.ts     = ข้อมูลรถตู้ (VIP Van, H-1)
// - luxury.ts   = ข้อมูลรถหรู (Alphard)
// ==================================================

// ===== นำเข้า Type =====
// นำเข้า Interface Vehicle เพื่อ re-export
export type { Vehicle } from './types';

// ===== นำเข้าข้อมูลแต่ละประเภท =====
// นำเข้าข้อมูลรถเก๋ง
import { sedans } from './sedans';

// นำเข้าข้อมูลรถ SUV
import { suvs } from './suvs';

// นำเข้าข้อมูลรถตู้
import { vans } from './vans';

// นำเข้าข้อมูลรถหรู
import { luxuryVehicles } from './luxury';

// ===== นำเข้า Type สำหรับใช้ในไฟล์นี้ =====
import type { Vehicle } from './types';

// ==================================================
// รวมข้อมูลรถทั้งหมด
// ==================================================
// ใช้ spread operator (...) เพื่อรวม array ทั้งหมดเข้าด้วยกัน
export const vehicles: Vehicle[] = [
    ...sedans,          // รถเก๋ง 3 คัน (id: 1-3)
    ...suvs,            // รถ SUV 3 คัน (id: 4-6)
    ...vans,            // รถตู้ 2 คัน (id: 7-8)
    ...luxuryVehicles,  // รถหรู 1 คัน (id: 9)
];

// ==================================================
// Export ข้อมูลแยกตามประเภท (สำหรับใช้แยก)
// ==================================================
// Export รถเก๋งทั้งหมด
export { sedans };

// Export รถ SUV ทั้งหมด
export { suvs };

// Export รถตู้ทั้งหมด
export { vans };

// Export รถหรูทั้งหมด
export { luxuryVehicles };

// ==================================================
// รถที่แสดงหน้าแรก (Featured Vehicles)
// ==================================================
// ดึงรถ 8 คันแรกมาแสดงหน้าแรก
export const featuredVehicles = vehicles.slice(0, 8);

// ==================================================
// รถระดับพรีเมียม
// ==================================================
// กรองเฉพาะรถที่มี premium = true
export const premiumVehicles = vehicles.filter(v => v.premium);

// ==================================================
// Helper Functions สำหรับกรองข้อมูล
// ==================================================

/**
 * ค้นหารถจาก ID
 * @param id - รหัสรถที่ต้องการค้นหา
 * @returns ข้อมูลรถ หรือ undefined ถ้าไม่เจอ
 */
export const getVehicleById = (id: string): Vehicle | undefined => {
    return vehicles.find(v => v.id === id);
};

/**
 * กรองรถตามประเภท
 * @param type - ประเภทรถ (sedan, suv, van, luxury)
 * @returns รถที่ตรงกับประเภท
 */
export const getVehiclesByType = (type: Vehicle['type']): Vehicle[] => {
    return vehicles.filter(v => v.type === type);
};

/**
 * กรองรถตามช่วงราคา
 * @param minPrice - ราคาต่ำสุด
 * @param maxPrice - ราคาสูงสุด
 * @returns รถที่อยู่ในช่วงราคา
 */
export const getVehiclesByPriceRange = (minPrice: number, maxPrice: number): Vehicle[] => {
    return vehicles.filter(v =>
        v.pricePerDay >= minPrice && v.pricePerDay <= maxPrice
    );
};

/**
 * กรองรถที่พร้อมให้บริการ
 * @returns รถที่มี available = true
 */
export const getAvailableVehicles = (): Vehicle[] => {
    return vehicles.filter(v => v.available);
};
