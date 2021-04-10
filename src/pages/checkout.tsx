import Head from "next/head";
import { useState } from "react";
import { CheckoutForm } from "../components/checkoutPage/CheckoutForm";
import { OrederConfirmed } from "../components/checkoutPage/OrederConfirmed";
import { PaymentCheckout } from "../components/checkoutPage/PaymentCheckout";
import { StepBar } from "../components/checkoutPage/StepBar";
import { Layout } from "../components/Layout/Layout";

const checkout = () => {
   const [adressStepComplete, setAdressStepComplete] = useState<boolean>(false);
   const [
      orderPaymentStepComplete,
      setOrderPaymentStepComplete,
   ] = useState<boolean>(false);
   const [orderInfo, setOrderInfo] = useState({});
   console.log(orderInfo);

   return (
      <Layout>
         <Head>
            <title>Checkout | Technolux BD</title>
         </Head>

         <>
            <StepBar
               adressStepComplete={adressStepComplete}
               orderPaymentStepComplete={orderPaymentStepComplete}
            />
            {!adressStepComplete && !orderPaymentStepComplete && (
               <CheckoutForm
                  setAdressStepComplete={setAdressStepComplete}
                  setOrderInfo={setOrderInfo}
               />
            )}
            {adressStepComplete && !orderPaymentStepComplete && (
               <PaymentCheckout
                  setOrderPaymentStepComplete={setOrderPaymentStepComplete}
                  setAdressStepComplete={setAdressStepComplete}
                  setOrderInfo={setOrderInfo}
                  orderInfo={orderInfo}
               />
            )}
            {adressStepComplete && orderPaymentStepComplete && (
               <OrederConfirmed />
            )}
         </>
      </Layout>
   );
};

export default checkout;
