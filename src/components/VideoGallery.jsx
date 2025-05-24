"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, X } from 'lucide-react'

export default function VideoGallery({ videos }) {
  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {videos.map((video, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedVideo(video)}
            className="relative aspect-video bg-romantic-cream rounded-xl overflow-hidden cursor-pointer shadow-lg"
          >
            <video
              src={video}
              className="w-full h-full object-cover"
              muted
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Play className="text-white" size={32} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelectedVideo(null)}
          >
            <X size={32} />
          </button>
          <video
            src={selectedVideo}
            controls
            autoPlay
            className="max-w-full max-h-full rounded-lg"
          />
        </motion.div>
      )}
    </>
  )
}