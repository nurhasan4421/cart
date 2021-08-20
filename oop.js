function handelbtn(products, price, isIncrease, unit) {
  const quantity = document.getElementById(products);
  let quantityNum = parseInt(quantity.value);

  if (isIncrease == false) {
    quantityNum--;
  } else {
    quantityNum++;
  }

  if (quantityNum <= 0) { quantityNum = 1 }

  quantity.value = quantityNum;
  let newPrice = quantityNum * unit;
  document.getElementById(price).innerText = "$" + newPrice;
  updateTotal();
}

function updateTotal() {
  const phoneQuantity = document.getElementById('phone-quantity');
  let phoneTotalPrice = parseInt(phoneQuantity.value) * 1219;
  const caseQuantity = document.getElementById('case-quantity');
  let caseTotalPrice = parseInt(caseQuantity.value) * 59;

  let subTotal = phoneTotalPrice + caseTotalPrice;
  let tax = subTotal * 15 / 100;
  let grandTotal = Math.round(subTotal + tax);

  document.getElementById('subTotal').innerText = '$' + subTotal;
  document.getElementById('tax').innerText = '$' + tax;
  document.getElementById('grandTotal').innerText = '$' + grandTotal;
}