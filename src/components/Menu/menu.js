import React from "react";
import { Menu } from 'antd';
import {Link} from "react-router-dom";
const { SubMenu } = Menu;
const handleClick = e => {
	console.log('click ', e);
};

function MenuCom() {
	return (
		<Menu
			onClick={handleClick}
			style={{ width: 225,height:"90vh",position:"fixed",top:67,overflowY:"scroll" }}
			defaultSelectedKeys={["1"]}
			defaultOpenKeys={["sub1"]}
			mode="inline"
			theme="dark"
		>
			<SubMenu
				key="sub1"
				title={
					<span >
						<span>Ant Design Tutorial</span>
					</span>
				}
			>
				<Menu.ItemGroup key="g1" title="Data Entry">
					<Menu.Item key="2">
						<Link to="/ant/form">
						Form Layout
						</Link>
					</Menu.Item>
				</Menu.ItemGroup>
				<Menu.ItemGroup key="g2" title="General">
					<Menu.Item key="1">
							<Link to="/ant/button">
								Button
							</Link>
					</Menu.Item>
				</Menu.ItemGroup>
			</SubMenu>
			<SubMenu
				key="sub2"
				title={
					<span>
						<span>Giới Thiệu</span>
					</span>
				}
			>
					<Menu.Item key="5">
						<Link to="/method">
						Sứ Mệnh
						</Link>
					</Menu.Item>
					<Menu.Item key="6">
						<Link to="/group">
						Nhóm
						</Link>
					</Menu.Item>
					<Menu.Item key="7">
						<Link to="/rules">
						Nội Quy
						</Link>
					</Menu.Item>
			
			</SubMenu>
			<SubMenu
				key="sub4"
				title={
					<span>
						<span>Nhóm</span>
					</span>
				}
			>
			</SubMenu>
		</Menu>
	);
}

export default MenuCom;
