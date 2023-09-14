
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import { Col, Rate, Row, Select, Button  } from 'antd';

import CardComponent from './Card';
import { useRouter } from 'next/router';

const items = [
  {
    src: 'https://picsum.photos/id/123/1200/400',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/456/1200/400',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/1200/400',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];

function Slider2({clientServices,inHome}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
const router=useRouter()
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };


  const slides = clientServices?.length  &&  items.map((item,index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
                       <Row gutter={[16, 16]}>
                       {
                              <Col key={clientServices[index].id} md={24} sm={24} xs={24}>
       
                                <CardComponent>
                                  {
                                    inHome ? null: 
                                    <span className='discount'>
                                        {clientServices[index]?.support_ratio} % <br />
                                        دعم
                                    </span>
                                  }
                                    
                                    <p className='card-title'>
                                        {   clientServices[index]?.service_provider?.company_name_ar}
                                    </p>
                                    <h2 className='service-title'>
                                        { clientServices[index]?.title}
                                    </h2>
                                    <p className='service-description'>
                                        { clientServices[index]?.description}
                                    </p>
                                    <hr />
                              {
                                inHome ? null: 
                                <>
                                      <li className='item'>
                                        <span className='list-title'>
                                            التصنيف :
                                        </span>
                                        <span className='list-value'>
                                            {oneservice?.field?.name}
                                        </span>
                                    </li>
                                    <li className='item'>
                                        <span className='list-title'>
                                            التكلفة :
                                        </span>
                                        <span className='list-value'>
                                            حسب طلب الوقف

                                        </span>
                                    </li>
                                    <li className='item'>
                                        <span className='list-title'>
                                            مدة التنفيذ :
                                        </span>
                                        <span className='list-value'>
                                            {oneservice.executive_time}{oneservice.executive_time_type}

                                        </span>
                                    </li>
                                </>
                              }
                                    <div className='rate' >
                                        <Rate allowHalf defaultValue={2.5} disabled />
                                    </div>
                                    <div className="btn-details">
                                        <Button onClick={() => router.push(`/services/${clientServices[index].id}`)} style={{ width: "50%", background: "#150941", color: "#fff", border: "none", borderRadius: "0px" }} size={"large"}>التفاصيل</Button>
                                    </div>
                                </CardComponent>
                            </Col>
                        // clientServices?.map((oneservice) => (
                        //     <Col key={oneservice.id} md={24} sm={24} xs={24}>
       
                        //         <CardComponent>
                        //           {
                        //             inHome ? null: 
                        //             <span className='discount'>
                        //                 {oneservice.support_ratio} % <br />
                        //                 دعم
                        //             </span>
                        //           }
                                    
                        //             <p className='card-title'>
                        //                 { inHome ?"الحصاد محاسبون" : oneservice?.service_provider?.company_name_ar}
                        //             </p>
                        //             <h2 className='service-title'>
                        //                 { inHome ? "إدارة التحقيق والمراجعة": oneservice.title}
                        //             </h2>
                        //             <p className='service-description'>
                        //                 { inHome ? "إدارة عمليات التحقيق الداخلي والتنسيق مع لجنة المراجعة الداخلية ومراجع الحسابات الخارجي": oneservice.description}
                        //             </p>
                        //             <hr />
                        //       {
                        //         inHome ? null: 
                        //         <>
                        //               <li className='item'>
                        //                 <span className='list-title'>
                        //                     التصنيف :
                        //                 </span>
                        //                 <span className='list-value'>
                        //                     {oneservice?.field?.name}
                        //                 </span>
                        //             </li>
                        //             <li className='item'>
                        //                 <span className='list-title'>
                        //                     التكلفة :
                        //                 </span>
                        //                 <span className='list-value'>
                        //                     حسب طلب الوقف

                        //                 </span>
                        //             </li>
                        //             <li className='item'>
                        //                 <span className='list-title'>
                        //                     مدة التنفيذ :
                        //                 </span>
                        //                 <span className='list-value'>
                        //                     {oneservice.executive_time}{oneservice.executive_time_type}

                        //                 </span>
                        //             </li>
                        //         </>
                        //       }
                        //             <div className='rate' >
                        //                 <Rate allowHalf defaultValue={2.5} disabled />
                        //             </div>
                        //             <div className="btn-details">
                        //                 <Button onClick={() => router.push(`/services/${oneservice.id}`)} style={{ width: "50%", background: "#150941", color: "#fff", border: "none", borderRadius: "0px" }} size={"large"}>التفاصيل</Button>
                        //             </div>
                        //         </CardComponent>
                        //     </Col>
                        // ))
                        
                    }
                    {
                        clientServices?.data?.data.map((oneservice) => (
                            <Col key={oneservice.id} md={8} sm={24} xs={24}>
       
                                <CardComponent inHome={true}>
                                <span className='discount'>
                                                {oneservice.support_ratio} % <br/>
                                                دعم
                                                </span>
                                                <p className='card-title'>
                                                    {oneservice.service_provider.company_name_ar}
                                                </p>
                                                <h2 className='service-title'>
                                                 {oneservice.title}
                                                </h2>
                                                <p className='service-description'>
                                                    {oneservice.description}
                                                </p>
                                                <hr/>
                                                <li className='item'>
                                                <span className='list-title'>
                                                التصنيف :     
                                                </span>
                                                <span className='list-value'>
                                                {oneservice.field.name}
                                                </span>
                                                </li>
                                                <li className='item'>
                                                    <span className='list-title'>
                                                    التكلفة :
                                                    </span>
                                                    <span className='list-value'>
                                                     حسب طلب الوقف
    
                                                    </span>
                                                </li>
                                                <li className='item'>
                                                    <span className='list-title'>
                                                    مدة التنفيذ :
                                                    </span>
                                                    <span className='list-value'>
                                                     {oneservice.executive_time}{oneservice.executive_time_type} 
    
                                                    </span>
                                                </li>
                                                <div className='rate' >
                                                <Rate allowHalf defaultValue={2.5} disabled />
                                                </div>
                                                <div className="btn-details" style={{position:"absolute",bottom:"0px",width:"100%",marginBottom:"10px"}}>
                                                <Button   onClick={()=>router.push(`/services/${oneservice.id}?service_provider=${oneservice.service_provider.user_id}`)} style={{width:"50%" ,background:"#150941",color:"#fff",border:"none",borderRadius:"0px"}}size={"large"}>التفاصيل</Button>
                                                </div>
                                </CardComponent>
                            </Col>
                        ))
                        
                    }
                </Row>
        
      </CarouselItem>
    );
  });
  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
    
    </Carousel>
  );
}

export default Slider2;