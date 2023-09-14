import { Layout, Space,Row,Col,Button} from 'antd';
import Image from 'next/image'
import Script from "next/script.js";
import LayoutComponent from '../Components/Layout';
import Head from 'next/head'
import HomePage from '@/Components/HomePage';
const App = () => (
<LayoutComponent>
<Head>
      <link rel="stylesheet" href="https://cdn.moyasar.com/mpf/1.7.3/moyasar.css" />

</Head>
  {/* karem */}
  <HomePage />
  <Script src="https://polyfill.io/v3/polyfill.min.js?features=fetch"/>
  <Script src="https://cdn.moyasar.com/mpf/1.7.3/moyasar.js"/>
</LayoutComponent>

);
export default App;    