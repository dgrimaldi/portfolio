import React, { useRef} from "react";
import {Button, Carousel, Space} from 'antd';
import Item from "../interfaces/Item";
import {CarouselRef} from "antd/es/carousel";

const CustomCarousel:React.FC<ICustomCarousel> = ({items}) => {
    const ref = useRef<CarouselRef>(null)
    const onClick = (value: 'prev' | 'next') => {
        if(ref.current) {
            if(value === 'prev') ref.current.prev()
            else ref.current.next()
        }
    }
    return (
        <>
      <Carousel
          effect="fade"
          dotPosition={"top"}
          style={{height: "auto"}}
          ref={ref}
      >
          {items.map(({node, key}) => (
              <div style={{height: "auto"}} id={key}>
                  {node}
              </div>
          ))}
      </Carousel>
    <Space>
        <Button type="primary" onClick={()=> onClick('prev')}>Prev</Button>
        <Button onClick={() => onClick('next')}>Next</Button>
    </Space>
    </>
  )
}

type ICustomCarousel = {
    items: Item[]
}

export default CustomCarousel