import {SimulationNodeDatum} from "d3";
import * as d3 from "d3";
const graphDimension: { width: number, height: number } = { width: 600, height: 450};
const radius = 100;
export const d3CircularPacking = (svg: d3.Selection<d3.BaseType, unknown, HTMLElement, SVGElement>) => {

        // create dummy data -> just one element per circle
        let data: SimulationNodeDatum[] = d3.range(1000).map(() => ({}))

        // Initialize the circle: all located at the center of the svg area
        const node: d3.Selection<SVGCircleElement, SimulationNodeDatum, SVGGElement, unknown> = svg.append("g")
            .selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr("r", 15)
            .attr("cx", graphDimension.width)
            .attr("cy", 250)
            .style("fill", "#69b3a2")
            .style("fill-opacity", 0.3)
            .attr("stroke", "#69a2b2")
            .style("stroke-width", 4)


        // @ts-ignore
        node.call(d3.drag()
            .on("start", started)
            .on("drag", dragged)
            .on("end", ended));
        function ticked() {
            node
                .attr("cx", (d:any) => d.x)
                .attr("cy", (d:any)  => d.y);
        }

        const simulation = d3.forceSimulation(data)
            .force("collide", d3.forceCollide(radius).iterations(4))
            .on("tick", ticked);
        function started(event:any) {
            if (!event.active) simulation.alphaTarget(0.3).restart();
            event.subject.fx = event.subject.x;
            event.subject.fy = event.subject.y;
        }

        function dragged(event:any) {
            event.subject.fx = event.x;
            event.subject.fy = event.y;
        }

        function ended(event:any) {
            if (!event.active) simulation.alphaTarget(0);
            event.subject.fx = null;
            event.subject.fy = null;
        }
        return svg

}