import type { CollapseProps } from 'antd';
import {Collapse} from "antd";

type items = {
    key: string;
    label: string;
    children: string
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;


const items: CollapseProps['items'] = [
    {
        key: '1',
        label: 'EHR(Electronic Medical Records) software.',
        children: <p>{'Maintained and developed a software fpr helping patient data management, including over 10,000 medical documents and diagnoses.'}</p>,
    },
    {
        key: '2',
        label: 'Search engine software for multi-cloud services.',
        children: <p>{text}</p>,
    },
    {
        key: '3',
        label: 'Web3 App fpr ',
        children: <p>{text}</p>,
    },
];
const Experience = () => {
    return <Collapse items={items} defaultActiveKey={['1']} />;
}

export default Experience