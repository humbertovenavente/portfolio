'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useLanguage } from '@/context/LanguageContext'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const QUICK_QUESTIONS = {
  en: [
    'What kind of certifications does Jose have?',
    'What is Jose\'s professional experience?',
    'What projects has Jose built?',
    'Is Jose available for new opportunities?',
    'What technologies does Jose work with?',
  ],
  es: [
    'Que certificaciones tiene Jose?',
    'Cual es la experiencia profesional de Jose?',
    'Que proyectos ha construido Jose?',
    'Esta Jose disponible para nuevas oportunidades?',
    'Con que tecnologias trabaja Jose?',
  ],
}

export default function ChatBot() {
  const { lang } = useLanguage()
  const [isOpen, setIsOpen] = useState(true)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)
  const [showQuick, setShowQuick] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const sendMessage = async (content: string) => {
    if (!content.trim() || isStreaming) return

    const userMessage: Message = { role: 'user', content: content.trim() }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setShowQuick(false)
    setIsStreaming(true)

    // Add empty assistant message that will be filled by streaming
    const streamingMessages = [...newMessages, { role: 'assistant' as const, content: '' }]
    setMessages(streamingMessages)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, lang }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'API error')
      }

      const reader = res.body?.getReader()
      if (!reader) throw new Error('No stream')

      const decoder = new TextDecoder()
      let accumulated = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value, { stream: true })
        const lines = chunk.split('\n')

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6)
            if (data === '[DONE]') break

            try {
              const parsed = JSON.parse(data)
              if (parsed.error) throw new Error(parsed.error)
              if (parsed.text) {
                accumulated += parsed.text
                setMessages([...newMessages, { role: 'assistant', content: accumulated }])
              }
            } catch (e) {
              if (e instanceof SyntaxError) continue
              throw e
            }
          }
        }
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error'
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: lang === 'es'
            ? `Lo siento, hubo un error: ${errorMsg}`
            : `Sorry, there was an error: ${errorMsg}`,
        },
      ])
    } finally {
      setIsStreaming(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  const questions = QUICK_QUESTIONS[lang as keyof typeof QUICK_QUESTIONS] || QUICK_QUESTIONS.en

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          isOpen
            ? 'bg-gray-700 hover:bg-gray-600 rotate-0'
            : 'bg-primary-600 hover:bg-primary-500 shadow-primary-600/40'
        }`}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-primary-500"></span>
          </span>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden flex flex-col max-h-[70vh]">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-700 to-primary-600 px-4 py-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold text-sm">Jose&apos;s AI Assistant</p>
              <p className="text-primary-200 text-xs">
                {lang === 'es' ? 'Preguntame lo que quieras' : 'Ask me anything'}
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <div className={`w-2 h-2 rounded-full ${isStreaming ? 'bg-yellow-400' : 'bg-green-400'} animate-pulse`}></div>
              <span className="text-primary-200 text-xs">
                {isStreaming ? (lang === 'es' ? 'Escribiendo...' : 'Typing...') : 'Online'}
              </span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px] max-h-[400px] scrollbar-thin">
            {/* Welcome message */}
            {messages.length === 0 && (
              <div className="text-center py-4">
                <p className="text-gray-300 text-sm mb-1 font-medium">
                  {lang === 'es' ? 'Hola! Soy el asistente IA de Jose.' : "Hi! I'm Jose's AI assistant."}
                </p>
                <p className="text-gray-400 text-xs">
                  {lang === 'es'
                    ? 'Preguntame sobre su experiencia, proyectos o habilidades.'
                    : 'Ask me about his experience, projects, or skills.'}
                </p>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-primary-600 text-white rounded-br-sm'
                      : 'bg-gray-800 text-gray-200 border border-gray-700 rounded-bl-sm'
                  }`}
                >
                  {msg.content}
                  {msg.role === 'assistant' && isStreaming && i === messages.length - 1 && (
                    <span className="inline-block w-1.5 h-4 bg-primary-400 ml-0.5 animate-pulse align-middle" />
                  )}
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {showQuick && messages.length === 0 && (
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-1.5">
                {questions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(q)}
                    className="text-xs bg-gray-800 hover:bg-primary-600/30 text-gray-300 hover:text-primary-300 border border-gray-700 hover:border-primary-600/50 px-2.5 py-1.5 rounded-full transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-700">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={lang === 'es' ? 'Escribe tu pregunta...' : 'Type your question...'}
                disabled={isStreaming}
                className="flex-1 bg-gray-800 text-white text-sm px-4 py-2.5 rounded-full border border-gray-700 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500/50 placeholder-gray-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isStreaming || !input.trim()}
                className="bg-primary-600 hover:bg-primary-500 disabled:bg-gray-700 disabled:opacity-50 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors shrink-0"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
