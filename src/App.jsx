
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

const AppLayout=()=>{
    return(
        <div className='app'>
            <Header/>
            <Outlet/>
            {/* <Footer/> */}
        </div>
    )
}

export default AppLayout