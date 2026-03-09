import type { ServiceCategory } from '@/times, cart/types';
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'combo',
    label: 'Gói Combo',
    anchor: 'combo',
    imagePosition: 'right',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
    imageAlt: 'Nail combo service at The OM Lounge',
    services: [
      { id: 'c1', name: 'Perfectly Polished', description: 'Làm mới màu sắc (Mani hoặc Pedi) với sơn thường hoặc gel cao cấp', price: 390000, duration: 45 },
      { id: 'c2', name: 'Perfectly Polished', description: 'Combo tay và chân cùng lúc, tiết kiệm thời gian', price: 690000, duration: 90 },
      { id: 'c3', name: 'Perfectly Polished', description: 'Gói VIP bao gồm dưỡng da và massage thư giãn', price: 990000, duration: 120 },
      { id: 'c4', name: 'Perfectly Polished', description: 'Gói đặc biệt dành cho dịp lễ và sự kiện', price: 1200000, duration: 150 },
    ],
  },
  {
    id: 'manicure',
    label: 'Manicure',
    anchor: 'manicure',
    imagePosition: 'left',
    image: 'bannersection3.png',
    imageAlt: 'Manicure service at The OM Lounge',
    services: [
      { id: 'm1', name: 'Perfectly Polished', description: 'Làm mới màu sắc (Mani hoặc Pedi)...', price: 390000, duration: 30 },
      { id: 'm2', name: 'Perfectly Polished', description: 'Làm mới màu sắc (Mani hoặc Pedi)...', price: 390000, duration: 30 },
      { id: 'm3', name: 'Perfectly Polished', description: 'Làm mới màu sắc (Mani hoặc Pedi)...', price: 390000, duration: 30 },
      { id: 'm4', name: 'Perfectly Polished', description: 'Làm mới màu sắc (Mani hoặc Pedi)...', price: 390000, duration: 30 },
      { id: 'm5', name: 'Perfectly Polished', description: 'Làm mới màu sắc (Mani hoặc Pedi)...', price: 390000, duration: 30 },
      { id: 'm6', name: 'Perfectly Polished', description: 'Làm mới màu sắc (Mani hoặc Pedi)...', price: 390000, duration: 30 },
    ],
  },
  {
    id: 'pedicure',
    label: 'Pedicure',
    anchor: 'pedicure',
    imagePosition: 'right',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800&q=80',
    imageAlt: 'Pedicure service at The OM Lounge',
    services: [
      { id: 'p1', name: 'Perfectly Polished', description: 'Làm mới màu sắc (Mani hoặc Pedi)...', price: 390000, duration: 45 },
      { id: 'p2', name: 'Perfectly Polished', description: 'Làm mới màu sắc (Mani hoặc Pedi)...', price: 390000, duration: 45 },
      { id: 'p3', name: 'Perfectly Polished', description: 'Làm mới màu sắc (Mani hoặc Pedi)...', price: 390000, duration: 45 },
      { id: 'p4', name: 'Perfectly Polished', description: 'Làm mới màu sắc (Mani hoặc Pedi)...', price: 390000, duration: 45 },
    ],
  },
  {
    id: 'hieuung',
    label: 'Hiệu Ứng',
    anchor: 'hieuung',
    imagePosition: 'left',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
    imageAlt: 'Nail art effects at The OM Lounge',
    services: [
      { id: 'h1', name: 'Perfectly Polished', description: 'Làm mới màu sắc (Mani hoặc Pedi)...', price: 390000, duration: 20 },
      { id: 'h2', name: 'Perfectly Polished', description: 'Làm mới màu sắc (Mani hoặc Pedi)...', price: 390000, duration: 20 },
      { id: 'h3', name: 'Perfectly Polished', description: 'Làm mới màu sắc (Mani hoặc Pedi)...', price: 390000, duration: 20 },
      { id: 'h4', name: 'Perfectly Polished', description: 'Làm mới màu sắc (Mani hoặc Pedi)...', price: 390000, duration: 20 },
      { id: 'h5', name: 'Perfectly Polished', description: 'Làm mới màu sắc (Mani hoặc Pedi)...', price: 390000, duration: 20 },
      { id: 'h6', name: 'Perfectly Polished', description: 'Làm mới màu sắc (Mani hoặc Pedi)...', price: 390000, duration: 20 },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    anchor: 'drinks',
    imagePosition: 'right',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
    imageAlt: 'Drinks at The OM Lounge',
    services: [
      { id: 'd1', name: 'Latte', description: 'Cà phê sữa đặc trưng, hương thơm nồng nàn', price: 55000 },
      { id: 'd2', name: 'Cappuccino', description: 'Espresso, sữa hấp và bọt sữa mịn', price: 55000 },
      { id: 'd3', name: 'Americano', description: 'Espresso pha loãng với nước nóng', price: 45000 },
      { id: 'd4', name: 'Trà...', description: 'Trà thảo mộc tự nhiên, thư giãn tâm trí', price: 45000 },
      { id: 'd5', name: 'Nước ép', description: 'Nước ép hoa quả tươi theo mùa', price: 65000 },
      { id: 'd6', name: 'Chanh leo', description: 'Chanh leo tươi mát, vị chua ngọt', price: 55000 },
      { id: 'd7', name: 'Đào', description: 'Trà đào cam sả thư giãn', price: 55000 },
      { id: 'd8', name: 'Khế blue', description: 'Blue pea flower & khế tươi', price: 65000 },
      { id: 'd9', name: 'Sữa', description: 'Sữa nóng hoặc lạnh', price: 35000 },
      { id: 'd10', name: 'Nước', description: 'Nước lọc', price: 15000 },
    ],
  },
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Thuỳ Đỗ',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80',
    text: 'Dịch vụ tuyệt vời, nhân viên tận tâm và chuyên nghiệp. Tôi rất hài lòng với kết quả làm nail tại đây.',
    shortText: 'Dịch vụ tuyệt vời, nhân viên tận tâm...',
  },
  {
    id: 2,
    name: 'Thuỳ Đỗ',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80',
    text: 'Mình rất thích không gian ở The OM Lounge. Thiết kế nội thất đẹp, nhạc nền dễ chịu và dịch vụ nail rất tỉ mỉ, chi tiết.',
    shortText: 'Mình rất thích không gian ở The OM Lounge...',
  },
  {
    id: 3,
    name: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&q=80',
    text: 'Visited The OM Lounge 2 weeks ago and already booked again! The atmosphere is so relaxing and the nail technicians are highly skilled.',
    shortText: 'Visited The OM Lounge 2 weeks ago...',
  },
];

