import React,{lazy,Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import AppLayout from './App'
import About from './components/About'
import Body from './components/Body'
import Contact from './components/Contact'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import Shimmer from './components/shimmer'
import Cart from './components/Cart'
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

const Grocery=lazy(()=>import("./components/Grocery"))

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
        },

        {

          path:'/grocery',
          element:<Suspense fallback={<Shimmer/>}> <Grocery/> </Suspense>
        },

        {
          path:'/cart',
          element:<Cart/>
        },

    ],
    
    errorElement:<Error/>,
    }
    

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
