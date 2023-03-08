import styles from '../styles/navbar.module.css';
import {Link} from 'react-router-dom'
const NavBar=()=>{
    return(

        <div className={styles.nav}>

                <div className={styles.leftDiv}>
                    <Link to='/'>
                        <h3>Home</h3>
                    </Link>
                </div>

            <div className={styles.rightNav}>
                    <div className={styles.user}>
                        <a href='/'>
                            <img src='https://cdn-icons-png.flaticon.com/512/2920/2920045.png' alt='' className={styles.userDp}/>
                        </a>
                        <span>Sudip</span>
                    </div>

                <div className={styles.navLinks}>
                    <ul>
                         <li>
                            <Link to='/login'>Log in</Link>
                         </li> 
                        <li>
                            <a href='/'>Log out</a>
                        </li>
                        <li>
                            <a href='/'>Register</a>
                        </li>  
                    </ul>
                </div>
                </div>
            </div>
        
      
    );
};
export default NavBar;
