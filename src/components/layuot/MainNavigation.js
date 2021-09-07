import {Link} from 'react-router-dom'
import style from './MainNavigation.module.css'
function MainNavigation(){
    return (
        <header className={style.header}>
            <div className = {style.logo}>Meetup App</div>
                <nav  className={style.navMenu}> 
                <ul>                   
                  <li>  <Link to='/'>All Meetup</Link>   </li>                
                  <li>   <Link to='/new-meetup'> Add new meetup</Link> </li> 
                  <li>  <Link to='/favorites'> My favorites</Link> </li> 
                </ul>
                </nav>
        </header>
    );
}

export default MainNavigation;