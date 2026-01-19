"use client";

import React from 'react';
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ShoppingBag } from 'lucide-react';


function FullScreenLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative animate-bounce duration-3000">
        <div className="bg-emerald-50 p-8 rounded-[2.5rem] border-2 border-emerald-100 shadow-xl shadow-emerald-100/50">
          <ShoppingBag size={80} className="text-emerald-600 stroke-[1.5]" />
        </div>
        {/* Decorative "Spilled" items (Circles) */}
        <div className="absolute -top-4 -right-2 h-6 w-6 animate-ping bg-emerald-500 rounded-full" />
        <div className="absolute -bottom-2 -left-4 h-6 w-6 animate-ping bg-emerald-900 rounded-full" />
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