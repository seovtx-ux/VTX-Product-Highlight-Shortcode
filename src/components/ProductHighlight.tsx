import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { mockProducts } from '../data/mockProducts';
import { CheckCircle2, ChevronRight, ShoppingCart, Headset, XCircle } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

interface ProductHighlightProps {
  id: string;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0,
  }).format(amount).replace('₫', 'đ');
};

export const ProductHighlight: React.FC<ProductHighlightProps> = ({ id }) => {
  // Logic xử lý dữ liệu: Kiểm tra tồn tại
  const product = mockProducts[id];

  // Logic: Nếu không tồn tại hoặc không ở trạng thái publish -> trả về null (ẩn đi)
  if (!product || product.status !== 'publish') {
    return null; // Fallback: không làm vỡ bài viết bằng cách trả về content trống
  }

  const isSale = product.regularPrice && product.regularPrice > product.price;

  return (
    <div className="w-full bg-orange-50 border-2 border-[#0056b3] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        
        {/* Cột Trái (Phần Hình ảnh - Image Slider) */}
        <div className="w-full md:w-5/12 p-2 md:p-3 flex flex-col justify-center items-center border-r border-[#0056b3]/10">
          <div className="w-3/4 sm:w-2/3 md:w-full">
            <div className="relative rounded overflow-hidden border border-gray-100 bg-white aspect-square">
            <Swiper
              spaceBetween={10}
              navigation={true}
              pagination={{ clickable: true }}
              modules={[Pagination, Navigation]}
              className="w-full h-full product-swiper"
            >
              {product.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`${product.name} - ảnh ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          </div>
        </div>

        {/* Cột Phải (Phần Nội dung & Chuyển đổi) */}
        <div className="w-full md:w-7/12 p-3 md:p-4 flex flex-col">
          {/* Tiêu đề & Trạng thái */}
          <div className="mb-2">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#0056b3] text-white">
                CHÍNH HÃNG
              </span>
              {product.inStock ? (
                <span className="flex items-center text-[11px] font-medium text-green-600">
                  <CheckCircle2 className="w-3 h-3 mr-0.5" />
                  Còn hàng
                </span>
              ) : ( // Xử lý Fallback Hết Hàng
                <span className="flex items-center text-[11px] font-medium text-[#dc2626]">
                  <XCircle className="w-3 h-3 mr-0.5" />
                  Hết hàng
                </span>
              )}
            </div>
            
            <h3 className="text-lg md:text-xl font-bold text-[#0056b3] leading-tight mb-2 line-clamp-2">
              {product.name}
            </h3>

            {/* Giá bán */}
            <div className="flex items-end gap-2 p-1.5 bg-red-50/60 rounded border border-red-100">
              <span className="text-lg md:text-xl font-bold text-red-600">
                {formatCurrency(product.price)}
              </span>
              {isSale && (
                <span className="text-[11px] md:text-xs text-gray-500 line-through mb-0.5">
                  {formatCurrency(product.regularPrice!)}
                </span>
              )}
            </div>
          </div>

          {/* Đoạn mô tả ngắn (Short Description) */}
          <div className="flex-grow mb-3">
            <ul className="space-y-1">
              {product.shortDescription.map((desc, idx) => (
                <li key={idx} className={`flex items-start text-[13px] md:text-sm text-gray-700 leading-snug ${idx >= 3 ? 'hidden md:flex' : ''}`}>
                  <span className="text-[#dc2626] mr-1.5 mt-0.5 font-bold">•</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nút CTA */}
          <div className="mt-auto grid grid-cols-2 gap-2 pt-2 border-t border-[#0056b3]/10">
            {product.inStock ? (
              <button className="flex items-center justify-center w-full py-1.5 px-2 text-xs md:text-sm bg-[#dc2626] hover:bg-red-700 text-white font-semibold rounded shadow-sm transition-colors">
                <ShoppingCart className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1" />
                ĐẶT MUA NGAY
              </button>
            ) : (
              <button className="flex items-center justify-center w-full py-1.5 px-2 text-xs md:text-sm bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded shadow-sm transition-colors">
                <Headset className="w-3.5 h-3.5 md:w-4 md:h-4 mr-1" />
                LIÊN HỆ BÁO GIÁ
              </button>
            )}
            <button className="flex items-center justify-center w-full py-1.5 px-2 text-xs md:text-sm bg-white border border-[#0056b3] text-[#0056b3] hover:bg-blue-50 font-semibold rounded transition-colors">
              XEM CHI TIẾT
              <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
