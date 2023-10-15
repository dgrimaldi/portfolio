import React, {useRef} from "react";
import {Affix, Card, Divider, Layout, Typography} from 'antd';
import './style.scss'
import {index} from "d3";
import {getMap, scrollToId} from "../../utilities/scroll";

const { Title } = Typography;

const textStyle: React.CSSProperties = {
    textAlign: 'center'
};

const { Header, Content} = Layout;
const LayoutComp: React.FC<ILayoutComp> = ({components}) => {
    const refElements = useRef(null)


    return(
        <Layout className="container">
            <Affix>
                <Header className="header">
                    {components.map(({title}, index) => (
                        <div key={`menu-${index}`}>
                            <Divider type={"vertical"} style={{height: "100%"}} />
                            <a onClick={()=> scrollToId(index, refElements)}>{title}</a>
                        </div>
                        ))}
                </Header>
            </Affix>
            <Content className="main">
                {components.map(({title, content, subtitle}, index) => (
                    <ul
                        key={`${index}`}
                        className={`content content-${index}`}
                        ref={(node) => {
                            const map = getMap(refElements);
                            if (node) map.set(index, node);
                            else map.delete(index);
                    }}>
                        <Title style={textStyle}>{title}</Title>
                        {subtitle ? <Title style={textStyle} level={2}>{subtitle}</Title> : <></>}
                        {content}
                    </ul>
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