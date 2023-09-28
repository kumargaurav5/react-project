import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import AppLayout from './App'
import About from './components/About'
import Body from './components/Body'
import Contact from './components/Contact'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'

// import Header from './components/Header';
// import Body from './components/Body';


// const AppLayout=()=>{
//     return(
//         <div className='app'>
//             <Header/>
//             <Body/>
//             {/* <Footer/> */}
//         </div>
//     )
// }


const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[{
          path:'/',
          element:<Body/>,
        },
        
        {
          path:'/about',
          element:<About/>
        },
  
        {
          path:'/contact',
          element:<Contact/>
        },

        {
          path:'/restaurant/:resId',
          element:<RestaurantMenu/>
        }
    ],
    
    errorElement:<Error/>,
    }
    

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
