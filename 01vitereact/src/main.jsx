import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom' instead of 'react-dom/client'
import Newbasic from './Newbasic.jsx';
import App from './App.jsx'

export default function MyApp() {
  return (
    <div>
      <h1>hii byee </h1>
      <Newbasic />
    </div>
  );
}
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
);
