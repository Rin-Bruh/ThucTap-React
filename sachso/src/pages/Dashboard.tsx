import React, { useState } from 'react';
import { Eye, EyeOff, X, BookOpen, Users, BarChart3, CheckCircle } from 'lucide-react';

// Types
interface User {
  access_token: string;
  refresh_token: string;
}

const Dashboard: React.FC<{ user: User; onLogout: () => void }> = ({ user, onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Sách Số Dashboard</span>
            </div>
            <button
              onClick={onLogout}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <h2 className="text-2xl font-bold text-gray-900">Đăng nhập thành công!</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Chào mừng bạn đến với hệ thống Sách Số. Bạn đã đăng nhập thành công.
          </p>
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold mb-2">Thông tin đăng nhập:</h3>
            <p className="text-sm text-gray-600">
              Access Token: {user.access_token.substring(0, 50)}...
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Sách của tôi</h3>
                <p className="text-gray-600">12 cuốn sách</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Lớp học</h3>
                <p className="text-gray-600">3 lớp đang tham gia</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Tiến độ</h3>
                <p className="text-gray-600">78% hoàn thành</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
