import React from "react";
import {Col, Layout, Row, Typography} from 'antd';

const { Title } = Typography;

const textStyle: React.CSSProperties = {
    textAlign: 'center'
};

const { Header, Content} = Layout;
const LayoutComp: React.FC<ILayoutComp> = ({components}) => {
    return(
        <Layout style={{height: "100vh", overflow: "auto"}}>
            <Header style={{textAlign: 'center'}}/>
            <Layout style={{position: 'relative'}}>
                <Content style={{
                    overflowY: "scroll",
                    textAlign: 'center',
                    margin: 0,
                    position:"absolute",
                    width: "100%"
                }}>
                    {components.map(({title, content, subtitle}, index  ) => (
                        <Row key={index.toString()}>
                            <Col md={4}/>
                            <Col md={16}>
                                <Content style={{marginBottom: '15em'}}>
                                    <Title style={textStyle}>{title}</Title>
                                    {subtitle ? <Title level={2}>{subtitle}</Title> : <></>}
                                    {content}
                                </Content>
                            </Col>
                            <Col md={4}/>
                        </Row>
                    ))}
                </Content>
            </Layout>
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