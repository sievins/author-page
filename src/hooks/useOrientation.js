export default function useOrientation() {
  const height = window.screen.height * window.devicePixelRatio
  const width = window.screen.width * window.devicePixelRatio

  const orientation = height / width > 1
    ? 'portrait'
    : 'landscape'

  return {
    isLandscape: orientation === 'landscape',
    isPortrait: orientation === 'portrait',
  }
}
