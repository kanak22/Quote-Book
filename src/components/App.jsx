import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Quote from "./Quote";
import { Quotes } from "./Quotes";
import alanBtn from "@alan-ai/alan-sdk-web";

function App() {
useEffect(() => {
  alanBtn({
    key: 'YOUR_KEY_FROM_ALAN_STUDIO_HERE',
    onCommand: (commandData) => {
      if (commandData.command === 'go:back') {
        // Call the client code that will react to the received command
      }
    }
  });
}, []);

  return (
    <div>
      <Header />
      {Quotes.map((quoteItem, index) => {
        return (
          <Quote
            key={index}
            id={index}
            quote={quoteItem.quote}
            author={quoteItem.author}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
