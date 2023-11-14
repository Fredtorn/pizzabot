// const vegetarian = "Vegetarian Pizza";
// const hawaiian = "Hawaiian Pizza";
// const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:


function cookingTime(time) {
    if (time <= 2) {
        return "10";
    } if (time >= 3 && time <= 5) {
        return "15";
    } if (time >= 6) {
        return "20";
    }
}

function price(quantity, price) {
    return quantity * price;
}


sendOrder.addEventListener('click', function () {

    const checkOrderName = document.getElementById("orderName").value;
    const checkOrderQuantity = document.getElementById("orderQuantity").value;

    console.log(checkOrderName)

    if (!checkOrderName || !checkOrderQuantity) {
        alert("Ensure you input a value in both fields!");
    } else {

        const resultDiv = document.createElement("div");

        const resultPara = document.createElement("p");

        const textNode = document.createTextNode(getOrder());

        resultDiv.setAttribute("class", "resultDivStyle");

        resultPara.setAttribute("class", "resultParaStyle");

        const removePizzaForm = document.getElementById("pizzaForm");

        removePizzaForm.remove();

        resultDiv.appendChild(resultPara);
        resultPara.appendChild(textNode)

        const center = document.getElementById("center")
        center.appendChild(resultDiv)

    }

})

function getOrder() {
    const orderNameEl = document.getElementById("orderName").value;

    const orderQuantityEl = parseInt(document.getElementById("orderQuantity").value);
    if (orderQuantityEl === 1) {
        return `Your order is comig right up! \n ${orderQuantityEl} ${orderNameEl} will be ready in ${cookingTime(orderQuantityEl)} minutes. It will cost ${price(orderQuantityEl, pizzaPrice)} kr. See you soon!`;
    } else {
        return `Your order is coming right up! \n ${orderQuantityEl} ${orderNameEl}s will be ready in ${cookingTime(orderQuantityEl)} minutes. It will cost ${price(orderQuantityEl, pizzaPrice)} kr. See you soon!`;
    }
}

