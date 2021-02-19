var nameV = document.querySelector("#cars")
var carburant = document.querySelector("#carburant")
var gear_box = document.querySelector("#gear-box")
var chooseDays = document.querySelector("#chooseDays")
var lastPrice = document.querySelector(".form h2")

vNames = [
    "",
    "Motorcycle",
    "Citadine",
    "Compact",
    "Berline",
    "Utilitaire",
    "Camion",
    "Engin de chantier",
]
var electrics = [
    "Motorcycle",
    "Citadine",
]
var essence = [
    "Motorcycle",
    "Citadine",
    "Compact",
    "Berline",
    "Engin de chantier",
]
var hybride = [
    "Citadine",
    "Compact",
    "Berline",
]


var diesel = [
    "Citadine",
    "Compact",
    "Berline",
    "Utilitaire",
    "Camion",
    "Engin de chantier",
]

var prices = [
    {
        name: "Motorcycle",
        price: 10
    },
    {
        name: "Citadine",
        price: 12
    },
    {
        name: "Compact",
        price: 14
    },
    {
        name: "Berline",
        price: 20
    },
    {
        name: "Utilitaire",
        price: 16
    },
    {
        name: "Camion",
        price: 250
    },
    {
        name: "Engin de chantier",
        price: 900
    },
    {
        name: "Engin de chantier",
        price: 900
    }
]



var customer = {
    vName: "",
    Vprice: "",
    fuel: "",
    type: "",
    Days: "",
    taxes: 0

}


var auto = ["Camion", "Berline"]

var carburantTbale = [diesel, hybride, essence, electrics]
var carburantTbaleS = ["diesel", "hybride", "essence", "electrics"]

var carburantTaxes = [
    {
        name: "diesel",
        taxe: 0.21
    },
    {
        name: "hybride",
        taxe: 0.09
    }, {
        name: "essence",
        taxe: 0.14
    }, {
        name: "electrics",
        taxe: 0.05
    }
]
var helper = []


//choosing VName and Type
nameV.addEventListener("input", function () {
    customer = {
        vName: "",
        Vprice: "",
        fuel: "",
        type: "",
        Days: "",
        taxes: 0,
        priceTopay : 0

    }
    customer.vName = vNames[nameV.options.selectedIndex]
    helper = []
    carburant.innerHTML = ""



    


    for (let i = 0; i < carburantTbale.length; i++) {
        for (let j = 0; j < carburantTbale[i].length; j++) {
            if (carburantTbale[i][j] == vNames[nameV.options.selectedIndex]) {
                var opt = document.createElement("option")
                opt.innerHTML = carburantTbaleS[i]
                carburant.appendChild(opt)
            }





            for (let n = 0; n < gear_box.options.length; n++) {
                gear_box.options[n].text = ""
            }
        }

    }
    if (auto.includes(vNames[nameV.options.selectedIndex])) {
        gear_box.options[0].text = "automatique"
        customer.type = "automatique"
        customer.taxes = parseFloat(customer.taxes) + parseFloat(0.19)
    } else if (vNames[nameV.options.selectedIndex] == "Motorcycle") {
        customer.type = "Motorcycle"
    } else {
        gear_box.options[0].text = "manuell"
        customer.type = "manuell"
    }
    console.log(customer);

    for (let k = 0; k < prices.length; k++) {
        if (customer.vName == prices[k].name) {
            customer.Vprice = prices[k].price
        }
    }

    console.log(customer);

})



carburant.addEventListener("click", function () {
    (customer.type == "automatique" )?customer.taxes = 0.19 : customer.taxes = 0
    customer.fuel = carburant.options[carburant.options.selectedIndex].innerHTML


    for (let k = 0; k < carburantTaxes.length; k++) {
        if (customer.fuel == carburantTaxes[k].name) {
            customer.taxes = customer.taxes + carburantTaxes[k].taxe
        }
    }
    

    customer.priceTopay = customer.Vprice + (customer.Vprice * customer.taxes)

    console.log(customer);


})

chooseDays.addEventListener("input", function () {
    customer.taxes?customer.priceTopay =chooseDays.value * (customer.Vprice + (customer.Vprice * customer.taxes)):0

    lastPrice.innerHTML = customer.priceTopay + " $"
    console.log(customer);

})