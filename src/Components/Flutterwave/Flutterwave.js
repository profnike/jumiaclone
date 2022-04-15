import React from 'react';
import { FlutterWaveButton } from 'flutterwave-react-v3';
import { useNavigate } from 'react-router-dom';
import cartContext from "../../Context/Cart/CartContext";
import { useContext } from 'react';



export default function App() {
  
  const{clearallitem}=useContext(cartContext)
  let customerDetail = JSON.parse(localStorage.getItem('addr-details'));
  let customerInfo = JSON.parse(localStorage.getItem('jumia-user'));
  let amt = JSON.parse(localStorage.getItem('goods-amt'));
  
  let email=customerInfo.email
  let phone=customerDetail.phone
  let first=customerDetail.first
  let last=customerDetail.last
  let customerName=first +" "+ last
  console.log(customerDetail)
    const navigate=useNavigate()
   const config = {
    // public_key: 'FLWPUBK-**************************-X',
    public_key:'FLWPUBK_TEST-ab1fabc93f0a6002ce24acf71270d3c4-X',
    tx_ref: Date.now(),
    amount: amt,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: email,
      phonenumber:phone,
      name: customerName,
    },
    customizations: {
      title: 'Jumiaclone',
      description: 'Payment for items',
    //   logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    // logo:<FlexLogo/>
},
  };

  const fwConfig = {
    ...config,
    text: 'PAY WITH FLUTTERWAVE!',
    callback: (response) => {
       console.log(response);
       localStorage.setItem('clientRes', JSON.stringify(response))
      // closePaymentModal() // this will close the modal programmatically
      clearallitem()
       navigate("/Paymentsuccess")
    },
    onClose: () => {
        navigate("/")
    },
  };

  return (
    <div className="App">
     {/* <h1>Hello Test user</h1> */}
      <FlutterWaveButton {...fwConfig} style={{backgroundColor:"yellow"}} />
    </div>
  );
}