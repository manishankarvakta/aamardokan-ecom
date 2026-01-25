"use client";

import React, { useState } from 'react';
import { User, Phone, Mail, Calendar, Users, Edit3, Key, Trash2, MapPin } from 'lucide-react';

const AccountPage: React.FC = () => {
  type Address = { id: string; label: string; name: string; phone: string; address: string; city: string; zip: string };
  const [addresses, setAddresses] = useState<Address[]>([
    { id: 'addr-1', label: 'Home', name: 'Zaheen Rakib', phone: '01700000000', address: '123 Market Street', city: 'Dhaka', zip: '1207' },
    { id: 'addr-2', label: 'Office', name: 'Zaheen Rakib', phone: '01700000001', address: '45 Business Ave', city: 'Dhaka', zip: '1212' },
  ]);

  const deleteAddress = (id: string) => {
    if (window.confirm('Delete this address?')) {
      setAddresses((prev) => prev.filter((a) => a.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-zinc-100 p-4 md:p-8 font-sans">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="w-full bg-white rounded-2xl border border-zinc-200 shadow-sm p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-black text-zinc-900">Account Information</h1>
            <button className="inline-flex items-center gap-2 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-50 transition">
              <Edit3 className="h-4 w-4" /> Edit Profile
            </button>
          </div>

          <div className="mt-6 flex flex-col items-center">
            <div className="h-24 w-24 rounded-full bg-zinc-200 flex items-center justify-center border-4 border-white shadow">
              <User className="h-12 w-12 text-zinc-400" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoItem icon={<User size={18} />} label="Full Name" value="Zaheen Rakib" />
            <InfoItem icon={<Mail size={18} />} label="Email" value="rakibislambest@gmail.com" />
            <InfoItem icon={<Phone size={18} />} label="Phone" value="01700000000" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl border border-zinc-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-zinc-900">Address Book</h2>
              <button className="text-sm font-medium text-emerald-700 hover:underline">Add New</button>
            </div>
            <div className="space-y-4">
              {addresses.map((a) => (
                <div key={a.id} className="group flex items-start justify-between rounded-xl border border-zinc-200 bg-white p-4 shadow-sm hover:shadow-md transition">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-zinc-50 flex items-center justify-center text-emerald-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="text-sm text-zinc-700">
                      <p className="font-semibold text-zinc-900">{a.label}</p>
                      <p>{a.name} · {a.phone}</p>
                      <p>{a.address}, {a.city} {a.zip}</p>
                    </div>
                  </div>
                  <button
                    aria-label="Delete address"
                    onClick={() => deleteAddress(a.id)}
                    className="inline-flex items-center gap-2 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-rose-50 hover:border-rose-200 hover:text-rose-600 transition"
                  >
                    <Trash2 className="h-4 w-4" /> Delete
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6">
              <h2 className="text-lg font-semibold text-zinc-900">Security</h2>
              <p className="mt-2 text-sm text-zinc-600">Manage your password and login settings.</p>
              <button className="mt-4 w-full rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">Change Password</button>
            </div>

            <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6">
              <h2 className="text-lg font-bold text-red-600">Danger Zone</h2>
              <div className="mt-3 space-y-3 text-sm text-zinc-700">
                <p>By deleting your account, you will lose access to your orders, wishlist, and other account information.</p>
                <button className="mt-4 w-full rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">Delete Account</button>

              </div>
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