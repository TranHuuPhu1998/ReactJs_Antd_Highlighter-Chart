import React from "react";
import { Menu } from 'antd';
const { SubMenu } = Menu;
const handleClick = e => {
	console.log('click ', e);
};

function MenuCom() {
	return (
		<Menu
			onClick={handleClick}
			style={{ width: 225,height:"90vh" }}
			defaultSelectedKeys={["1"]}
			defaultOpenKeys={["sub1"]}
			mode="inline"
			theme="dark"
		>
			<SubMenu
				key="sub1"
				title={
					<span >
						<span>Danh Sách Khóa Học</span>
					</span>
				}
			>
				<Menu.ItemGroup key="g1" title="Khóa Học Cho Sinh Viên">
					<Menu.Item key="1">Tiếng Anh</Menu.Item>
					<Menu.Item key="2">Tiếng Pháp</Menu.Item>
				</Menu.ItemGroup>
				<Menu.ItemGroup key="g2" title="Khóa Học Cho Học Sinh Lớp (1->12)">
					<Menu.Item key="3">Tiếng Anh</Menu.Item>
					<Menu.Item key="4">Tiếng Pháp</Menu.Item>
				</Menu.ItemGroup>
			</SubMenu>
			<SubMenu
				key="sub2"
				title={
					<span>
						<span>Phương Pháp Học</span>
					</span>
				}
	
			>
				<Menu.Item key="5">Giao tiếp ngoài đời thực</Menu.Item>
				<Menu.Item key="6">Những nội dung đặc biệt</Menu.Item>
				<SubMenu key="sub3" title="Submenu">
					<Menu.Item key="7">Một phương pháp cân bằng</Menu.Item>
					<Menu.Item key="8">Cá nhân hóa</Menu.Item>
					<Menu.Item key="9">Rất nhiều phương pháp học</Menu.Item>
					<Menu.Item key="10">Liên tục cải tiến</Menu.Item>
				</SubMenu>
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
