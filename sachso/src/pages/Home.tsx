import React, { useState } from 'react';
import { Eye, EyeOff, X, BookOpen, Users, BarChart3, CheckCircle } from 'lucide-react';

// Types
interface User {
  access_token: string;
  refresh_token: string;
}

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            SÁCH GIÁO KHOA TIẾNG ANH
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Áp dụng phương pháp học tập khoa học mới hệ thống học trực tuyến thông minh, 
            ứng dụng công nghệ 4.0 với trí tuệ nhân tạo. Việc áp dụng phương pháp mới này 
            không những mang lại hiệu quả cao, tiết kiệm thời gian mà còn mang đến tính 
            sáng tạo, tự duy độc lập, sự tìm tòi, nghiên cứu của học sinh.
          </p>
        </div>
        
        <div className="flex justify-center items-center mb-16">
          <div className="relative">
            <div className="w-96 h-64 bg-white rounded-lg shadow-xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Học tập tương tác</h3>
                <p className="text-gray-600">Trải nghiệm học tập hiện đại</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-green-500 rounded-full"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-orange-500 rounded-full"></div>
            <div className="absolute -top-8 right-1/4 w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">
            TÍNH NĂNG NỔI BẬT
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Thư viện phong phú</h3>
              <p className="text-gray-600">Hàng ngàn cuốn sách giáo khoa và tài liệu học tập</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Học tập tương tác</h3>
              <p className="text-gray-600">Tương tác với giáo viên và bạn học trực tuyến</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Theo dõi tiến độ</h3>
              <p className="text-gray-600">Báo cáo chi tiết về quá trình học tập</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
