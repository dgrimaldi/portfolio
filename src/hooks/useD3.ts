import React, {useEffect, useRef, useState} from "react";
import * as d3 from 'd3';
import {BaseType} from "d3";
import GET_NEWS, {NewsInventoryData} from "../features/CircularPacking/queries/getNews";
import {useQuery} from "@apollo/client";
const useD3 = (renderSvgFn: ((svg: d3.Selection<BaseType, unknown, HTMLElement, SVGElement>) => d3.Selection<BaseType, unknown, HTMLElement, SVGElement>), data: NewsInventoryData | undefined) => {
  const ref = useRef(null);
  const [prevRef, setPrevRef] = useState(null)
    useEffect(() => {
        console.log(ref, data)
        if (ref.current != null){
            setPrevRef(ref.current)
            renderSvgFn(d3.select(ref.current))
        } else {
            ref.current = null
            if(prevRef != null)
                renderSvgFn(d3.select(prevRef))

        }
        return () => {
            ref.current = null
        }
    }, [renderSvgFn, data])
    return ref;
}

export default useD3;