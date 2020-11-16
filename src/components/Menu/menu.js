import React from "react";
import { Menu } from 'antd';
import {Link} from "react-router-dom";
import styles from './Menu.module.css';
const { SubMenu } = Menu;

const handleClick = e => {
	// console.log('click ', e);
};

function MenuCom() {
	return (
		<Menu
			onClick={handleClick}
			className={styles.menu}
			// style={{width: 318,height:'100%',position:"fixed",top:67}}
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
					<Menu.Item key="1">
						<Link to="/ant/form">
							Form Layout
						</Link>
					</Menu.Item>
				</Menu.ItemGroup>
				<Menu.ItemGroup key="g2" title="General">
					<Menu.Item key="2">
							<Link to="/ant/button">
								Button
							</Link>
					</Menu.Item>
					<Menu.Item key="3">
					<Link to="/ant/calendar">
						Calendar
					</Link>
					</Menu.Item>
					<Menu.Item key="4">
						<Link to="/ant/chart">
							AntDesign Chart
						</Link>
					</Menu.Item>
				
					
				</Menu.ItemGroup>
			</SubMenu>

			<SubMenu
				key="sub4"
				title={
					<span>
						<span>Leaning React</span>
					</span>
				}
			>
				<Menu.Item key="7">
					<Link to="/highligh">
						Highligh
					</Link>
				</Menu.Item>	
				<Menu.Item key="8">
					<Link to="/react/chart">
						Chart JS
					</Link>
				</Menu.Item>
				<Menu.Item key="9">
					<Link to="/react/validation">
						Validation
					</Link>
				</Menu.Item>	
				<Menu.Item key="10">
						<Link to="/group">
						GoogleMapReact
						</Link>
				</Menu.Item>	
				<Menu.Item key="10">
						<Link to="/react/ckeditor">
						React CKEditor
						</Link>
				</Menu.Item>
			</SubMenu>
			<SubMenu
				key="sub5"
				title={
					<span>
						<span>Project React</span>
					</span>
				}
			>
				<Menu.Item key="12">
					<Link to="/project">
						Project
					</Link>
				</Menu.Item>		
			</SubMenu>
			<SubMenu
				key="sub2"
				title={
					<span>
						<span>Giới Thiệu</span>
					</span>
				}
			>
					<Menu.Item key="6">
						<Link to="/rules">
							Giới Thiệu Project
						</Link>
					</Menu.Item>
			</SubMenu>
		</Menu>
	);
}

export default MenuCom;
