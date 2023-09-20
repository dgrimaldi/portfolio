import type { CollapseProps } from 'antd';
import {Collapse} from "antd";

const itemsContent: CollapseProps['items'] = [
    {
        key: '1',
        label: 'EHR(Electronic Medical Records) software.',
        children: <p>{'Maintained and developed a software fpr helping patient data management, including over 10,000 medical documents and diagnoses.'}</p>,
    },
    {
        key: '2',
        label: 'Search engine software.',
        children: <p>{'Designed and Developed a Multi-SaaS Matching Engine for a Swiss Startup'}</p>,
    },
    {
        key: '3',
        label: 'Web3 App ',
        children: <p>{'Researched, designed and developed a Web3 application for facilitating participatory artistic models'}</p>,
    },
];
const Experience = () => {
    return <Collapse items={itemsContent} defaultActiveKey={['1']} />;
}

export default Experience