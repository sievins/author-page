import { useState, useLayoutEffect } from 'react'

export default function useWindowSize() {
  const [size, setSize] = useState({
    height: 0,
    width: 0,
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
