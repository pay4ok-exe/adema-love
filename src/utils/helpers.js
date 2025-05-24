export const formatDate = (dateString) => {
  const date = new Date(dateString)
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }
  return date.toLocaleDateString('kk-KZ', options)
}

export const getTimeAgo = (dateString) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now - date)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 0) return "Бүгін"
  if (diffDays === 1) return "Кеше"
  if (diffDays < 7) return `${diffDays} күн бұрын`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} апта бұрын`
  return `${Math.floor(diffDays / 30)} ай бұрын`
}

export const shuffleArray = (array) => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}