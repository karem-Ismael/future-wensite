import styled from "styled-components"
const DIV =styled.div`
background-color:${(props)=> props.color ? props.color : "#fff" };
border-radius:5px;
height:100%;
direction:rtl;
box-shadow:0px 1px 15px 1px rgba(69,65,78,0.08);
border:none;
transition:all 0.4s ease-in-out 0s;
list-style-type:none;
margin-bottom:20px;
position:relative;
.rct-block-content{
padding:1.25rem 1.25rem ;
.card-title{
    text-align:center;
    color:#D3B166;
    font-size:20px;

}
.service-title{
    color:#005D5E;
    text-align:center;
    padding:20px 0px;
    width:80%;
}
.service-description{
    text-align:center;
    color:#9C9C9C;
    padding:20px 0px;

}
li.item{
    padding:10px 0px;
}
.rate{
    text-align:center;
    margin:13px;
}
.btn-details{
    text-align:center;
    margin-top:10px;
}
.discount{
    position: absolute;
    top: 0px;
    left: 10px;
    text-align: center;
    background:#D3B166;
    color:#fff;
    width:15%;
    min-width:57px;
    padding:10px;
}
}
`
const CardComponent =({color,children})=>{
return(
    <DIV color={color}>
        <div className="rct-block-content">
            {children}
        </div>

    </DIV>
)
}
export default  CardComponent