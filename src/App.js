import './App.css';
import React from 'react';
import {FaTwitter, FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';


class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomIndex: 0
    };
    this.newQuote = this.newQuote.bind(this);
  }
  newQuote() {
      this.setState({
        randomIndex: Math.floor(Math.random() * 7)
      });
  }
  render() {

    const quotes = [{quote:"I’m a greater believer in luck, and I find the harder I work the more I have of it.", author:"Thomas Jefferson"},
      {quote:"Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus.", author:"Alexander Graham Bell"},
      {quote:"Either you run the day or the day runs you.", author:"Jim Rohn"},
      {quote:"When we strive to become better than we are, everything around us becomes better too.", author:"Paulo Coelho"},
      {quote:"Opportunity is missed by most people because it is dressed in overalls and looks like work.", author:"Thomas Edison"},
      {quote:"Setting goals is the first step in turning the invisible into the visible.", author:"Tony Robbins"},
      {quote:"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.", author:"Steve Jobs"}];
    return(<div className="page">
      <div className="App" id="quote-box">
      <p id="text"><FaQuoteLeft id="quote-icon"/> {quotes[this.state.randomIndex].quote} <FaQuoteRight id="quote-icon" /></p>
        <div id="author"><p>- {quotes[this.state.randomIndex].author}</p>
        </div>
        <div id="quote-buttons">
          <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank"><FaTwitter /></a>
        <button id="new-quote"  onClick={this.newQuote}>New Quote</button>
        </div>
      </div>
    </div>);
  }
}
function App() {
  return (
      <div>

      <RandomQuoteMachine/>

      </div>
  );
}

export default App;
