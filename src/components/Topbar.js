import Svgtopbar from './Svgtopbar'

export default function Topbar(props){
return  <>
        <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="index.html"><Svgtopbar/>OurLogger</a>
        {props.loginStatus?<button className="nav-link dropdown-toggle" href=""  id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src="https://img.icons8.com/bubbles/75/000000/user-male.png" alt="icon8"/>
        </button>:<></>}
        <div class="dropdown-menu" style={{marginLeft:"auto"}} aria-labelledby="navbarDropdownMenuLink">
          <button className="dropdown-item">Account</button>
          <button className="dropdown-item">Log Out</button>
        </div>
        </nav>
        </>

}