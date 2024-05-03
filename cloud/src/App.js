import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Carrent from './components/Carrent';
import GetData from './components/GetData';

function App() {
  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<Carrent/>
    },
    {
      path:'/getdata',
      element:<GetData/>
    }
    
  ])
  return (
    <div className="App">
     <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
