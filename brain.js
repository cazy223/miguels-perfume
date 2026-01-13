let myBag = [];
let total = 0;
function toggleCart() {
    let sidebar = document.getElementById("cartSidebar");
    sidebar.style.width = sidebar.style.width === "320px" ? "0" : "320px";
}
function addItem(name, price, img) {
    myBag.push({ name, price, img });
    total += price;
    renderCart();
    document.getElementById("cartSidebar").style.width = "320px";
}
function renderCart() {
    let list = document.getElementById("cartList");
    list.innerHTML = ""; 
    
    if (myBag.length === 0) {
        list.innerHTML = `<p style="text-align: center; padding: 20px; color: #888">Bag is empty</p>`;
    } else {
        myBag.forEach((item) => {
            list.innerHTML += `
                <div class="cart-item-row">
                    <img src="${item.img}">
                    <div class="cart-item-info">
                        <strong>${item.name}</strong><br>
                        <span style="color:#2e7d32; font-weight:bold;">₱${item.price}</span>
                    </div>
                </div>`;
        });
    }   
    document.getElementById("countDisplay").innerText = myBag.length;
    document.getElementById("totalPrice").innerText = total;
}
function searchPerfume() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.getElementsByClassName("item-card");   
    for (let card of cards) {
        let title = card.querySelector("h4").innerText.toLowerCase();
        card.style.display = title.includes(input) ? "" : "none";
    }
}
function openCheckout() {
    if(myBag.length > 0) {
        document.getElementById("checkoutModal").style.display = "flex";
    } else {
        alert("Your bag is empty!");
    }
}
function closeCheckout() {
    document.getElementById("checkoutModal").style.display = "none";
}
function processOrder() {
    let name = document.getElementById("custName").value;
    let address = document.getElementById("custAddr").value;
    let phone = document.getElementById("custPhone").value;
    if(name === "" || address === "" || phone === "") {
        alert("Please fill in all delivery details.");
        return;
    }
    alert("Success! Thank you " + name + ".\nOrder placed!");
    myBag = [];
    total = 0;
    renderCart();
    closeCheckout();
    document.getElementById("cartSidebar").style.width = "0";   
    document.getElementById("custName").value = "";
    document.getElementById("custAddr").value = "";
    document.getElementById("custPhone").value = "";
}
function toggleAbout() {
    let modal = document.getElementById("aboutModal");
    modal.style.display = (modal.style.display === "flex") ? "none" : "flex";
}
function toggleContact() {
    let modal = document.getElementById("contactModal");
    modal.style.display = (modal.style.display === "flex") ? "none" : "flex";
}