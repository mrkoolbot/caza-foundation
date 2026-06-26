"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

interface ProgramTileProps {
  title: string
  client: string
  description: string
  href: string
  image?: string
  className?: string
}

export function ProgramTile({ 
  title, 
  client, 
  description, 
  href, 
  image,
  className
}: ProgramTileProps) {
  return (
    <article
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        backgroundColor: "#ffffff",
        overflow: "hidden",
        border: "1px solid #e5e5e5",
        transition: "all 0.5s",
        borderRadius: "0.5rem"
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "0 40px 80px -20px rgba(0,0,0,0.08)";
        el.style.borderColor = "#d0d0d0";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = "none";
        el.style.borderColor = "#e5e5e5";
      }}
      className={className}
    >
      <Link href={href} style={{ display: "flex", flexDirection: "column", height: "100%", textDecoration: "none" }}>
        {/* Image Container */}
        {image && (
          <div style={{
            position: "relative",
            width: "100%",
            height: "250px",
            overflow: "hidden",
            backgroundColor: "#f5f5f5"
          }}>
            <img
              src={image}
              alt={title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "grayscale(1)",
                transition: "all 1s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.filter = "grayscale(0)";
                (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.filter = "grayscale(1)";
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            />
            
            {/* Overlay */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.1), transparent)",
              opacity: 0,
              transition: "opacity 0.7s"
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "0"}
            />
          </div>
        )}
        
        {/* Content */}
        <div style={{
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          position: "relative"
        }}>
          {/* Top Row */}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "1rem"
          }}>
            <span style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "#a3a3a3",
              textTransform: "uppercase"
            }}>
              {client}
            </span>
            <ArrowUpRight style={{
              width: 16,
              height: 16,
              color: "#d0d0d0",
              transition: "color 0.5s",
              marginLeft: "0.5rem",
              flexShrink: 0
            }}
              onMouseEnter={e => (e.currentTarget as SVGElement).style.color = "#813332"}
              onMouseLeave={e => (e.currentTarget as SVGElement).style.color = "#d0d0d0"}
            />
          </div>

          {/* Title */}
          <h3 style={{
            fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
            fontWeight: 700,
            color: "#1a1a1a",
            marginBottom: "1rem",
            lineHeight: 1.1,
            transition: "color 0.5s"
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#813332"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "#1a1a1a"}
          >
            {title}
          </h3>
          
          {/* Description */}
          <p style={{
            fontSize: "0.875rem",
            color: "#737373",
            lineHeight: 1.6,
            marginBottom: "1rem",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            fontWeight: 400
          }}>
            {description}
          </p>

          {/* CTA */}
          <div style={{
            marginTop: "auto"
          }}>
            <span style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 700,
              borderBottom: "2px solid #d0d0d0",
              paddingBottom: "0.25rem",
              transition: "border-color 0.5s",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: "#1a1a1a"
            }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "#813332"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "#d0d0d0"}
            >
              learn more
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
