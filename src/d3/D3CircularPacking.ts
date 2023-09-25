import { SimulationNodeDatum} from "d3";
import * as d3 from "d3";
import {NewsInventoryData} from "../features/CircularPacking/queries/getNews";

export const graphDimension: { width: number, height: number } = { width: 200, height: 600};
const radius = 100;
export const d3CircularPacking = (svg: d3.Selection<d3.BaseType, unknown, HTMLElement, SVGElement>, numberOfCirlces: NewsInventoryData | undefined) => {


    const links = d3.range(numberOfCirlces?.articles.length ?? 100).map((i) => ({source: i, target: Math.floor(Math.random() * i)}))

    // create dummy data -> just one element per circle
    let data: SimulationNodeDatum[] = d3.range((numberOfCirlces?.articles.length ?? 100) +1).map((i) => ({
        // x: (i % 25) * (radius + 1) * 0.45,
        // y: Math.floor(i / 25) * (radius + 1) * 0.45,
        index: i,
        x: Math.random() * graphDimension.width,
        y: Math.random() * graphDimension.height
    }))

    const link = svg
        .selectAll(".link")
        .data(links)
        .join("line")
        .attr("stroke", 'rgba(238,238,238,0.29)')
        .style("stroke-width", 2.5);

    const node = svg
        .selectAll(".node")
        .data(data)
        .join("circle")
        .attr("r", 12)
        .style("fill", "#69b3a2")
        .style("fill-opacity", 0.3)
        .attr("stroke", "#69a2b2")
        .style("stroke-width", 2.5)
        .classed("node", true)
        .classed("fixed", d => d.fx !== undefined);

    const text = svg
        .selectAll(".text")
        .data(data)
        .join("text")
        .text(({index   }) => numberOfCirlces?.articles[index ?? 0]?.title || "io")
        .attr("stroke", '#9c69b2')
        .on("click", (_, {index}) => console.log(numberOfCirlces?.articles[index ?? 0].description))


    const simulation = d3
        .forceSimulation()
        .nodes(data)
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(graphDimension.width *2, graphDimension.height /2))
        .force("link", d3.forceLink(links))
        .on("tick", tick);

    const drag = d3
        .drag()
        .on("start", dragstart)
        // @ts-ignore
        .on("drag", dragged)
        .on("end", dragended)

    // @ts-ignore
    node.call(drag)

    function tick() {
        link
            .attr("x1", (d :any)=> d.source.x)
            .attr("y1", (d :any)=> d.source.y)
            .attr("x2", (d :any)=> d.target.x)
            .attr("y2", (d :any)=> d.target.y);
        node
            .attr("cx", (d: any) => d.x)
            .attr("cy", (d: any) => d.y);
        text
            .attr("x", (d :any)=> d.x)
            .attr("y", (d :any)=> d.y)
    }

    function dragstart(this: any) {
        d3.select(this).classed("fixed", true);
    }

    function dragged(event: { x: any; y: any; }, d: { fx: any; fy: any; }) {
            d.fx = event.x;
            d.fy = event.y;
            simulation.alpha(1).restart();
    }
    function dragended(event: any) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
    }


    // Initialize the circle: all located at the center of the svg area
    // const node = svg
    //     .selectAll("g")
    //     .data(data)
    //     .enter()
    //     .append("g")
    //     .attr("class", "container")
    //     .call(
    //         // @ts-ignore
    //         d3.drag()
    //             .on("start", started)
    //             .on("drag", dragged)
    //             .on("end", ended)
    //     );
    //
    //  node.append("text")
    //     .text((_,i) => i)// @ts-ignore
    //     .attr("x", d => d.x)// @ts-ignore
    //     .attr("y", d => d.y)
    //     .style("fill", "#69b3a2")
    //     .style("fill-opacity", 0.3)
    //     .attr("stroke", "#69a2b2")
    //
    // node.append("circle")
    //     .attr("r", 20)// @ts-ignore
    //     .attr("cx", d => d.x+7.5)// @ts-ignore
    //     .attr("cy", d => d.y-5)
    //     .style("fill", "#69b3a2")
    //     .style("fill-opacity", 0.3)
    //     .attr("stroke", "#69a2b2")
    //     .style("stroke-width", 2.5)
    //     .call(
    //         // @ts-ignore
    //         d3.drag()
    //             .on("start", started)
    //             .on("drag", dragged)
    //             .on("end", ended)
    //     );
    //     // .data(data);
    // function ticked() {
    //     node
    //         .attr("x", (d:any) => d.x)
    //         .attr("y", (d:any)  => d.y);
    // }
    //
    // // const simulation = d3.forceSimulation(data)
    // //     .force("collide", d3.forceCollide(radius).iterations(4))
    // //     .on("tick", ticked);
    //
    // const simulation = d3.forceSimulation(data)
    //     .force("link", d3.forceLink(links).id(d => d.id))
    //     .force("charge", d3.forceManyBody())
    //     .force("center", d3.forceCenter(width / 2, height / 2))
    //     .on("tick", draw);
    // function started(event:any) {
    //     if (!event.active) simulation.alphaTarget(0.3).restart();
    //     event.subject.fx = event.subject.x;
    //     event.subject.fy = event.subject.y;
    // }
    //
    // function dragged(event:any) {
    //     event.subject.fx = event.x;
    //     event.subject.fy = event.y;
    // }
    //
    // function ended(event:any) {
    //     if (!event.active) simulation.alphaTarget(0);
    //     event.subject.fx = null;
    //     event.subject.fy = null;
    // }

    //     const el = node
    //         .enter()
    //         .append("g")
    //         .attr("transform", function(d) { return 'translate(' + d.x + ' '+ d.y + ')'; })
    //         .call(dragged)
    //
    //     el.append("circle")
    //         .attr("r", 15)
    //         .attr("cx", graphDimension.width)
    //         .attr("cy", 250)
    //         .style("fill", "#69b3a2")
    //         .style("fill-opacity", 0.3)
    //         .attr("stroke", "#69a2b2")
    //         .style("stroke-width", 4)
    //
    //     el.append("text")
    //         .attr("dy", function(d){return 20})
    //         .text(function(d){return "ewqgdfgfdg"})
    //
    // // @ts-ignore
    //     el.call(d3.drag()
    //         .on("start", started)
    //         .on("drag", dragged)
    //         .on("end", ended));
    //
    // function ticked() {
    //         node
    //             .attr("cx", (d:any) => d.x)
    //             .attr("cy", (d:any)  => d.y);
    //     }
    //
    //
    //     const simulation = d3.forceSimulation(data)
    //         .force("collide", d3.forceCollide(radius).iterations(4))
    //         .on("tick", ticked);
    //     function started(event:any) {
    //         if (!event.active) simulation.alphaTarget(0.3).restart();
    //         event.subject.fx = event.subject.x;
    //         event.subject.fy = event.subject.y;
    //     }
    //
    //     function dragged(event:any) {
    //         event.subject.fx = event.x;
    //         event.subject.fy = event.y;
    //     }
    //
    //     function ended(event:any) {
    //         if (!event.active) simulation.alphaTarget(0);
    //         event.subject.fx = null;
    //         event.subject.fy = null;
    //     }
    simulation.stop();
    return svg

}

