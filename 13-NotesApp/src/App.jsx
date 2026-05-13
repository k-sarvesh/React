import React, { useState, useEffect } from 'react'
import AddNotes from './components/AddNotes'
import Hero from './components/Hero'
import '@fontsource/amatic-sc'
import cards from './components/cards'
import Main from './components/Main'



function NotesApp() {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 3000);

    const removeTimer = setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <div>
      {/* Show welcome page for 4seconds */}
      {show ? (
        // <div className={`transition-opacity duration-1000 ${fade ? 'opacity-0' : 'opacity-100'}`}>
          <Hero />
        
      ) : (
        <div className={`transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`}>
        </div>
      )
      }
       <Main />

    </div>
  )
}

export default NotesApp