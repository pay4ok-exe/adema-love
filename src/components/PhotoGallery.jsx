"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/pagination'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function PhotoGallery({ photos, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <h3 className="text-2xl font-romantic text-center mb-6 text-romantic-rose">
        {title}
      </h3>
      
      <div className="max-w-sm mx-auto">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="w-full aspect-square"
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index} className="rounded-2xl overflow-hidden">
              <div className="relative w-full h-full bg-romantic-cream">
                <Image
                  src={photo}
                  alt={`Memory ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  )
}