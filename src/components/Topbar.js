import Svgtopbar from './Svgtopbar'

export default function Topbar(props){
return  <>
        <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="index.html"><Svgtopbar/>OurLogger</a>
        {props.loginStatus?<a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src="https://img.icons8.com/bubbles/75/000000/user-male.png"/>
        </a>:<></>}
        <div class="dropdown-menu" style={{marginLeft:"auto"}} aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" >Account</a>
          <a class="dropdown-item" >Log Out</a>
        </div>
        </nav>
        </>

}