"use client";

import React from 'react';
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ShoppingBag } from 'lucide-react';

// const Loader = ({ fullPage = true }: { fullPage?: boolean }) => {
//   return (
//     <div className={`flex items-center justify-center ${fullPage ? 'fixed inset-0 z-[9999] bg-white' : 'w-full py-20'
//       }`}>
//       <div className="relative animate-bounce flex flex-col items-center">
//         {/* Main Icon Container */}
//         <div className="relative">
//           {/* Static Ghost Background Icon */}
//           <ShoppingBag
//             size={98}
//             className="text-zinc-100"
//             strokeWidth={1.5}
//           />

//           {/* Animated Overlay Icon */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <ShoppingBag
//               size={48}
//               className="text-emerald-600 animate-premium-path"
//               strokeWidth={2}
//               style={{
//                 strokeDasharray: 400,
//                 strokeDashoffset: 400,
//               }}
//             />
//           </div>

//           {/* Subtle Glow Effect */}
//           <div className="absolute inset-0 bg-emerald-400/20 blur-2xl rounded-full scale-150 animate-pulse-slow" />
//         </div>

//         {/* Loading Text */}
//         <div className="mt-6 flex flex-col items-center space-y-2">
//           {/* <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 animate-fade-in-out">
//             Preparing your experience
//           </span> */}
//           {/* Minimal Progress Bar */}
//           <div className="h-[2px] w-12 bg-zinc-100 overflow-hidden rounded-full">
//             <div className="h-full bg-emerald-500 w-1/2 rounded-full animate-loading-bar" />
//           </div>
//         </div>
//       </div>

//       <style jsx global>{`
//         @keyframes premium-path {
//           0% {
//             stroke-dashoffset: 200;
//             opacity: 0;
//           }
//           50% {
//             stroke-dashoffset: 0;
//             opacity: 1;
//           }
//           100% {
//             stroke-dashoffset: -200;
//             opacity: 0;
//           }
//         }
        
//         @keyframes loading-bar {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(200%); }
//         }

//         .animate-premium-path {
//           animation: premium-path 2.5s ease-in-out infinite;
//         }

//         .animate-loading-bar {
//           animation: loading-bar 1.5s infinite ease-in-out;
//         }

//         .animate-pulse-slow {
//           animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//         }

//         @keyframes fade-in-out {
//           0%, 100% { opacity: 0.4; }
//           50% { opacity: 1; }
//         }

//         .animate-fade-in-out {
//           animation: fade-in-out 2s infinite ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// };



function FullScreenLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative animate-bounce duration-3000">
        <div className="bg-emerald-50 p-8 rounded-[2.5rem] border-2 border-emerald-100 shadow-xl shadow-emerald-100/50">
          <ShoppingBag size={80} className="text-emerald-600 stroke-[1.5]" />
        </div>
        {/* Decorative "Spilled" items (Circles) */}
        <div className="absolute -top-4 -right-2 h-6 w-6 bg-amber-400 rounded-full animate-pulse" />
        <div className="absolute -bottom-2 -left-4 h-4 w-4 bg-rose-400 rounded-full" />
      </div>
      
    </div>
  );
}

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>(undefined);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  const persistor = persistStore(storeRef.current);

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={<FullScreenLoader />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}