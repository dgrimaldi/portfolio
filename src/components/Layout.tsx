import React from "react";
import {Col, Layout, Row, Typography} from 'antd';
import Icon from '@ant-design/icons';
import Expertise from "../features/Expertise";
import Experience from "../features/Experience";
import CircularPacking from "./CircularPacking";

const { Title } = Typography;

const textStyle: React.CSSProperties = {
    textAlign: 'center'
};


const { Header, Content } = Layout;
const LayoutComp: React.FC = () => {
    return(
        <Layout style={{height: "100vh", overflow: "auto"}}>
            <Header style={{textAlign: 'center'}}><Icon component={() => <></>}></Icon></Header>
            <Row>
                <Col md={4}/>
                <Col md={16}>
                    <Content>
                        <CircularPacking/>
                    </Content>
                </Col>
                <Col md={4}/>
            </Row>
            <Layout style={{position: 'relative'}}>
                <Content style={{
                    overflowY: "scroll",
                    textAlign: 'center',
                    margin: 0,
                    position:"absolute",
                    top: "25%",
                    width: "100%"
                }}>

                    <Row>
                        <Col md={6}/>
                        <Col md={12}>
                            <Content style={{marginBottom: '15em'}}>
                                <Title style={textStyle}>Davide Grimaldi</Title>
                                <Title level={2}>Software Engineer, Front end & App Developer.</Title>
                            </Content>
                        </Col>
                        <Col md={6}/>
                    </Row>

                    <Row>
                        <Col md={6}/>
                        <Col md={12}>
                            <Content style={{marginBottom: '15em'}}>
                                <Title style={textStyle}>My Expertise</Title>
                                <Expertise />
                            </Content>
                        </Col>
                        <Col md={6}/>
                    </Row>
                    <Row>
                        <Col md={6}/>
                        <Col md={12}>
                            <Content style={{marginBottom: '5em'}}>
                                <Title style={textStyle}>Professional Experience</Title>
                                <Experience />
                            </Content>
                        </Col>
                        <Col md={6}/>
                    </Row>
                </Content>
            </Layout>
        </Layout>)
}


export default LayoutComp