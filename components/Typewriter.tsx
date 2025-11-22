'use client'

import { useState, useEffect } from 'react'

interface TypewriterProps {
  texts: string[]
  speed?: number
  deleteSpeed?: number
  delayBetweenTexts?: number
  delayAfterDelete?: number
}

export default function Typewriter({
  texts,
  speed = 100,
  deleteSpeed = 50,
  delayBetweenTexts = 2000,
  delayAfterDelete = 500,
}: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const fullText = texts[currentTextIndex]
    let timeout: NodeJS.Timeout

    if (isPaused) {
      // Esperar antes de empezar a borrar
      timeout = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, delayBetweenTexts)
    } else if (isDeleting) {
      // Borrando texto
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length - 1))
        }, deleteSpeed)
      } else {
        // Terminó de borrar, pasar al siguiente texto
        timeout = setTimeout(() => {
          setIsDeleting(false)
          setCurrentTextIndex((prev) => (prev + 1) % texts.length)
        }, delayAfterDelete)
      }
    } else {
      // Escribiendo texto
      if (currentText.length < fullText.length) {
        timeout = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1))
        }, speed)
      } else {
        // Terminó de escribir, pausar antes de borrar
        setIsPaused(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, speed, deleteSpeed, delayBetweenTexts, delayAfterDelete])

  return (
    <span className="inline-block">
      <span className="text-primary-400">{currentText}</span>
      <span className="animate-pulse text-primary-400 ml-1">|</span>
    </span>
  )
}

