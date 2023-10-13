import React from "react";
import {Card, Layout, Typography} from 'antd';
import './style.scss'

const { Title } = Typography;

const textStyle: React.CSSProperties = {
    textAlign: 'center'
};

const { Header, Content} = Layout;
const LayoutComp: React.FC<ILayoutComp> = ({components}) => {
    return(
        <Layout className="container">
            <Header className="header"/>
            <Content className="main">
                {components.map(({title, content, subtitle}, index  ) => (
                        <div key={index.toString()} className={`content content-${index.toString()}`}>
                            <Title style={textStyle}>{title}</Title>
                            {subtitle ? <Title style={textStyle} level={2}>{subtitle}</Title> : <></>}
                            {content}
                        </div>
                ))}
            </Content>
            <Card bordered={false} className="aside aside-1" />
            <Card bordered={false} className="aside aside-2" />
            {/*<Footer className="footer" />*/}
        </Layout>)
}

type ILayoutComp = {
    components: {
        title: string;
        subtitle?: string;
        content?: JSX.Element;
    }[]
}


export default LayoutComp