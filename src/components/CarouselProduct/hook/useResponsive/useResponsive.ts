import { useState, useEffect } from 'react'

export const useResponsive = () => {
    const [slidesPerView, setSlidesPerView] = useState<number>(7)

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth
            if (screenWidth >= 1450) setSlidesPerView(8)
            if (screenWidth >= 1032 && screenWidth < 1450) setSlidesPerView(5)
            if (screenWidth >= 840 && screenWidth < 1032) setSlidesPerView(4)
            if (screenWidth >= 631 && screenWidth < 840) setSlidesPerView(3)
            if (screenWidth < 631) setSlidesPerView(2)
            if (screenWidth <= 432) setSlidesPerView(1)
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return { slidesPerView }
}
