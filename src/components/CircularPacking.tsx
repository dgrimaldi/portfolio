import useD3 from "../hooks/useD3";
import {d3CircularPacking} from "../d3/D3CircularPacking";
const graphDimension: { width: number, height: number } = { width: 450, height: 450};



const CircularPacking = () => {

    const ref = useD3((svg) => d3CircularPacking(svg));
    return (
        <svg
            ref={ref}
            style={{
                height: graphDimension.height + 50,
                width: "100%",
                marginLeft: "0",
                marginRight: "0"
            }} />
    )
}

export default CircularPacking