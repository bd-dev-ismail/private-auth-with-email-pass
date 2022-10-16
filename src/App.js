
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Register from './components/Register'
import Orders from './components/Orders';
import Main from './layout/Main';
const router = createBrowserRouter([
  {
    path: '/', element:  <Main> </Main>, children: [
      {
        path: '/', element: <Home></Home>
      },
      {
        path: '/orders', element: <Orders></Orders>
      },
      {
        path: '/login', element: <LogIn></LogIn>
      },
      {
        path: '/register', element: <Register></Register>
      }
    ]
  }
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
