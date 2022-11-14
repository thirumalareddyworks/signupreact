import React from 'react';
import ReactDOM from 'react-dom';
import SignUpContainer from "./SignUpContainer"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { createRoot } from 'react-dom/client';
import './index.css'
import SignUpForm from './SignUpForm';
// import './assets/css/custom.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



// const App = () => (
//   <MuiThemeProvider>
//     <SignUpContainer />
//   </MuiThemeProvider>
// );

// ReactDOM.render(<App />, document.getElementById('root'));



const container =  document.getElementById('root')
const root = createRoot(container);
root.render(<MuiThemeProvider>
       <SignUpContainer />
    </MuiThemeProvider>);