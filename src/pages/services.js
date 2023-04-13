import LayoutComponent from '../Components/Layout';
import { Col, Rate, Row,Select,Button  } from 'antd';
import styled from 'styled-components';
import CardComponent from '../Components/Card';

const selectStyle={
    width:"240px"
}
const DIVContent = styled.div`
transform:translateY(-300px);
direction:rtl;
    padding:50px;
.select-title{
    color:#fff;
    align-self:center;
}
.select-content{
    gap:10px;
}
.ant-select-arrow{
    color:#005D5E
}
`;
function Services() {
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };
    return (
        <LayoutComponent>
            <DIVContent >
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
                                            options={[
                                                {
                                                    value: 'jack',
                                                    label: 'Jack',
                                                },
                                                {
                                                    value: 'lucy',
                                                    label: 'Lucy',
                                                },
                                                {
                                                    value: 'tom',
                                                    label: 'Tom',
                                                },
                                            ]}
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
                    <Col md={8} sm={12} xs={24}>
                        <CardComponent>
                                            <span className='discount'>
                                            %20 <br/>
                                            دعم
                                            </span>
                                            <p className='card-title'>
                                            مجموعة ألفا للاستشارات المهنية
                                            </p>
                                            <h2 className='service-title'>
                                            التهيئة الضريبية
                                            </h2>
                                            <p className='service-description'>
                                            تهدف إلى إعداد وتهيئة حسابات الضريبة وذلك لتمكين الوقف من معرفة الضريبة المستحقة عليه بشكل صحيح
                                            </p>
                                            <hr/>
                                            <li className='item'>
                                            <span>
                                            التصنيف : 
                                            </span>
                                            <span>
                                            محاسبي
                                            </span>
                                            </li>
                                            <li className='item'>
                                                <span>
                                                التكلفة :
                                                </span>
                                                <span>
                                                 حسب طلب الوقف

                                                </span>
                                            </li>
                                            <li className='item'>
                                                <span>
                                                مدة التنفيذ :
                                                </span>
                                                <span>
                                                 30 يوم

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
                    <Col md={8} sm={12} xs={24}>
                    <CardComponent>
                                            <span className='discount'>
                                            %20 <br/>
                                            دعم
                                            </span>
                                            <p className='card-title'>
                                            مجموعة ألفا للاستشارات المهنية
                                            </p>
                                            <h2 className='service-title'>
                                            التهيئة الضريبية
                                            </h2>
                                            <p className='service-description'>
                                            تهدف إلى إعداد وتهيئة حسابات الضريبة وذلك لتمكين الوقف من معرفة الضريبة المستحقة عليه بشكل صحيح
                                            </p>
                                            <hr/>
                                            <li className='item'>
                                            <span>
                                            التصنيف : 
                                            </span>
                                            <span>
                                            محاسبي
                                            </span>
                                            </li>
                                            <li className='item'>
                                                <span>
                                                التكلفة :
                                                </span>
                                                <span>
                                                 حسب طلب الوقف

                                                </span>
                                            </li>
                                            <li className='item'>
                                                <span>
                                                مدة التنفيذ :
                                                </span>
                                                <span>
                                                 30 يوم

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
                    <Col md={8} sm={12} xs={24}>
                    <CardComponent>
                                            <span className='discount'>
                                            %20 <br/>
                                            دعم
                                            </span>
                                            <p className='card-title'>
                                            مجموعة ألفا للاستشارات المهنية
                                            </p>
                                            <h2 className='service-title'>
                                            التهيئة الضريبية
                                            </h2>
                                            <p className='service-description'>
                                            تهدف إلى إعداد وتهيئة حسابات الضريبة وذلك لتمكين الوقف من معرفة الضريبة المستحقة عليه بشكل صحيح
                                            </p>
                                            <hr/>
                                            <li className='item'>
                                            <span>
                                            التصنيف : 
                                            </span>
                                            <span>
                                            محاسبي
                                            </span>
                                            </li>
                                            <li className='item'>
                                                <span>
                                                التكلفة :
                                                </span>
                                                <span>
                                                 حسب طلب الوقف

                                                </span>
                                            </li>
                                            <li className='item'>
                                                <span>
                                                مدة التنفيذ :
                                                </span>
                                                <span>
                                                 30 يوم

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
                </Row>
            </DIVContent>

        </LayoutComponent>
    )
}
export default Services