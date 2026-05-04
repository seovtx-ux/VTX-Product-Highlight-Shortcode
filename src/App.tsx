/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ProductHighlight } from './components/ProductHighlight';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 font-sans">
      <main className="max-w-4xl mx-auto bg-white p-6 md:p-10 shadow-sm auto-rows-max rounded-xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-normal">
          Top tủ mạng / tủ rack đang được săn đón nhất trong dự án mạng LAN 2026
        </h1>
        
        <div className="prose max-w-none text-gray-700 space-y-5">
          <p>
            Chào các bạn từ team MKT Viễn Thông Xanh. Trong quá trình xây dựng hệ thống cáp mạng doanh nghiệp, ngoài việc chọn lựa thiết bị Switch, Router hay các giải pháp lưu trữ, chúng ta không thể bỏ qua tầm quan trọng của <strong className="text-blue-600 cursor-pointer hover:underline">Tủ mạng (Tủ Rack)</strong>. 
          </p>
          <p>
            Dưới đây, mình xin giới thiệu một mẫu thiết bị trọng điểm đang có tỷ lệ chuyển đổi rất cao mà các sếp cực kỳ ưng ý.
          </p>

          {/* Mô phỏng việc cắm shortcode vào giữa Content: [vtx_single_product id="123"] */}
          <div className="my-10 relative">
            <ProductHighlight id="123" />
          </div>

          {/* Mô phỏng shortcode sản phẩm bị xóa/nháp [vtx_single_product id="125"] - Sẽ không render gì cả */}
          <div className="my-10 relative">
            <ProductHighlight id="125" />
          </div>

          <p>
            Như vậy, với giải pháp "Box Highlight" thế hệ mới, trải nghiệm đọc của khách hàng không bị gián đoạn, họ có thể trực tiếp vọc vạch tính năng, hình ảnh ngay tại đây, nâng cao đáng kể tỷ lệ CTR (Click Through Rate) cho team MKT. 
          </p>

        </div>
      </main>
    </div>
  );
}
