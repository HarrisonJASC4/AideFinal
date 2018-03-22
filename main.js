// var config = {
//     apiKey: "AIzaSyAI16hTftsqjAxecjUSLTsPTJQjz_Ko3fk",
//     authDomain: "finalaide.firebaseapp.com",
//     databaseURL: "https://finalaide.firebaseio.com",
//     projectId: "finalaide",
//     storageBucket: "",
//     messagingSenderId: "348333708058"
// };
// firebase.initializeApp(config);
// console.log(firebase);

var cart = [];
var Item = function (namr, price, count) {
    this.name = name
    this.price = price
    this.count = count
};


function addItemtoCart(name, price, count) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].count += count;
            saveCart();
            return;
        }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
}
function removeItemfromCart(name) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].count--;
            if (cart[i].count === 0) {
                cart.splice(i, 1);
            }
            break;
        }
    }
    saveCart();
}
function removeItemfromCartAll(name) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart.splice(i, 1);
            break;
        }
    }
    saveCart();
}
function clearCart() {
    cart = [];
    saveCart();
};

function countCart() {
    var totalCount = 0;
    for (var i in cart) {
        totalCount += cart[i].count;
    }
    return totalCount;
}
console.log(countCart());

function totalCart() {
    var totalCost = 0;
    for (var i in cart) {
        totalCost += cart[i].price * cart[i].count;
    }
    return totalCost.toFixed(2);
}
console.log(totalCart());

function listCart() { // -> array of Item
    var cartCopy = [];
    for (var i in cart) {
        var item = cart[i];
        var ItemCopy = {};
        for (var p in item) {
            ItemCopy[p] = item[p];
        }
        ItemCopy.total = (item.price * item.count).toFixed(2);
        cartCopy.push(ItemCopy);
    }

    return cartCopy;

}

function saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
}

function loadCart() {
    cart = JSON.parse(localStorage.getItem("shoppingCart"))
    if (cart == null) {
        cart = [];
    }
    loadCart()
    displayCart();
}



var array = listCart();
console.log("------------------")
console.log(array);
