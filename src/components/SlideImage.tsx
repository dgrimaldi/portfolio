import {Image} from "antd";
import React from "react";


const SlideImage = ({src}: ISlideImage) => (
    <Image
        preview={false}
        width={"auto"}
        height={"65vh"}
        src={src}
    />)

type ISlideImage = {
    src:string
}

export default SlideImage