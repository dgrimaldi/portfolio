import {Card, Col, Row} from "antd";
import React from "react";

const Expertise = () => (
    <Row gutter={16}>
        <Col span={8}>
            <Card title="Card title" bordered={false}>
                Experienced in both functional and OOP: Golang, Python, Java, JavaScript, TypeScript.
            </Card>
        </Col>
        <Col span={8}>
            <Card title="Card title" bordered={false}>
                Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS, React and NextJS frameworks.
            </Card>
        </Col>
        <Col span={8}>
            <Card title="Card title" bordered={false}>
                Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework.
            </Card>
        </Col>
    </Row>
)

export default Expertise