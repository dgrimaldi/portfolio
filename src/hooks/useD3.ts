import {useEffect, useRef} from "react";
import * as d3 from 'd3';
import {BaseType} from "d3";
const useD3 = (renderSvgFn: (svg: d3.Selection<BaseType, unknown, HTMLElement, SVGElement>) => d3.Selection<BaseType, unknown, HTMLElement, SVGElement>) => {
  const ref = useRef(null)

    useEffect(() => {
        if (ref.current != null){
            renderSvgFn(d3.select(ref.current))
        }
        return () => {
            ref.current = null
        }
    }, [renderSvgFn])
    return ref;
}

export default useD3;