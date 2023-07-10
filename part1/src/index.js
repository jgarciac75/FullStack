import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
  return (
    <div>
      <p>Hola Mundo para {props.nombre} tu edad es {props.edad} años </p>
    </div>
  )
}
const App = () => {
  const now = new Date();
  const a =10;
  const b = 20;
  console.log('Hello from component')
  return ( 
  <>
    <p>Hola La Fecha es, son las {now.toString()}</p> 
    <Hello nombre="Camila"  edad="8"/>
    <Hello  nombre="Sofia" edad ="7" />
    <p>
      {a} + {b} es {a+b}
    </p>
  </>
)
}

ReactDOM.render(<App />, document.getElementById('root')) 

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
