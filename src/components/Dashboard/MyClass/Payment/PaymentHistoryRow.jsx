import React from 'react';

const PaymentHistoryRow = ({ payment, index }) => {
  const { email, id, price, date, status, transactionId } = payment;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{id}</td>
      <td>{transactionId}</td>
      <td>{date}</td>
      <td className='text-green-500 text-sm font-bold'>${price}</td>
    </tr>

  );
};

export default PaymentHistoryRow;