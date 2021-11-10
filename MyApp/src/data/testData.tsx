import React from 'react';

const paymentMethods = () => {
  let payments: string[] = [];
  const setPayments = (payment: string) => {
    payments.push(payment);
  };
  const getPayments = () => {
    return payments;
  };
};

export default paymentMethods;
