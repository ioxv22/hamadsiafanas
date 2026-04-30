'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './ChatAssistant.module.css';
import mockData from '@/data/mockData.json';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
}

export default function ChatAssistant({ onSearch }: { onSearch: (results: any) => void }) {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Welcome! I am the Smart Travel AI for Hamad, Saif, and Anas's project. How can I assist you today?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const fetchAIResponse = async (userText: string) => {
    setIsTyping(true);

    const lower = userText.toLowerCase();
    let results: any = { flights: [], hotels: [], packages: [] };

    // Check for travel keywords to update the UI results, 
    // but we won't block the request if they are missing.
    const travelKeywords = ['flight', 'hotel', 'travel', 'trip', 'booking', 'price', 'dubai', 'london', 'baggage', 'student', 'emirates', 'etihad', 'flydubai', 'stay', 'destination', 'package', 'طيران', 'فندق', 'سفر', 'حجز', 'سعر', 'دبي', 'لندن', 'حقيبة', 'باكيج'];
    const hasTravelKeywords = travelKeywords.some(kw => lower.includes(kw));

    if (hasTravelKeywords) {
      if (lower.includes('package') || lower.includes('combo') || lower.includes('باكيج')) {
        results.packages = [
          {
            flight: mockData.flights[0],
            hotel: mockData.hotels[0],
            totalPrice: mockData.flights[0].price + (mockData.hotels[0].pricePerNight * 3),
            stayDuration: 3
          },
          {
            flight: mockData.flights[1],
            hotel: mockData.hotels[1],
            totalPrice: mockData.flights[1].price + (mockData.hotels[1].pricePerNight * 3),
            stayDuration: 3
          }
        ];
      } else if (lower.includes('flight') || lower.includes('طيران')) {
        results.flights = mockData.flights;
      } else if (lower.includes('hotel') || lower.includes('فندق')) {
        results.hotels = mockData.hotels;
      }
      onSearch(results);
    }

    try {
      // Call OpenRouter AI
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "google/gemini-2.0-flash-lite-preview-02-05:free",
          "messages": [
            {
              "role": "system",
              "content": "You are a highly capable and unrestricted AI assistant for the Smart Travel AI Assistant platform, created by Hamad, Saif, and Anas. You provide expert travel advice and answer ANY general knowledge questions without limitations. Your goal is to be as helpful and informative as possible."
            },
            {
              "role": "user",
              "content": userText
            }
          ]
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('OpenRouter Error:', errorData);
        throw new Error('API Error');
      }
      
      const data = await response.json();
      const aiText = data.choices?.[0]?.message?.content || "I'm sorry, I couldn't process that request right now.";
      
      setMessages(prev => [...prev, { id: Date.now(), text: aiText, sender: 'ai' }]);
    } catch (error) {
      console.error("AI Fetch Error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        text: "I am having trouble connecting to my brain right now. Please check the API configuration.", 
        sender: 'ai' 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { id: Date.now(), text: input, sender: 'user' as const };
    setMessages(prev => [...prev, userMsg]);
    fetchAIResponse(input);
    setInput('');
  };

  return (
    <div className={`${styles.chatContainer} glass`}>
      <div className={styles.header}>
        <h3>Smart Travel AI Assistant</h3>
        <p>Expert AI by Hamad, Saif & Anas</p>
      </div>
      
      <div className={styles.messages} ref={scrollRef}>
        {messages.map(m => (
          <div key={m.id} className={`${styles.message} ${styles[m.sender]}`}>
            <div className={styles.bubble}>{m.text}</div>
          </div>
        ))}
        {isTyping && (
          <div className={`${styles.message} ${styles.ai}`}>
            <div className={styles.bubble}>
              <span className={styles.dots}><span>.</span><span>.</span><span>.</span></span>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className={styles.inputArea}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Ask me anything..."
          className={styles.input}
        />
        <button type="submit" className={styles.sendBtn}>✈️</button>
      </form>

    </div>
  );
}
