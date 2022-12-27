
import React from 'react'

export default function Cardfront({name, number,month,year}) {


  
  return (
    <div>
       
       <div className="card-front">
        <div className="card-shape">
          <span className="big-circle"></span>
          <span className="small-circle"></span>
        </div>
        <h1 className="card-number-display">{number}</h1>
        <div className="name-date">
          <h3 className="holders-name-display" >{name}</h3>
          <div className="card-date">
          <h3 > {month}</h3>
          <h3>/</h3>
          <h3 > {year}</h3>
          </div>


          
        </div>
      </div>

    </div>
  )
}






























// import React from "react"
// function CardFront(){
   

//     import * as React from 'react';

//     const themes = {
//       light: {
//         foreground: '#000000',
//         background: '#eeeeee',
//       },
//       dark: {
//         foreground: '#ffffff',
//         background: '#222222',
//       },
//     };
    
//     // create the context
//     const ThemeContext = React.createContext(themes.light);
    
//     const ThemeContext2 = React.createContext({
//       theme: themes.light,
//       toggleTheme: () => {},
//     });
    
//     export default function App() {
//       // create a state to manage switching of themes
//       const [darkMode, setDarkMode] = React.useState(false);
//       const value = darkMode ? themes.dark : themes.light;
    
//       return (
//         // set the context default value to a provider
//         <ThemeContext.Provider value={value}>
//           <Toolbar changeTheme={setDarkMode} theme={darkMode} />
//         </ThemeContext.Provider>
//       );
//     }
    
//     function Toolbar({ changeTheme, theme }) {
//       return (
//         <div onClick={() => changeTheme(!theme)}>
//           <ThemedButton />
//         </div>
//       );
//     }
    
//     function ThemedButton() {
//       // request for the context current value
//       const theme = React.useContext(ThemeContext);
    
//       return (
//         <button style={{ background: theme.background, color: theme.foreground }}>
//           I am styled by theme context!
//         </button>
//       );
//     }
    





   




// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import AppRouter from './routes';
// import './layout.css';

// const CustomNavLink = ({ to, ...props }) => {
//   let activeStyle = {
//     textDecoration: 'underline',
//     color: 'red',
//     transition: 'all 4s',
//   };

//   return (
//     <NavLink
//       style={({ isActive }) =>
//         isActive ? activeStyle : { textDecoration: 'none' }
//       }
//       to={to}
//       end
//       {...props}
//     />
//   );
// };

// function Layout() {
//   return (
//     <nav>
//       <h1 className="logo">Welcome to our Router Test App</h1>
//       <CustomNavLink to="/">Home</CustomNavLink>|{' '}
//       <CustomNavLink to="/about">About</CustomNavLink>|{' '}
//       <CustomNavLink to="/items">Items</CustomNavLink>|{' '}
//       <CustomNavLink to="/items/new">New Item</CustomNavLink>
//     </nav>
//   );
// }

// function App() {
//   const [count, setCount] = useState(0);
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <div className="App">
//       {/* layout */}
//       <Layout />

//       {/* routes in our App */}
//       <AppRouter />
//     </div>
//   );
// }

// export default App;





// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import './App.css';
// import useForm from './hooks/useForm';

// function App() {
//   const [githubList, setGitHubList] = useState([]);

//   // const { resetForm, inputs, handleChange } = useForm({ github: '' });
//   // console.log(inputs);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     let form = event.target;
//     console.log(form);
//     let githubInput = event.target[0];
//     console.log(githubInput);
//     const username = githubInput.value;
//     // set state into the githubList array
//     setGitHubList((prev) => {
//       return [...prev, username];
//     });
//     form.reset();
//     // use resetForm function from the useForm hook
//     // resetForm();
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="github">GitHub Username</label>
//         <input
//           id="github"
//           type="text"
//           name="github"
//           // onChange={handleChange}
//           // value={inputs.github}
//         />
//       </form>
//       <div>
//         <h1>Type a valid github username in the input and press enter</h1>
//         <ul>
//           {githubList.map((username) => {
//             return (
//               <li>
//                 <a href={`https://github.com/${username}`} target="_blank">
//                   {username}
//                 </a>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;
