import React, { useState } from 'react';
import { Eye, EyeOff, X, BookOpen, Users, BarChart3, CheckCircle } from 'lucide-react';

// Types
interface User {
  access_token: string;
  refresh_token: string;
}

interface LoginFormData {
  email: string;
  password: string;
}

// Navbar Component
const Navbar: React.FC<{ onLoginClick: () => void }> = ({ onLoginClick }) => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Sách Số</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Trang chủ</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Phương Nam</a>
            <button 
              onClick={onLoginClick}
              className="text-gray-600 hover:text-gray-800"
            >
              Đăng nhập
            </button>
            <a href="#" className="text-gray-600 hover:text-gray-800">Đăng ký học sinh</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;