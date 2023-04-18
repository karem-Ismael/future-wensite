import LayoutComponent from '../Components/Layout';
import { Col, Rate, Row,Select,Button  } from 'antd';
import styled from 'styled-components';
import CardComponent from '../Components/Card';
import { Grid, Tag } from 'antd';
const { useBreakpoint } = Grid;

const selectStyle={
    width:"220px"
}
const DIVContent = styled.div`
transform:translateY(-300px);
direction:rtl;
    padding:50px;
.select-title{
    color:#fff;
    align-self:center;
    min-width:70px;
}
.select-content{
    gap:10px;
}
.ant-select-arrow{
    color:#005D5E
}
`;
function Services({services}) {
    const screens = useBreakpoint();

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };
    console.log(services,"services")
    return (
        <LayoutComponent>
            <DIVContent className='container' style={{padding:"0px"}}>
                <Row>
                    <Col md={24} sm={24} xs={24}>
                        <CardComponent color={"#005D5E"} >
                            <Row gutter={[16,16]}>
                                <Col md={6} sm={12}>
                                    <Row className='select-content'>
                                        <span className='select-title'>التصنيف</span>
                                        <Select
                                        size='large'
                                        style={selectStyle}
                                            showSearch
                                            placeholder="عرض الكل"
                                            optionFilterProp="children"
                                            onChange={onChange}
                                            onSearch={onSearch}
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            options={[]}
                                        />
                                    </Row>
                                </Col>

                                <Col md={6} sm={12}>
                                    <Row className='select-content'>
                                        <span className='select-title'>مقدار الدعم</span>
                                        <Select
                                        size='large'
                                        style={selectStyle}
                                            showSearch
                                            placeholder="عرض الكل"
                                            optionFilterProp="children"
                                            onChange={onChange}
                                            onSearch={onSearch}
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            options={[]}/>
                                    </Row>
                                </Col>


                                <Col md={6} sm={12}>
                                    <Row className='select-content'>
                                        <span className='select-title'>مدة التنفيذ</span>
                                        <Select
                                        size='large'
                                        style={selectStyle}
                                            showSearch
                                            placeholder="عرض الكل"
                                            optionFilterProp="children"
                                            onChange={onChange}
                                            onSearch={onSearch}
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            options={[]}
                                        />
                                    </Row>
                                </Col>

                                <Col md={6} sm={12}>
                                    <Row className='select-content'>
                                        <span className='select-title'>التكلفة</span>
                                        <Select
                                        size='large'
                                        style={selectStyle}
                                            showSearch
                                            placeholder="عرض الكل"
                                            optionFilterProp="children"
                                            onChange={onChange}
                                            onSearch={onSearch}
                                            filterOption={(input, option) =>
                                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            options={[
                                               
                                            ]}
                                        />
                                    </Row>
                                </Col>
                              
                                
                            </Row>
                        </CardComponent>
                    </Col>
                </Row>
                <Row  gutter={[16, 16]}>
                    {
                        services?.data?.data.map((oneservice)=>(
                            <Col key={oneservice.id} md={8} sm={12} xs={24}>
                            <CardComponent>
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
                                                <span>
                                                التصنيف : 
                                                </span>
                                                <span>
                                                {oneservice.field.name}
                                                </span>
                                                </li>
                                                <li className='item'>
                                                    <span>
                                                    التكلفة :
                                                    </span>
                                                    <span>
                                                      {oneservice.cost} 
    
                                                    </span>
                                                </li>
                                                <li className='item'>
                                                    <span>
                                                    مدة التنفيذ :
                                                    </span>
                                                    <span>
                                                     {oneservice.executive_time}{oneservice.executive_time_type} 
    
                                                    </span>
                                                </li>
                                                <div className='rate'>
                                                <Rate allowHalf defaultValue={2.5} disabled />
                                                </div>
                                                <div className="btn-details">
                                                <Button  style={{width:"50%" ,background:"#005D5E",color:"#fff",border:"none",borderRadius:"0px"}}size={"large"}>التفاصيل</Button>
                                                </div>
                            </CardComponent>
                        </Col>
                        ))
                    }
                </Row>
            </DIVContent>

        </LayoutComponent>
    )
}
export default Services
export async function getServerSideProps(){
    const response =await fetch("https://estithmar.arabia-it.net/api/service")
    const data =await response.json()
    return{
        props:{
            services:data
        }
    }
}