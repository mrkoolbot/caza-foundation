import Image from "next/image"

export function CazaLogo({ light = false, height = 36 }: { light?: boolean; height?: number }) {
  // light=true  → original cream/beige logo (for dark hero/transparent navbar)
  // light=false → dark brown version (for scrolled/white navbar)
  const src = light ? "/caza-logo.png" : "/caza-logo-dark.png"
  const aspectRatio = 6000 / 3375 // original canvas dimensions

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
