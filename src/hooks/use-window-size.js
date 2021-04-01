import { useState, useLayoutEffect } from 'react'

export default function useWindowSize() {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })

  useLayoutEffect(() => {
    const handleResize = () => {
      const height = window.innerHeight
      const width = window.innerWidth

      setSize({ height, width })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}
