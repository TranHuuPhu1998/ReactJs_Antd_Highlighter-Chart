import React from 'react';
import { Row, Col ,Menu , Dropdown ,Avatar } from 'antd';
import styles from './Header.module.css'

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
		<Row>
			<Col xs={0} sm={0} md={0} lg={4} xl={4}>
				<div className={styles.header_logo}>
					<img src="./images/learn.svg" alt="learn" />
					<span>Học</span>
				</div>
			</Col>
			<Col xs={24} sm={24} md={24} lg={20} xl={20}>
				<div className={styles.header_logo}>
					<Row>
						<Col xs={{ span: 3, offset: 1 }} lg={{ span: 3, offset: 3 }}>
						<img src="./images/discuss-inactive.svg" alt="svg"/>
						<span>Thảo Luận</span>
            </Col>
						<Col xs={{ span: 3, offset: 1 }} lg={{ span: 3, offset: 1 }}>
						<img src="./images/shop-storefront-inactive.svg" alt="shop"/>
						<span>Cửa Hàng</span>
            </Col>
						<Col xs={{ span: 3, offset: 1 }} lg={{ span: 3, offset: 1 }}>
							<img src="./images/more-inactive.svg" alt="shop"/>
							
							<Dropdown overlay={menu} placement="bottomCenter" arrow>
								<span>Xem Thêm</span>
							</Dropdown>
            </Col>
						<Col xs={{ span: 3, offset: 1 }} lg={{ span: 3, offset: 1 }}>
							<Avatar shape="square" size={46} src="./images/juicy-flag-sprite-8.svg" alt="juicy-flag-sprite-8"/>
            </Col>
						<Col xs={{ span: 3, offset: 1 }} lg={{ span: 3, offset: 1 }}>
				    <Avatar size={46} src="./images/avatar.jpg" alt="avatar"/>
            </Col>
					</Row>
				</div>
			</Col>
		</Row>
	);
}

export default Header;