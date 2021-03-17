import Head from "next/head";
import { useState } from "react";
import { CheckoutForm } from "../components/checkoutPage/CheckoutForm";
import { PaymentCheckout } from "../components/checkoutPage/PaymentCheckout";
import { StepBar } from "../components/checkoutPage/StepBar";
import { Layout } from "../components/Layout/Layout";

const checkout = () => {
   const [adressStepComplete, setAdressStepComplete] = useState<boolean>(false);
   const [
      orderPaymentStepComplete,
      setOrderPaymentStepComplete,
   ] = useState<boolean>(false);

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
               <CheckoutForm setAdressStepComplete={setAdressStepComplete} />
            )}
            {adressStepComplete && !orderPaymentStepComplete && (
               <PaymentCheckout />
            )}
         </>
      </Layout>
   );
};

export default checkout;
