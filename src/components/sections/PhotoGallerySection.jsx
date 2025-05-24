"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import PhotoGallery from '@/components/PhotoGallery'
import VideoGallery from '@/components/VideoGallery'
import { loveData } from '@/data/content'
import { Camera, Video, ArrowRight } from 'lucide-react'

export default function PhotoGallerySection({ onNext }) {
  const [activeTab, setActiveTab] = useState('photos')

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-romantic-peach/20 to-white py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-special gradient-text mb-4">
            Біздің естеліктер 📸
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-lg">
            <button
              onClick={() => setActiveTab('photos')}
              className={`px-6 py-2 rounded-full flex items-center gap-2 transition-all ${
                activeTab === 'photos'
                  ? 'bg-romantic-rose text-white'
                  : 'text-gray-600'
              }`}
            >
              <Camera size={20} /> Фотолар
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-2 rounded-full flex items-center gap-2 transition-all ${
                activeTab === 'videos'
                  ? 'bg-romantic-rose text-white'
                  : 'text-gray-600'
              }`}
            >
              <Video size={20} /> Видеолар
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {activeTab === 'photos' ? (
            <>
              <PhotoGallery 
                photos={loveData.photos.her} 
                title="Сенің әдемі сүреттерің 💕" 
              />
              <PhotoGallery 
                photos={loveData.photos.together} 
                title="Біздің сүреттеріміз 💑" 
              />
              <PhotoGallery 
                photos={loveData.photos.mine} 
                title="Менің сүреттерім 📷" 
              />
            </>
          ) : (
            <VideoGallery videos={loveData.videos} />
          )}
        </div>

        {/* Next Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="mx-auto mt-12 flex items-center gap-2 bg-gradient-to-r from-romantic-rose to-romantic-pink text-white px-6 py-3 rounded-full font-medium shadow-lg"
        >
          Жалғастыру <ArrowRight size={20} />
        </motion.button>
      </div>
    </motion.section>
  )
}