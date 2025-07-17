import React, { useState } from 'react';
import { Eye, EyeOff, X, BookOpen, Users, BarChart3, CheckCircle } from 'lucide-react';

interface User {
  access_token: string;
  refresh_token: string;
}

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void; 
  onLogin: (user: User) => void; 
}> = ({ isOpen, onClose, onLogin }) => {
  const [formData, setFormData] = useState<LoginFormData>({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: { email?: string; password?: string } = {};
    
    if (!formData.email) {
      newErrors.email = 'Email là bắt buộc';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }
    
    if (!formData.password) {
      newErrors.password = 'Mật khẩu là bắt buộc';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        const userData = await response.json();
        onLogin(userData);
        onClose();
      } else {
        setErrors({ email: 'Email hoặc mật khẩu không chính xác' });
      }
    } catch (error) {
      setErrors({ email: 'Có lỗi xảy ra, vui lòng thử lại' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: keyof LoginFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full mx-4 flex overflow-hidden">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">ĐĂNG NHẬP</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Nhập email của bạn"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mật khẩu
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10 ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Nhập mật khẩu"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5 text-gray-400" />
                  ) : (
                    <Eye className="w-5 h-5 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>
            
            <div className="text-right">
              <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                Quên mật khẩu?
              </a>
            </div>
            
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Đang đăng nhập...' : 'ĐĂNG NHẬP'}
            </button>
          </div>
        </div>
        
        {/* Right side - Illustration */}
        <div className="hidden md:block w-1/2 bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white">
          <div className="h-full flex flex-col justify-center items-center">
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Chào mừng trở lại!</h3>
              <p className="text-blue-100">
                Đăng nhập để truy cập vào thư viện sách số của bạn
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <span className="text-sm">Hàng ngàn cuốn sách số</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-sm">Cộng đồng học tập</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <span className="text-sm">Theo dõi tiến độ học tập</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
