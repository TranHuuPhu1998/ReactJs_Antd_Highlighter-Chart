import React from 'react'
import { Row, Col , Dropdown ,Avatar,Menu } from 'antd';
import discussInactive from './images/discuss-inactive.png';
import juicyLlagSprite from './images/juicy-flag-sprite-8.png';
import moreInactive from './images/more-inactive.png';
import shopStorefrontInactive from './images/shop-storefront-inactive.png';
import avatar from './images/avatar.jpg';
import styles from './Header.module.css';

export default function headerRight() {
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
      
    return (
        <Row style={{position:"fixed" , width:"100%" , backgroundColor : "#ffffff" , zIndex : 1}}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
				<div className={styles.header_logo}>
					<Row>
						<Col xs={{ span: 3, offset: 1 }} lg={{ span: 3, offset: 3 }}>
						<img src={discussInactive} alt="svg"/>
						<span>Thảo Luận</span>
            			</Col>
						<Col xs={{ span: 3, offset: 1 }} lg={{ span: 3, offset: 1 }}>
						<img src={shopStorefrontInactive} alt="shop"/>
						<span>Cửa Hàng</span>
            			</Col>
						<Col xs={{ span: 3, offset: 1 }} lg={{ span: 3, offset: 1 }}>
							<img src={moreInactive} alt="shop"/>
							
							<Dropdown overlay={menu} placement="bottomCenter" arrow>
								<span>Xem Thêm</span>
							</Dropdown>
            			</Col>
						<Col xs={{ span: 3, offset: 1 }} lg={{ span: 3, offset: 1 }}>
							<Avatar shape="square" size={46} src={juicyLlagSprite} alt="juicy-flag-sprite-8"/>
            				</Col>
						<Col xs={{ span: 3, offset: 1 }} lg={{ span: 3, offset: 1 }}>
				    <Avatar size={46} src={avatar} alt="avatar"/>
            			</Col>
					</Row>
				</div>
			</Col>  
        </Row>
    )
}
