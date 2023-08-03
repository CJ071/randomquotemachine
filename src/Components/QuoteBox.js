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

    export default QuoteBox