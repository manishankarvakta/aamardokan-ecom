import React from 'react';
// Import Swiper React components
{  }
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Deals = () => {
  const dealItems = [
    { id: 1, title: "Summer Sale", discount: "50% Off", color: "#f87171" },
    { id: 2, title: "Flash Deal", discount: "70% Off", color: "#60a5fa" },
    { id: 3, title: "Bundle Offer", discount: "Buy 1 Get 1", color: "#fbbf24" },
    { id: 4, title: "Member Exclusive", discount: "Extra 20%", color: "#34d399" },
  ];

  return (
    <section style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '20px' }}>Hot Deals</h2>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        style={{ paddingBottom: '40px' }}
      >
        {dealItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div style={{
              backgroundColor: item.color,
              height: '200px',
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 'bold'
            }}>
              <p>{item.title}</p>
              <span style={{ fontSize: '1rem' }}>{item.discount}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Deals;