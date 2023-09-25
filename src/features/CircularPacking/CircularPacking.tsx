import useD3 from "../../hooks/useD3";
import {d3CircularPacking, graphDimension} from "../../d3/D3CircularPacking";
import {useQuery} from "@apollo/client";
import GET_NEWS, {NewsInventoryData} from "./queries/getNews";

const CircularPacking = () => {
    // const data= undefined;
    const { data, error } = useQuery(GET_NEWS);


    const ref =  useD3((svg) => d3CircularPacking(svg, data), data)

    return (
        <svg
            ref={ref}
            style={{
                height: graphDimension.height + 50,
                width: "100%",
                marginLeft: "0",
                marginRight: "0"
        }} />)
}

export default CircularPacking