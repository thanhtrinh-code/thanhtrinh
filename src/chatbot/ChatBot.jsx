import React, { useEffect, useRef, useState } from 'react'

export default function ChatBot() {
    const [messages, setMessages] = useState([
        {
            message: 'Hello! How can I help you today?',
            role: 'bot'
        },
        {
            message: 'Hi, I am good',
            role: 'user'
        },
        {
            message: 'Hello! How can I help you today?',
            role: 'bot'
        },
        {
            message: 'Hi, I am good',
            role: 'user'
        },

    ]);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [prevConv, setPrevConv] = useState([]);
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
    }
    useEffect(() => {
        scrollToBottom();
    }, [messages]);
  return (
    <div className='fixed sm:top-[14rem] sm:right-[4.5rem] top-0 right-0 w-full h-full sm:w-[24rem] sm:h-[30rem] bg-white z-10 flex flex-col'>
        <div className='flex flex-col h-full overflow-y-auto'>
            {messages.map((msg, index) => (
                <div key={index} className={`flex items-start gap-4 ${msg.role === 'bot'? 'text-gray-500' : 'text-white'}`}>
                    <div className='rounded-full bg-gray-200 px-4 py-2'>
                        {msg.message}
                    </div>
                </div>
            ))}
            <div ref={messagesEndRef} />
        </div>
        <div className='flex items-center justify-center w-full h-16 border border-black'>
            <input 
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder='Type a message...'
                className='w-full px-4 py-2 rounded-full border-none focus:outline-none'
            />
        </div>

    </div>
  )
}
