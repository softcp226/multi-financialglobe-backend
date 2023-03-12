const Transaction = require("../model/transaction");

const create_withdrawal_transaction = async (req) => {


try {
  
  let currentdate = new Date();
  let datetime = `${currentdate.getFullYear()}-${
    currentdate.getMonth() + 1
  }-${currentdate.getDate()} -  ${currentdate.getHours()}: ${currentdate.getMinutes()} : ${currentdate.getSeconds()}`;
  let ref = Math.floor(Math.random() * 100);

  const transaction = await new Transaction({
    user: req.body.user,
    refrence_number: `Ref#${++ref} `,
    transaction_date: datetime,
    debit: `$${req.body.withdrawal_amount
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
    status: "pending",
  });

  await transaction.save();
  return {error:false, transaction_id:transaction.id}


} catch (error) {
  return {error:true,errMessage:error.message}
}


};

module.exports = create_withdrawal_transaction;
