import { Layout, Space,Row,Col,Button} from 'antd';
import Image from 'next/image'
import Script from "next/script.js";
import LayoutComponent from '../Components/Layout';
import Head from 'next/head'
import HomePage from '@/Components/HomePage';
const App = ({services}) => (
<LayoutComponent>
<Head>
      <link rel="stylesheet" href="https://cdn.moyasar.com/mpf/1.7.3/moyasar.css" />

</Head>
  {/* karem */}
  <HomePage services={services} />
  <Script src="https://polyfill.io/v3/polyfill.min.js?features=fetch"/>
  <Script src="https://cdn.moyasar.com/mpf/1.7.3/moyasar.js"/>
</LayoutComponent>

);
export default App;    
export async function getServerSideProps(){
  const response =await fetch("https://estithmar.arabia-it.net/api/service")
  const data =await response.json()
  const response2=await fetch("https://estithmar.arabia-it.net/api/admin/service-provider-fields")
  const data2=await response2.json()
  return{
      props:{
          services:data,
          fields:data2
      }
  }
}