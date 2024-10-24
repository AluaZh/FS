import test01 from "../img/logo.png"
import test01Big from "../img/logo.png"

import test02 from "../img/logo.png"
import test02Big from "../img/logo.png"


async function getProducts() {
    const response = await fetch('http://localhost:8000/products/')
    const data = response.json()
    return data
}

let test = [];

getProducts().then(data => {
    test = data;
});

export {test, getProducts}