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
      if (lower.includes('package') || lower.includes('combo')) {
        results.packages = [
          { flight: mockData.flights?.[0], hotel: mockData.hotels?.[0], totalPrice: 1200, stayDuration: 3 }
        ];
      } else if (lower.includes('flight') || lower.includes('طيران')) {
        results.flights = mockData.flights || [];
      } else if (lower.includes('hotel') || lower.includes('فندق')) {
        results.hotels = mockData.hotels || [];
      }
      onSearch(results);
    }

    try {
      const payload: any = {
        model: "1", // DeepSeek V3.2
        message: userText
      };
      
      if (conversationId) {
        payload.conversation_id = conversationId;
      }

      const response = await fetch("https://zecora0.serv00.net/deepseek.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('API Error');
      }
      
      const data = await response.json();
      
      if (data.success) {
        setConversationId(data.conversation_id);
        // Replace <br> or markdown with proper newlines if needed, but we can just use the text.
        // If data.html exists, one could render it, but for safety we use data.response.
        setMessages(prev => [...prev, { id: Date.now(), text: data.response, sender: 'ai' }]);
      } else {
        throw new Error("Failed to get response");
      }
    } catch (error: any) {
      console.error("AI Fetch Error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        text: `Error connecting to DeepSeek AI. Please try again.`, 
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
