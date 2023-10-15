import useD3 from "../../utilities/hooks/useD3";
import {d3CircularPacking} from "../../d3/D3CircularPacking";
import './style.scss'
import React, {useEffect, useMemo, useState} from "react";
import {InputNumber} from "antd";
import InfoMessage from "../../components/InfoMessage";
import {IntRange} from "../../interfaces/range";

const message = `Welcome from Davide, try to insert a number between 1 and 1000 to see more interactive circles`

const CircularPacking = () => {
    const [selectedNumber, setSelectedNumber] = useState<IntRange<1,999>>(1)
    const numberOfCircle = useMemo(() => Number(selectedNumber), [selectedNumber])

    const ref = useD3((svg) => d3CircularPacking(svg, numberOfCircle), [numberOfCircle]);
    const handleChange = (value:  IntRange<1,999> | null) => {
        if(value !== null) {
            setSelectedNumber(value)
        }
    }


    return (
        <>
            <InfoMessage content={message}/>
            <InputNumber
                min={1}
                max={999 as IntRange<1,999>}
                onChange={handleChange}
                defaultValue={selectedNumber}
                style={{ width: '100%' }}
            />
            <svg ref={ref} className="img"/>
        </>)
}

export default CircularPacking