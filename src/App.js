import ReactDOM from 'react-dom'
import React from 'react'
import {useState} from 'react'
import './App.css';

const QuoteBox=({quotesArray,index,setIndex})=>{
  return(
    <div id="quote-box">
    <q id="text">{quotesArray[index].quote}</q>
    <p id="author">-{quotesArray[index].author}</p>
    <button id="new-quote" style={{borderRadius:5}} onClick={()=>setIndex(Math.floor(Math.random()*quotesArray.length))}>New Quote</button>
    <a id="tweet-quote" href='https://twitter.com/intent/tweet' target='_blank'><button style={{borderRadius:5}}>Tweet Quote</button></a>
    </div>
  )
  
}

const Credit=({Name})=>{
return <p style={{textAlign:'center',fontFamily:'cursive',color:'ThreeDDarkShadow'}}>By {Name}</p>
}

const App=()=> {
  
  const quotesArray = [
    {
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde"
    },
    {
      quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
      author: "Albert Einstein"
    },
    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "It is during our darkest moments that we must focus to see the light.",
      author: "Aristotle"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      author: "Albert Einstein"
    },
    {
      quote: "The only thing we have to fear is fear itself.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky"
    },
    {
      quote: "If you can't explain it simply, you don't understand it well enough.",
      author: "Albert Einstein"
    },
    {
      quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "The only true wisdom is in knowing you know nothing.",
      author: "Socrates"
    },
    {
      quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr."
    },
    {
      quote: "The mind is everything. What you think you become.",
      author: "Buddha"
    },
    {
      quote: "You must be the change you wish to see in the world.",
      author: "Mahatma Gandhi"
    },
    {
      quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
      author: "Martin Luther King Jr."
    },
    {
      quote: "Happiness is not something ready-made. It comes from your own actions.",
      author: "Dalai Lama"
    },
    {
      quote: "The best revenge is massive success.",
      author: "Frank Sinatra"
    },
    {
      quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
      author: "Aristotle"
    },
    {
      quote: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    },
    {
      quote: "In the midst of winter, I found there was, within me, an invincible summer.",
      author: "Albert Camus"
    },
    {
      quote: "You can't use up creativity. The more you use, the more you have.",
      author: "Maya Angelou"
    },
    {
      quote: "The only way to have a friend is to be one.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "If you want to lift yourself up, lift up someone else.",
      author: "Booker T. Washington"
    },
    {
      quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
      author: "Jordan Belfort"
    },
    {
      quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
      author: "David Brinkley"
    },
    {
      quote: "The only difference between ordinary and extraordinary is that little extra.",
      author: "Jimmy Johnson"
    },
    {
      quote: "You can never cross the ocean until you have the courage to lose sight of the shore.",
      author: "Christopher Columbus"
    },
    {
      quote: "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill"
    },
    {
      quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb"
    },
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      quote: "It always seems impossible until it is done.",
      author: "Nelson Mandela"
    },
    {
      quote: "The only place where success comes before work is in the dictionary.",
      author: "Vidal Sassoon"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      author: "Thomas A. Edison"
    },
    {
      quote: "Challenges are what make life interesting, and overcoming them is what makes life meaningful.",
      author: "Joshua J. Marine"
    },
    {
      quote: "I attribute my success to this: I never gave or took any excuse.",
      author: "Florence Nightingale"
    },
    {
      quote: "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "Opportunities don't happen. You create them.",
      author: "Chris Grosser"
    },
    {
      quote: "Do what you can, with what you have, where you are.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Don't be afraid to give up the good to go for the great.",
      author: "John D. Rockefeller"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "Happiness is not by chance, but by choice.",
      author: "Jim Rohn"
    },
    {
      quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
      author: "Jordan Belfort"
    },
    {
      quote: "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
      author: "Ayn Rand"
    },
    {
      quote: "If you want to achieve greatness stop asking for permission.",
      author: "Anonymous"
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      author: "Thomas A. Edison"
    },
    {
      quote: "It's not the years in your life that count. It's the life in your years.",
      author: "Abraham Lincoln"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      author: "Albert Schweitzer"
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky"
    },
    {
      quote: "If you can't explain it simply, you don't understand it well enough.",
      author: "Albert Einstein"
    },
    {
      quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "The only true wisdom is in knowing you know nothing.",
      author: "Socrates"
    },
    {
      quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr."
    },
    {
      quote: "The mind is everything. What you think you become.",
      author: "Buddha"
    },
    {
      quote: "You must be the change you wish to see in the world.",
      author: "Mahatma Gandhi"
    },
    {
      quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
      author: "Martin Luther King Jr."
    },
    {
      quote: "Happiness is not something ready-made. It comes from your own actions.",
      author: "Dalai Lama"
    },
    {
      quote: "The best revenge is massive success.",
      author: "Frank Sinatra"
    },
    {
      quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
      author: "Aristotle"
    },
    {
      quote: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    },
    {
      quote: "In the midst of winter, I found there was, within me, an invincible summer.",
      author: "Albert Camus"
    },
    {
      quote: "You can't use up creativity. The more you use, the more you have.",
      author: "Maya Angelou"
    },
    {
      quote: "The only way to have a friend is to be one.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "If you want to lift yourself up, lift up someone else.",
      author: "Booker T. Washington"
    },
    {
      quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
      author: "Jordan Belfort"
    },
    {
      quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
      author: "David Brinkley"
    },
    {
      quote: "The only difference between ordinary and extraordinary is that little extra.",
      author: "Jimmy Johnson"
    },
    {
      quote: "You can never cross the ocean until you have the courage to lose sight of the shore.",
      author: "Christopher Columbus"
    },
    {
      quote: "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill"
    },
    {
      quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb"
    },
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      quote: "It always seems impossible until it is done.",
      author: "Nelson Mandela"
    },
    {
      quote: "The only place where success comes before work is in the dictionary.",
      author: "Vidal Sassoon"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      author: "Thomas A. Edison"
    },
    {
      quote: "Challenges are what make life interesting, and overcoming them is what makes life meaningful.",
      author: "Joshua J. Marine"
    },
    {
      quote: "I attribute my success to this: I never gave or took any excuse.",
      author: "Florence Nightingale"
    },
    {
      quote: "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "Opportunities don't happen. You create them.",
      author: "Chris Grosser"
    },
    {
      quote: "Do what you can, with what you have, where you are.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Don't be afraid to give up the good to go for the great.",
      author: "John D. Rockefeller"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "Happiness is not by chance, but by choice.",
      author: "Jim Rohn"
    },
    {
      quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
      author: "Jordan Belfort"
    },
    {
      quote: "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
      author: "Ayn Rand"
    },
    {
      quote: "If you want to achieve greatness stop asking for permission.",
      author: "Anonymous"
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      author: "Thomas A. Edison"
    },
    {
      quote: "It's not the years in your life that count. It's the life in your years.",
      author: "Abraham Lincoln"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      author: "Albert Schweitzer"
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky"
    },
    {
      quote: "If you can't explain it simply, you don't understand it well enough.",
      author: "Albert Einstein"
    },
    {
      quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "The only true wisdom is in knowing you know nothing.",
      author: "Socrates"
    },
    {
      quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr."
    },
    {
      quote: "The mind is everything. What you think you become.",
      author: "Buddha"
    },
    {
      quote: "You must be the change you wish to see in the world.",
      author: "Mahatma Gandhi"
    },
    {
      quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
      author: "Martin Luther King Jr."
    },
    {
      quote: "Happiness is not something ready-made. It comes from your own actions.",
      author: "Dalai Lama"
    },
    {
      quote: "The best revenge is massive success.",
      author: "Frank Sinatra"
    },
    {
      quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
      author: "Aristotle"
    },
    {
      quote: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    },
    {
      quote: "In the midst of winter, I found there was, within me, an invincible summer.",
      author: "Albert Camus"
    },
    {
      quote: "You can't use up creativity. The more you use, the more you have.",
      author: "Maya Angelou"
    },
    {
      quote: "The only way to have a friend is to be one.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "If you want to lift yourself up, lift up someone else.",
      author: "Booker T. Washington"
    },
    {
      quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
      author: "Jordan Belfort"
    },
    {
      quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
      author: "David Brinkley"
    },
    {
      quote: "The only difference between ordinary and extraordinary is that little extra.",
      author: "Jimmy Johnson"
    },
    {
      quote: "You can never cross the ocean until you have the courage to lose sight of the shore.",
      author: "Christopher Columbus"
    },
    {
      quote: "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill"
    },
    {
      quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb"
    },
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      quote: "It always seems impossible until it is done.",
      author: "Nelson Mandela"
    },
    {
      quote: "The only place where success comes before work is in the dictionary.",
      author: "Vidal Sassoon"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      author: "Thomas A. Edison"
    },
    {
      quote: "Challenges are what make life interesting, and overcoming them is what makes life meaningful.",
      author: "Joshua J. Marine"
    },
    {
      quote: "I attribute my success to this: I never gave or took any excuse.",
      author: "Florence Nightingale"
    },
    {
      quote: "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "Opportunities don't happen. You create them.",
      author: "Chris Grosser"
    },
    {
      quote: "Do what you can, with what you have, where you are.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "Don't be afraid to give up the good to go for the great.",
      author: "John D. Rockefeller"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      author: "Steve Jobs"
    },
    {
      quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "Happiness is not by chance, but by choice.",
      author: "Jim Rohn"
    },
    {
      quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
      author: "Jordan Belfort"
    },
    {
      quote: "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
      author: "Ayn Rand"
    },
    {
      quote: "If you want to achieve greatness stop asking for permission.",
      author: "Anonymous"
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      author: "Thomas A. Edison"
    },
    {
      quote: "It's not the years in your life that count. It's the life in your years.",
      author: "Abraham Lincoln"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      author: "Albert Schweitzer"
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Peter Drucker"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      author: "Wayne Gretzky"
    },
    {
      quote: "If you can't explain it simply, you don't understand it well enough.",
      author: "Albert Einstein"
    },
    {
      quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "The only person you are destined to become is the person you decide to be.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt"
    },
    {
      quote: "The only true wisdom is in knowing you know nothing.",
      author: "Socrates"
    },
    {
      quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr."
    },
    {
      quote: "The mind is everything. What you think you become.",
      author: "Buddha"
    },
    {
      quote: "You must be the change you wish to see in the world.",
      author: "Mahatma Gandhi"
    },
    {
      quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
      author: "Martin Luther King Jr."
    },
    {
      quote: "Happiness is not something ready-made. It comes from your own actions.",
      author: "Dalai Lama"
    },
    {
      quote: "The best revenge is massive success.",
      author: "Frank Sinatra"
    },
    {
      quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
      author: "Aristotle"
    },
    {
      quote: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius"
    },
    {
      quote: "In the midst of winter, I found there was, within me, an invincible summer.",
      author: "Albert Camus"
    },
    {
      quote: "You can't use up creativity. The more you use, the more you have.",
      author: "Maya Angelou"
    },
    {
      quote: "The only way to have a friend is to be one.",
      author: "Ralph Waldo Emerson"
    },
    {
      quote: "If you want to lift yourself up, lift up someone else.",
      author: "Booker T. Washington"
    },
    {
      quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
      author: "Jordan Belfort"
    },
    {
      quote: "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
      author: "David Brinkley"
    },
    {
      quote: "The only difference between ordinary and extraordinary is that little extra.",
      author: "Jimmy Johnson"
    },
    {
      quote: "You can never cross the ocean until you have the courage to lose sight of the shore.",
      author: "Christopher Columbus"
    },
    {
      quote: "Whatever the mind of man can conceive and believe, it can achieve.",
      author: "Napoleon Hill"
    },
    {
      quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb"
    },
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson"
    },
    {
      quote: "It always seems impossible until it is done.",
      author: "Nelson Mandela"
    },
    {
      quote: "The only place where success comes before work is in the dictionary.",
      author: "Vidal Sassoon"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "I have not failed. I've just found 10,000 ways that won't work.",
      author: "Thomas A. Edison"
    },
    {
      quote: "Challenges are what make life interesting, and overcoming them is what makes life meaningful.",
      author: "Joshua J. Marine"
    },
    {
      quote: "I attribute my success to this: I never gave or took any excuse.",
      author: "Florence Nightingale"
    }
    // Add more quotes and authors as needed
  ];
  
  // The array now contains 60 elements, each with a quote and an author.
  
   const [index,setIndex]=useState(0); 
    
   
   
    
    return(
      <div>
       <QuoteBox quotesArray={quotesArray} index={index} setIndex={setIndex}/>
       <Credit Name={"Christopher John"}/>
       </div>
      
    )
  }
 
  

export default App;
