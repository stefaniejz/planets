import React from 'react'
import { Menu, Icon, Input } from 'antd';


const { SubMenu } = Menu;
const { Search } = Input;

class Menu_bar extends React.Component {
    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };

    render() {
        return (
            <div>
              <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" className="menu-bar">
                <Menu.Item key="menu_title" id="menu-title" disabled>
                  Solar System Exploration
                </Menu.Item>
                <SubMenu
                key="solar_system"
                title={
                    <span className="submenu-title-wrapper">
                    Solar System
                    </span>
                }
                >
                    <Menu.Item key="sun">Sun</Menu.Item>
                    <Menu.Item key="kuiper_belt">Kuiper Belt </Menu.Item>
                    <Menu.Item key="oort_cloud">Oort Cloud</Menu.Item>
                </SubMenu>
                <SubMenu
                key="planets"
                title={
                    <span className="submenu-title-wrapper">
                    Planets
                    </span>
                }
                >
                    <Menu.Item key="mecury">Mecury</Menu.Item>
                    <Menu.Item key="jupiter">Jupiter </Menu.Item>
                    <Menu.Item key="venus">Venus</Menu.Item>
                    <Menu.Item key="mars">Mars</Menu.Item>
                    <Menu.Item key="earth">Earth</Menu.Item>
                    <Menu.Item key="neptune">Neptune</Menu.Item>
                    <Menu.Item key="saturn">Saturn</Menu.Item>
                    <Menu.Item key="uranus">Uranus</Menu.Item>
                </SubMenu>
                <SubMenu
                title={
                    <span className="submenu-title-wrapper">
                    Moons
                    </span>
                }
                >
                <Menu.ItemGroup title="BY DESTINATION">
                    <Menu.Item key="earth">Earth(1)</Menu.Item>
                    <Menu.Item key="mars">Mars(2)</Menu.Item>
                    <Menu.Item key="jupiter">Jupiter(79)</Menu.Item>
                    <Menu.Item key="saturn">Saturn(82)</Menu.Item>
                    <Menu.Item key="uranus">Uranus(27)</Menu.Item>
                    <Menu.Item key="mars">Mars(2)</Menu.Item>
                    <Menu.Item key="pluto">Pluto(5)</Menu.Item>
                </Menu.ItemGroup>
                </SubMenu>
                <SubMenu
                key="more"
                title={
                    <span className="submenu-title-wrapper">
                    More
                    </span>
                }
                >
                    <Menu.Item key="news">News</Menu.Item>
                    <Menu.Item key="missions">Missions </Menu.Item>
                    <Menu.Item key="resources">Resources</Menu.Item>
                </SubMenu>
                <Menu.Item key="search" >
                    <Search
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                    />
                </Menu.Item>

            </Menu>
            </div>
        )
    }
}

export default Menu_bar