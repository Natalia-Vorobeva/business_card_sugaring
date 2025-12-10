export const InstagramIcon = () => (
	<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
	</svg>
)

export const FacebookIcon = () => (
	<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
		<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
	</svg>
)

export const RosePetalLogo = ({ size = 60, animated = true }) => {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Фон */}
        <circle cx="50" cy="50" r="45" className="fill-gradient-to-br from-pink-100 to-rose-100" />
        
        {/* Лепестки розы */}
        <path 
          d="M50,30 Q60,25 65,35 Q70,45 60,55 Q50,65 40,55 Q30,45 35,35 Q40,25 50,30" 
          fill="#f472b6" 
          className={animated ? "animate-petal-1" : ""}
        />
        
        {/* Второй слой лепестков */}
        <path 
          d="M50,35 Q58,32 62,40 Q66,48 58,52 Q50,56 42,52 Q34,48 38,40 Q42,32 50,35" 
          fill="#ec4899" 
          className={animated ? "animate-petal-2" : ""}
        />
        
        {/* Центр розы */}
        <circle cx="50" cy="45" r="8" fill="#be185d" className={animated ? "animate-pulse-gold" : ""} />
        
        {/* Блестки */}
        <circle cx="30" cy="40" r="2" fill="#ffffff" className={animated ? "animate-twinkle" : ""} />
        <circle cx="70" cy="50" r="1.5" fill="#ffffff" className={animated ? "animate-twinkle-delayed" : ""} />
        <circle cx="45" cy="65" r="1" fill="#ffffff" className={animated ? "animate-twinkle-delayed-2" : ""} />
      </svg>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-bold text-sm">R</span>
      </div>
    </div>
  );
}

export const HeartLogo = ({ size = 60, animated = true }) => {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Фон */}
        <circle cx="50" cy="50" r="45" className="fill-gradient-to-br from-pink-200 to-rose-200" />
        
        {/* Сердце */}
        <path 
          d="M50,35 Q60,25 70,35 Q75,45 65,55 Q55,65 50,70 Q45,65 35,55 Q25,45 30,35 Q40,25 50,35" 
          fill="#ec4899" 
          className={animated ? "animate-heartbeat" : ""}
        />
        
        {/* Внутренняя часть сердца */}
        <path 
          d="M50,40 Q58,35 62,40 Q65,45 58,50 Q50,55 42,50 Q35,45 38,40 Q42,35 50,40" 
          fill="#f472b6" 
          className={animated ? "animate-heart-inner" : ""}
        />
        
        {/* Блестки */}
        <path 
          d="M45,35 L47,32 L49,35 L52,36 L49,37 L47,40 L45,37 L42,36 Z" 
          fill="#ffffff" 
          className={animated ? "animate-spin-slow" : ""}
        />
        <path 
          d="M60,45 L62,42 L64,45 L67,46 L64,47 L62,50 L60,47 L57,46 Z" 
          fill="#ffffff" 
          className={animated ? "animate-spin-slow-delayed" : ""}
        />
      </svg>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-bold text-lg">❤</span>
      </div>
    </div>
  );
}

export const MinimalLogo = ({ size = 60, animated = true }) => {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Круг с градиентной обводкой */}
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          stroke="url(#gradient1)" 
          strokeWidth="3" 
          fill="none"
          className={animated ? "animate-spin-slow" : ""}
        />
        
        {/* Второй круг */}
        <circle 
          cx="50" 
          cy="50" 
          r="35" 
          stroke="url(#gradient2)" 
          strokeWidth="2" 
          fill="none"
          className={animated ? "animate-spin-slow-reverse" : ""}
        />
        
        {/* Точка в центре */}
        <circle cx="50" cy="50" r="6" fill="#ec4899" className={animated ? "animate-pulse" : ""} />
        
        {/* Градиенты */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f472b6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-rose-600 font-bold text-lg">S</span>
      </div>
    </div>
  );
}

export const FeatherLogo = ({ size = 60, animated = true }) => {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Фон */}
        <circle cx="50" cy="50" r="45" className="fill-gradient-to-br from-pink-50 to-rose-50" />
        
        {/* Перо */}
        <path 
          d="M35,40 Q45,30 60,35 Q70,40 65,55 Q60,70 45,65 Q30,60 35,40" 
          fill="#fbcfe8" 
          className={animated ? "animate-feather-float" : ""}
        />
        
        {/* Стержень пера */}
        <path 
          d="M50,25 L48,70" 
          stroke="#f472b6" 
          strokeWidth="3" 
          className={animated ? "animate-draw-line" : ""}
        />
        
        {/* Детали пера */}
        <path 
          d="M40,45 L30,40" 
          stroke="#f472b6" 
          strokeWidth="1.5" 
          className={animated ? "animate-feather-detail-1" : ""}
        />
        <path 
          d="M42,50 L32,48" 
          stroke="#f472b6" 
          strokeWidth="1.5" 
          className={animated ? "animate-feather-detail-2" : ""}
        />
        <path 
          d="M44,55 L34,56" 
          stroke="#f472b6" 
          strokeWidth="1.5" 
          className={animated ? "animate-feather-detail-3" : ""}
        />
      </svg>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-rose-500 font-bold text-sm">F</span>
      </div>
    </div>
  );
}

