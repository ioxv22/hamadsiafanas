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

  const [conversationId, setConversationId] = useState<string | null>(null);

  const fetchAIResponse = async (userText: string) => {
    setIsTyping(true);

    const lower = userText.toLowerCase();
    let results: any = { flights: [], hotels: [], packages: [] };

    // Check for travel keywords to update the UI results
    const travelKeywords = ['flight', 'hotel', 'travel', 'trip', 'booking', 'price', 'dubai', 'london', 'baggage', 'student', 'stay', 'destination', 'package', 'طيران', 'فندق', 'سفر', 'حجز'];
    const hasTravelKeywords = travelKeywords.some(kw => lower.includes(kw));

    if (hasTravelKeywords) {
      // Dynamic extraction of destination (English & Arabic, supports up to 3 words like 'Saudi Arabia')
      const destinationMatch = lower.match(/(?:to|in|visit|إلى|الي|في|لـ|نحو)\s+([a-zA-Z\u0600-\u06FF]+(?:\s+[a-zA-Z\u0600-\u06FF]+){0,2})/);
      let destinationCode = 'Anywhere';
      
      if (destinationMatch && destinationMatch[1]) {
        const dest = destinationMatch[1].trim();
        destinationCode = dest.length <= 3 && !/[\u0600-\u06FF]/.test(dest) ? dest.toUpperCase() : dest.charAt(0).toUpperCase() + dest.slice(1);
      } else {
        // Fallback: take the last word if it's not a generic keyword
        const words = lower.replace(/[.?!,]/g, '').split(' ');
        const lastWord = words[words.length - 1];
        if (lastWord && lastWord.length > 2 && !travelKeywords.includes(lastWord)) {
          destinationCode = lastWord.charAt(0).toUpperCase() + lastWord.slice(1);
        }
      }

      const flightsData = (mockData.flights || []).map((f: any) => ({
        ...f,
        destination: destinationCode
      }));
      
      const hotelsData = (mockData.hotels || []).map((h: any) => ({
        ...h,
        name: `Luxury Hotel ${destinationCode}`
      }));

      if (lower.includes('package') || lower.includes('combo')) {
        results.packages = [
          { flight: flightsData[0], hotel: hotelsData[0], totalPrice: 1200, stayDuration: 3 }
        ];
      } else if (lower.includes('flight') || lower.includes('طيران') || lower.includes('fly')) {
        results.flights = flightsData;
      } else if (lower.includes('hotel') || lower.includes('فندق') || lower.includes('stay')) {
        results.hotels = hotelsData;
      } else {
        // Default to both if just general travel
        results.flights = flightsData;
        results.hotels = hotelsData;
      }
      onSearch(results);
    }

    try {
      const response = await fetch("https://models.inference.ai.azure.com/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN || ''}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "gpt-4o",
          "messages": [
            {
              "role": "system",
              "content": "You are a professional AI Travel Expert for 'Smart Travel' by Hamad, Saif, and Anas. Provide realistic travel costs and tips. Keep your tone professional, helpful, and high-end."
            },
            {
              "role": "user",
              "content": userText
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error('API Error');
      }
      
      const data = await response.json();
      const aiText = data.choices[0].message.content;
      
      setMessages(prev => [...prev, { id: Date.now(), text: aiText, sender: 'ai' }]);
    } catch (error: any) {
      console.error("AI Fetch Error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        text: `Error connecting to AI. Please try again or check your API token.`, 
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
