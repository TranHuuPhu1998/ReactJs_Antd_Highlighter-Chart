import React from 'react';
import { Row, Col ,Menu } from 'antd';
import MenuComponent from "../Menu/CustomMenu.js";
import styles from './Header.module.css';
import {Link} from 'react-router-dom'
import learn from './images/learn.png'

const menu = (
  <Menu>
    <Menu.Item style={{fontWeight:"bold",color:"afafaf"}}>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        Event
      </a>
    </Menu.Item>
    <Menu.Item style={{fontWeight:"bold",color:"afafaf"}}>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Từ Điển 
      </a>
    </Menu.Item>
    <Menu.Item style={{fontWeight:"bold",color:"afafaf"}}>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Từ Vựng
      </a>
    </Menu.Item>
  </Menu>
);


function Header() {
	
	return (
		<Row 
		className={styles.header}>
			<Col className={styles.header_col}>
				<Link to={'/'} className={styles.header_logo}>
					<img src={learn} alt="learn" />
					<span>Học</span>
				</Link>
					<MenuComponent/>
			</Col>
			
		</Row>
	);
}

export default Header;