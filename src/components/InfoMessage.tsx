import {message} from "antd";
import {memo, useEffect} from "react";

const InfoMessage = memo (function InfoMessage({content}: { content : string }) {
    const [messageApi, contextHolder] = message.useMessage();
    useEffect(() => {
        messageApi.info({content, key: "message"});
        return () => { messageApi.destroy("message") }
    })

    return <>{contextHolder}</>
})

export default InfoMessage