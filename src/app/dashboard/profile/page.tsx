import React from 'react';
import { User, Phone, Mail, Calendar, Users, Edit3, Key, Trash2 } from 'lucide-react';

const AccountPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-xl font-bold text-gray-800 mb-6">My Account Information</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Section: My Profile Information */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6 relative">
            <div className="flex justify-between items-center border-b pb-4 mb-6">
              <h2 className="text-emerald-600 font-semibold text-lg">My Profile Information</h2>
              <button className="flex items-center text-gray-500 hover:text-emerald-600 transition-colors text-sm">
                <Edit3 className="w-4 h-4 mr-1" />
                Edit Profile
              </button>
            </div>

            <div className="flex flex-col items-center mb-8">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center border-4 border-gray-100 shadow-inner">
                <User className="w-20 h-20 text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-4">
              <InfoItem icon={<User size={18}/>} label="Full Name" value="Zaheen Rakib" />
              <InfoItem icon={<Phone size={18}/>} label="Contact Number" value="N/A" />
              <InfoItem icon={<Mail size={18}/>} label="Email" value="rakibislambest@gmail.com" />
              <InfoItem icon={<Calendar size={18}/>} label="Date of Birth" value="N/A" />
              <InfoItem icon={<Users size={18}/>} label="Gender" value="N/A" />
            </div>
          </div>

          {/* Right Section: Actions */}
          <div className="space-y-6">
            {/* Change Password Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h2 className="text-emerald-800 font-semibold text-lg mb-6">Change My Password</h2>
              <div className="flex flex-col items-center mb-6">
                <div className="flex items-center text-gray-400 mb-1">
                   <Key className="w-4 h-4 mr-1" />
                   <span className="text-xs uppercase font-bold tracking-wider">Password</span>
                </div>
                <p className="text-xl tracking-tighter font-bold text-gray-800">**********</p>
              </div>
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-md transition-colors shadow-sm">
                Change Password
              </button>
            </div>

            {/* Delete Account Card */}
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h2 className="text-emerald-800 font-semibold text-lg mb-6">Delete Your Account</h2>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 rounded-md transition-colors shadow-sm flex items-center justify-center">
                Delete
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Reusable component for the profile data points
interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value }) => (
  <div className="flex flex-col">
    <div className="flex items-center text-gray-500 mb-1">
      <span className="mr-2 text-gray-400">{icon}</span>
      <span className="text-sm font-medium">{label}:</span>
    </div>
    <p className="font-bold text-gray-800 ml-7">{value}</p>
  </div>
);

export default AccountPage;