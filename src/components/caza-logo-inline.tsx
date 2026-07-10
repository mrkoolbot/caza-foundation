import Image from "next/image"

export function CazaLogo({ light = false, height = 36 }: { light?: boolean; height?: number }) {
  // light=true → white version (for dark hero/transparent navbar)
  // light=false → original brown version (for scrolled/white navbar)
  const src = light ? "/caza-logo-white.png" : "/caza-logo.png"
  const aspectRatio = 6000 / 3375 // original dimensions
  return (
    <Image
      src={src}
      alt="CAZA Foundation"
      width={Math.round(height * aspectRatio)}
      height={height}
      style={{
        height,
        width: "auto",
        objectFit: "contain",
      }}
      priority
    />
  )
}
