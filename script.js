let productName = prompt("Enter the name of the product:");
let productPrice = Number(prompt("Enter the price of the product:"));
let productQty = Number(prompt("Enter the quantity of the product:"));
let subtotal = productQty*productPrice;
let tax = subtotal * 0.14;
let total = subtotal+tax;

console.log(`
              RECEIPT
    ---------------------------
    QTY  PRODUCT        PRICE
    ${productQty} x ${productName}    $${productPrice}
    ---------------------------
    ---------------------------
    Subtotal    $${subtotal}
    Tax         $${tax}
    TOTAL       $${total}
    ---------------------------
            THANK YOU`);

document.write(`
    <header>
        <h1>RECEIPT</h1>
        <div class="doubleline"></div>
    </header>
    <main>
        <div class="top-container">
            <h3>QTY PRODUCT</h3>
            <h3>PRICE</h3>
        </div>
        <div class="content">
            <p>${productQty} x ${productName}</p>
            <p>$${productPrice}</p>
        </div>
    </main>
    <footer>
        <div class="doubleline"></div>
        <div class="flex-container">
            <p>SUBTOTAL</p>
            <p>$${subtotal}
        </div>
        <div class="flex-container">
            <p>TAX</p>
            <p>$${tax}</p>
        </div>
        <div class="flex-container">
            <p>TOTAL</p>
            <p>$${total}</p>
        </div>
    </footer>`);