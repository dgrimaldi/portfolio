
import React from "react";
import {Anchor, Col, Layout} from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const LayoutComp: React.FC<ILayaoutComp> = ({items}) => (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
    <Header>header</Header>
    <Layout>
        <Content>
            {items.map(({node, key}) => (
                <div id={key}>
                    {node}
                </div>
            ))}
        </Content>
        <Sider>
            <Col span={8}>
                <Anchor items={items.map(({ key, href, title}) => ({ key, href, title  }))} />
            </Col>
        </Sider>
    </Layout>
    <Footer>footer</Footer>
</Layout>)


type ILayaoutComp = {
    items: Item[]
}
export default LayoutComp