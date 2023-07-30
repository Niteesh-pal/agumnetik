import React,{useState} from 'react'
import styles from './header.module.css'
import { FcExpand } from "react-icons/fc";

const Header = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = ()=>{
            setToggle(!toggle);
    }

    return (
        <section className={styles.header}>

            <div className={styles.logo}>
                <h3>logo</h3>
                <h3>vibely</h3>
            </div>

            <div className={styles.menu}>
                <div>Why vibely</div>
                {/* drop head */}
                <div className={styles.dropdown} >

                    <div className={styles.drophead} onClick={handleToggle}>
                        <div>I am Creator</div>
                        <FcExpand className={styles.icon} />
                    </div>
                    
                    {
                        toggle &&(
                            <div className={styles.dropContent}>
                        <ul>
                            <li className={styles.dropList}>Select 1</li>
                            <li>Select 2</li>
                            <li>Select 3</li>
                        </ul>
                    </div>
                        )
                    }
                </div>

                <div>FaQ</div>
                <div>Press</div>
                <div>Blog</div>
            </div>

            <div className={styles.login}>
                <div className={styles.loginContent}>Log in</div>
            </div>
        </section>
    )
}

export default Header