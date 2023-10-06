import useD3 from "../../hooks/useD3";
import {d3CircularPacking} from "../../d3/D3CircularPacking";
import './style.scss'
const CircularPacking = () => {
    const ref = useD3((svg) => d3CircularPacking(svg));
    return (
        <svg ref={ref} className="img"/>)
}

export default CircularPacking