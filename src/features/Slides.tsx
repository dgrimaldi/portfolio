import SlideImage from "../components/SlideImage";
import Item from "../interfaces/Item";

const slides: Item[] = ['./images/slide1.png', './images/slide2.png', './images/slide3.png'].map((src: string = '') => ({
            key: src,
            node: SlideImage({src}),
            title: src,
            href:  ('#').concat(src)
        })
)

export default slides