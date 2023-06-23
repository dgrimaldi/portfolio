
import React, {useState} from "react";
import {Button, Carousel, Layout, Radio, Space, Typography} from 'antd';
import Item from "../interfaces/Item";
import CustomCarousel from "./CustomCarousel";

const { Title } = Typography;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
};


const { Header, Footer, Sider, Content } = Layout;
const LayoutComp: React.FC<ILayaoutComp> = ({items}) => {
    return(
        <Layout style={{height: "100vh", overflow: "auto"}}>
            <Header style={headerStyle}></Header>
            <Layout>
                <Content style={{height: "50vh", textAlign: 'center'}}>
                    <Title style={{textAlign: 'center'}}>I'm Davide and this is my portfolio</Title>
                        <CustomCarousel items={items} />
                </Content>
            </Layout>
            <Footer>footer</Footer>
        </Layout>)
}


type ILayaoutComp = {
    items: Item[]
}
export default LayoutComp