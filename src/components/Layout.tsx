import { Outlet } from 'react-router-dom';
import Navbar from './Narbar';

export default function Layout() {
  return(
    <>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </>
  )
}