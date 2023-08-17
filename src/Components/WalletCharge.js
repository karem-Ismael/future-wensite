import { Button, Col, Row } from "antd"
import { useRouter } from "next/router"
import { useState } from "react"
import Iframe   from "react-iframe"
import { FormGroup, Input, Label } from "reactstrap"

const WalletChargeComponent=()=>{
   const [amount,setAmount]=useState()
const router=useRouter()
return(
    <div>
        <Row gutter={[16,16]}> 
        <Col md={8} sm={12} xs={24}>
        <FormGroup>
              <Label for="exampleSelect">مبلغ الشحن </Label>
              <Input
                id="exampleSelect"
                name="select"
                type="text"       
                style={{ borderColor: "#D4B265" }}
                onChange={(e)=>setAmount(e.target.value)}
              />
               
    </FormGroup>
            
        </Col> 
        <Col md={6} sm={12} xs={24} style={{alignSelf:"center"}}>
            <Button size="large" onClick={()=>{
                window.open(`https://estithmar.arabia-it.net/moyasar?token=${localStorage.getItem("token")}&amount=${amount}`,"_blank")
                router.push("/profile")
            }}>
                شحن المحفظة 
            </Button>
        </Col>
        </Row>
   
{/* <Iframe url={`https://estithmar.arabia-it.net/moyasar?token=${localStorage.getItem("token")}&amount=10`} */}
       {/* /> */}
    
</div>
)
}
export default WalletChargeComponent