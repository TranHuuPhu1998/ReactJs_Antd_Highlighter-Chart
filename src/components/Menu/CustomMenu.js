import React from 'react';
import styles from './Menu.module.css';
import {Link} from "react-router-dom";
function CustomMenu(){
    function ToggleMenu(){

    }
    return (
        <div className={styles.menu_wapper}>
            <h4 onClick={ToggleMenu} className={styles.menu_title}>Ant Design Tutorial</h4>
                <ul className={styles.menu_list,"js-active"} >
                    <li className={styles.menu_item}>
                        <Link to="/ant/form">
							Form Layout
						</Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link to="/ant/button">
                            Button
                        </Link>
                    </li>
                    <li className={styles.menu_item}> 
                        <Link to="/ant/calendar">
                            Calendar
                        </Link>
                    </li>
                    <li className={styles.menu_item}>
                    <Link to="/ant/chart">
							AntDesign Chart
						</Link>
                    </li>
                </ul>
            <h4 className={styles.menu_title}>Learing React</h4>
                <ul className={styles.menu_list}>
                    <li className={styles.menu_item}> 
                        <Link to="/highligh">
                            Highligh
                        </Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link to="/react/chart">
                            Chart JS
                        </Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link to="/react/validation">
                            Validation
                        </Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link to="/group">
						    GoogleMapReact
						</Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link to="/react/ckeditor">
						React CKEditor
						</Link>
                    </li>
                </ul>
            <h4 className={styles.menu_title}>Project React</h4>
            <ul className={styles.menu_list}>
                    <li className={styles.menu_item}> 
                        <Link to="/project">
                            Project
                        </Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link to="/rules">
							Giới Thiệu Project
						</Link>
                    </li>

                </ul>
        </div>
    )
}

export default CustomMenu;
