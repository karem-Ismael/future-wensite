import { Col, Row } from "antd"
import { useSelector } from "react-redux"

const ProfileImage =()=>{
    const {profileImage} =useSelector((state)=>state.profile) || {}
return(
    <Row>
        <Col md={4} sm={6} xs={24}>
        <img className="w-100" src= {profileImage ? profileImage : "/assets/images/no-image.jpg"}  height={150}/>
        </Col>
    </Row>
)
}
export default ProfileImage