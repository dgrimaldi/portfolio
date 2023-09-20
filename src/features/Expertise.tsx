import {Card, Col, Row} from "antd";
import React from "react";

const Expertise = () => (
    <Row gutter={16}>
        <Col span={8}>
            <Card bordered={false}>
                Experienced in both functional and OOP: JavaScript, TypeScript, Golang, Rust, Java.
            </Card>
        </Col>
        <Col span={8}>
            <Card bordered={false}>
                Passionate about UI/UX. Over 4 years of development experience in HTML, CSS, JS mainly with React and NodeJS frameworks.
            </Card>
        </Col>
        <Col span={8}>
            <Card bordered={false}>
                Skilled in developing cross-platform solutions with passion for cutting-edge technologies.
            </Card>
        </Col>
    </Row>
)

export default Expertise