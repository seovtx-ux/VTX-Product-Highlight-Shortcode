export interface Product {
  id: string;
  name: string;
  images: string[];
  price: number;
  regularPrice?: number;
  inStock: boolean;
  status: 'publish' | 'draft' | 'trash';
  shortDescription: string[];
}

export const mockProducts: Record<string, Product> = {
  '123': {
    id: '123',
    name: 'Tủ Rack 6U D400 Maxtel Treo Tường – MTWR-6U400 (W/B)',
    images: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=600&auto=format&fit=crop', // placeholder server rack 1
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop', // placeholder server rack 2
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop', // placeholder equipment
    ],
    price: 1250000,
    regularPrice: 1500000,
    inStock: true,
    status: 'publish',
    shortDescription: [
      'Thép tấm SPCC 1.5mm cứng cáp, chịu lực 60kg.',
      'Bao gồm trọn bộ tản nhiệt (quạt nóc + đồng hồ LCD báo nhiệt độ).',
      'Chuyên dụng cho thi công hệ thống mạng văn phòng, viễn thông và camera quan sát.',
      'Sơn tĩnh điện chống rỉ sét, thiết kế dạng lưới thông thoáng.',
      'Dễ dàng lắp đặt và tích hợp thiết bị mạng nhờ thiết kế cửa mở linh hoạt.',
    ],
  },
  '124': {
    id: '124',
    name: 'Cáp quang luồn cống Singlemode 4FO (Sản phẩm hết hàng)',
    images: [
      'https://images.unsplash.com/photo-1498084393753-b411b2d26f58?q=80&w=600&auto=format&fit=crop',
    ],
    price: 4500,
    inStock: false,
    status: 'publish',
    shortDescription: [
      'Chất liệu nhựa PVC chống cháỵ, chống thấm nước.',
      'Phù hợp luồn cống ngầm, treo cột điện.',
      'Sợi quang tiêu chuẩn G.652D.',
    ],
  },
  '125': {
    id: '125',
    name: 'Sản phẩm bản nháp (Sẽ không hiển thị)',
    images: [],
    price: 0,
    inStock: true,
    status: 'draft',
    shortDescription: [],
  },
};
