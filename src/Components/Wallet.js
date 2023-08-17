import { Col, Rate, Row,Select,Button  } from 'antd';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const Wallet =()=>{
  const router = useRouter()

    const { WalletTransactionsArr,WalletBalance } = useSelector((state) => state.profile) || {}

    return(
        <Row gutter={[16,16]}>
            <Col md={6} sm={24} xs={24} className='text-center'>
                <h4>
            الرصيد الكلي

                </h4>
                <span className='text-center val' style={{fontSize:"30px"}}>
                                            {
                                                WalletBalance?.valid_balance + WalletBalance?.pending_balance
                                            }
                                            <sub className='currency'>
                                                ر.س

                                            </sub>
                                        </span>
            </Col>
            <Col md={6} sm={24} xs={24} className='text-center'>
                <h4>
                الرصيد المعلق
                </h4>
                <span className='text-center val' style={{fontSize:"30px"}}>
                                            {
                                                WalletBalance?.pending_balance
                                            }
                                            <sub className='currency'>
                                                ر.س

                                            </sub>
                                        </span>
            </Col>
            <Col md={6} sm={24} xs={24} className='text-center'>
                <h4>
                الرصيد المتاح
                </h4>
                <span className='text-center val' style={{fontSize:"30px"}}>
                                            {
                                                WalletBalance?.valid_balance
                                                
                                            }
                                            <sub className='currency'>
                                                ر.س

                                            </sub>
                                        </span>
            </Col>
            <Col md={6} sm={24} xs={24}>
          <Button size='large' onClick={()=>router.push("/wallet/wallet-charge")} className="w-75 text-center" style={{color:"#fff",background:"#150941",minHeight:"50px",alignSelf:"center"}}>
          شحن محفظتي
             </Button>
            </Col>
            
        </Row>
    )
}
export default Wallet