// export const d3CircularPacking = (svg: d3.Selection<d3.BaseType, unknown, HTMLElement, SVGElement>, numberOfCirlces: NewsInventoryData) => {
//
//     // create dummy data -> just one element per circle
//     let data: SimulationNodeDatum[] = d3.range(numberOfCirlces.totalResults).map(() => ({}))
//
//     // Initialize the circle: all located at the center of the svg area
//     const node = svg.append("g")
//         .selectAll("circle")
//         .data(data)
//         .enter()
//         .append("g")
//         .append("circle")
//         .attr("r", 15)
//         .attr("cx", graphDimension.width)
//         .attr("cy", 250)
//         .style("fill", "#69b3a2")
//         .style("fill-opacity", 0.3)
//         .attr("stroke", "#69a2b2")
//         .style("stroke-width", 4)
//
//
//     // @ts-ignore
//     node.call(d3.drag()
//         .on("start", started)
//         .on("drag", dragged)
//         .on("end", ended));
//
//     function ticked() {
//         node
//             .attr("cx", (d:any) => d.x)
//             .attr("cy", (d:any)  => d.y);
//     }
//
//
//     const simulation = d3.forceSimulation(data)
//         .force("collide", d3.forceCollide(radius).iterations(4))
//         .on("tick", ticked);
//     function started(event:any) {
//         if (!event.active) simulation.alphaTarget(0.3).restart();
//         event.subject.fx = event.subject.x;
//         event.subject.fy = event.subject.y;
//     }
//
//     function dragged(event:any) {
//         event.subject.fx = event.x;
//         event.subject.fy = event.y;
//     }
//
//     function ended(event:any) {
//         if (!event.active) simulation.alphaTarget(0);
//         event.subject.fx = null;
//         event.subject.fy = null;
//     }
//     return svg
//
// }