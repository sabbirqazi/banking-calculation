function getInputValue(inputId){
    const inputValue = document.getElementById(inputId);
    const valueInText = inputValue.value;
    const valueInNumber = parseFloat(valueInText);
    inputValue.value = '';
    return valueInNumber;

}

function updateTotal(inputId,amount){
    const totalId = document.getElementById(inputId);
    const previousTotalText = totalId.innerText;
    const previousTotal = parseFloat(previousTotalText);
    const newTotal = previousTotal + amount;
    totalId.innerText = newTotal;
    

}
//handle balance
function getInnerTextValue(inputId){
  const balanceTag = document.getElementById(inputId);
  const balancValueInText = balanceTag.innerText;
  const value = parseFloat(balancValueInText);
  return value;
}
// balance update 
function balanceUpdate(amount, isAdding){
    // const balanceAmount = document.getElementById('balance-total');
    // const balanceInText = balanceAmount.innerText;
    // const previousBalance = parseFloat(balanceInText);
    const previousBalance = getInnerTextValue('balance-total');
    let  newBalance;
    if( isAdding){
      newBalance = previousBalance + amount;
    }
    else {
       newBalance = previousBalance - amount;
    }
    document.getElementById('balance-total').innerText = newBalance;

}
//deposit
document.getElementById('deposit-button').addEventListener('click', function(){
  const amount = getInputValue('deposit-input');
  updateTotal('deposit-total', amount)
  balanceUpdate(amount, true)
})
//withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
  const amount = getInputValue('withdraw-input');
  const balance = getInnerTextValue('balance-total')
 if(amount > 0 && amount <= balance){
  updateTotal('withdraw-total', amount)
  balanceUpdate(amount, false)
 }
})