export const DATES = [
  { label: 'Thứ 5', sub: '04/09', value: '2024-09-04' },
  { label: 'Thứ 6', sub: '05/09', value: '2024-09-05' },
  { label: 'Thứ 7', sub: '06/09', value: '2024-09-06', active: true },
  { label: 'Chủ Nhật', sub: '07/09', value: '2024-09-07' },
];

export const TIMES = [
  '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00', '12:30',
  '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30',
  '17:00', '17:30', '18:00', '18:30',
];

export const INITIAL_CART = [
  { service: { id: 'sg1', name: 'Sơn gel', description: 'Sơn gel cao cấp bền màu', price: 264000, duration: 10,image:"gelcaocap.jpg" }, effect: undefined, parentId: undefined },
  { service: { id: 'hu1', name: 'Hiệu ứng', description: 'Hiệu ứng: Da beo', price: 88000, duration: 10,image:"dabeo.jpg" }, quantity: 1, effect: 'Da beo', parentId: 'sg1' },
  { service: { id: 'hu2', name: 'Hiệu ứng', description: 'Hiệu ứng: Da beo', price: 88000, duration: 10,image:"dabeo.jpg" }, quantity: 2, effect: 'Da beo', parentId: 'sg1' },
  { service: { id: 'mm1', name: 'Mắt mèo', description: 'Hiệu ứng mắt mèo óng ánh', price: 88000, duration: 10,image:"dabeo.jpg" }, effect: undefined, parentId: undefined },
  { service: { id: 'sn1', name: 'Sơn nhũ', description: 'Sơn nhũ kim loại sang trọng', price: 88000, duration: 10,image:"dabeo.jpg" }, effect: undefined, parentId: undefined },
  { service: { id: 'sg2', name: 'Sơn gel', description: 'Sơn gel bền màu 3 tuần', price: 88000, duration: 10,image:"dabeo.jpg" }, effect: undefined, parentId: undefined },
];