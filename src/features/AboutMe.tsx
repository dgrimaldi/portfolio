import Item from "../interfaces/Item";
import {Button, Card, Modal, Pagination} from "antd";
import React, {useState} from "react";
import {codeReview} from "./Markdown/codeReview";
import {memoization} from "./Markdown/memoization";
import {referencing} from "./Markdown/referencing";
import MarkdownComp from "../components/MarkdownComp";

// const aboutMe: Item = {
//     key: "about",
//     node: <Card>
//         I aim to attain an engaging developer position in the field software development. I have five years as software developer in work experience and two years in academic experience.
//         I'm proactive person and I like to invest time to learn, then to share and to discuss new solution to the other member of my team. I'm diabetic, this does not involve any physical impediments</Card>,
//     title: "About",
//     href: '#about'
// }

const AboutMe = () => {
    const [isModalOpen, setModalOpen] = useState(false)
    const markdownTextList = [codeReview, memoization, referencing]
    const [selectedMarkdown, setSelectedMarkdown] = useState(1)
    return (
        <div style={{display: "flex"}}>
            <Modal
                open={isModalOpen}
                okButtonProps={{ style: { display: "none"} }}
                cancelButtonProps={{ style: { display: "none"} }}
                onCancel={()=> setModalOpen(false)}
                width={2000}
            >
                <MarkdownComp text={markdownTextList[selectedMarkdown - 1]} />
                <Pagination simple total={30} onChange={(page)=> setSelectedMarkdown(page)} />
            </Modal>
            <Button type="default" style={{flex: "1 100%"}} onClick={()=> setModalOpen(!isModalOpen)}>Read my Markdown</Button>
        </div>
    )
}

export default AboutMe