"use client"
import { useMessages } from '../../../app/context/MessagesContext';
import Lookup from '../../../app/data/Lookup';
import { ArrowRight, Link } from 'lucide-react';
import { Content } from 'next/font/google';
import React, { useState } from 'react';

function Hero() {
  const [userInput, setUserInput] = useState('');
  const { messages, setMessages } = useMessages();
  
  const OnGenrate = (input) => {
    setMessages({
      role: 'user',
      Content: input
    });
  }

  return (
    <div className='flex flex-col items-center mt-36 xl:mt-52 gap-2'>
      <h2 className='font-bold text-4xl'>{Lookup.HERO_HEADING}</h2>
      <p className='text-gray-400 font-medium'>{Lookup.HERO_DESC}</p>
      <div className='p-5 border rounded-xl max-w-2xl w-full'>
        <div className='flex gap-2'>
          <textarea 
            placeholder={Lookup.INPUT_PLACEHOLDER} 
            value={userInput}
            onChange={(event) => setUserInput(event.target.value)}
            className='outline-none bg-transparent w-full h-32 max-h-56 resize-none'
          />
          {userInput && (
            <ArrowRight
              onClick={() => OnGenrate(userInput)}
              className='bg-blue-500 p-2 h-8 w-8 rounded-md cursor-pointer text-white hover:bg-blue-600' 
            />
          )}
        </div>
        <div className='mt-4 flex items-center gap-2 text-gray-400'>
          <Link className='h-5 w-5' />
          <span>Or paste a GitHub link</span>
        </div>
      </div>
      <div className='flex gap-4 mt-4 flex-wrap justify-center'>
        {Lookup.SUGGSTIONS.map((suggestion, index) => (
          <div key={index} onClick={() => OnGenrate(suggestion)}
            className='px-4 py-2 border rounded-md hover:border-blue-500 cursor-pointer'
          >
            {suggestion}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero;
