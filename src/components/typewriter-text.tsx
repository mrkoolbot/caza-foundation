"use client"

import { useState, useEffect } from "react"

interface TypewriterTextProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function TypewriterText({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(pauseTimeout)
    }

    if (!isDeleting && displayText === currentPhrase) {
      setIsPaused(true)
      return
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false)
      setPhraseIndex((prev) => (prev + 1) % phrases.length)
      return
    }

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setDisplayText(currentPhrase.substring(0, displayText.length - 1))
        } else {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1))
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, isPaused, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className="inline-block">
      {displayText}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  )
}
