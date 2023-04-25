import 'bootstrap/dist/css/bootstrap.min.css'
import { Link,Outlet } from 'react-router-dom';
function Layout(){
return (
    <div className="container-fluid">
        
     <ul className='HomePage'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/student">Student</Link></li>
            <li><Link to="/courses">Courses</Link></li>
     </ul>
     <Outlet></Outlet>
        <h1>footer</h1>
    </div> 
    
)
}
export default Layout;