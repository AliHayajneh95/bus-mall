"use strict"

function Product(name, filepath) {
    this.name = name;
    this.filepath = filepath;
    this.clicks = 0;
    this.shows = 0;
}

Product.prototype =
{

};


//global variables

var ctx = document.getElementById('myChart');



var played = false;
var rounds = 0;
var products = new Array(19);
var randomproducts = new Array(3);
var name = new Array(19);
var filepath = new Array(19);


// EXECUTION BEGINS HERE

// INITIALIZING


products[0] = new Product("bag", "img/bag.jpg");
products[1] = new Product("banana", "img/banana.jpg");
products[2] = new Product("bathroom", "img/bathroom.jpg");
products[3] = new Product("boots", "img/boots.jpg");
products[4] = new Product("breakfast", "img/breakfast.jpg");
products[5] = new Product("bubblegum", "img/bubblegum.jpg");
products[6] = new Product("chair", "img/chair.jpg");
products[7] = new Product("cthulhu", "img/cthulhu.jpg");
products[8] = new Product("dog-duck", "img/dog-duck.jpg");
products[9] = new Product("dragon", "img/dragon.jpg");
products[10] = new Product("pen", "img/pen.jpg");
products[11] = new Product("pet-sweep", "img/pet-sweep.jpg");
products[12] = new Product("scissors", "img/scissors.jpg");
products[13] = new Product("shark", "img/shark.jpg");
products[14] = new Product("sweep", "img/sweep.png");
products[15] = new Product("tauntaun", "img/tauntaun.jpg");
products[16] = new Product("unicorn", "img/unicorn.jpg");
products[17] = new Product("usb", "img/usb.gif");
products[18] = new Product("water-can", "img/water-can.jpg");
products[19] = new Product("wine-glass", "img/wine-glass.jpg");


// generate random images

if(window.localStorage.length != 0)
    products = JSON.parse(localStorage.getItem("products"));

var container = document.getElementById("1");
generator();


// counting clicks


container.addEventListener("click", function (e) {
    for (var i = 0; i < randomproducts.length; i++) {
        container.removeChild(container.lastElementChild);
    }

    if (rounds < 25) {
        rounds++
        var x = e.target.alt;
        for (var i = 0; i < products.length; i++) {
            if (x == products[i].name) {
                products[i].clicks++;
                console.log(products[i].clicks);
                console.log("round:" + rounds);
            }
        }
        generator();
        localStorage.setItem("products", JSON.stringify(products));
    }

    else if(!played)
    {
        for (var i = 0; i < products.length; i++) {
            console.log(products[i].name + ": showed: " + products[i].shows + " clicked: " + products[i].clicks);
        }
        played = true;

        var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [products[0].name,
                 products[1].name,
                 products[2].name,
                 products[3].name,
                 products[4].name,
                 products[5].name,
                 products[6].name,
                 products[7].name,
                 products[8].name,
                 products[9].name,
                 products[10].name,
                 products[11].name,
                 products[12].name,
                 products[13].name,
                 products[14].name,
                 products[15].name,
                 products[16].name,
                 products[17].name,
                 products[18].name,
                 products[19].name],
        datasets: [{
            label: '# of Votes', 
            data: [products[0].clicks,
            products[1].clicks,
            products[2].clicks,
            products[3].clicks,
            products[4].clicks,
            products[5].clicks,
            products[6].clicks,
            products[7].clicks,
            products[8].clicks,
            products[9].clicks,
            products[10].clicks,
            products[11].clicks,
            products[12].clicks,
            products[13].clicks,
            products[14].clicks,
            products[15].clicks,
            products[16].clicks,
            products[17].clicks,
            products[18].clicks,
            products[19].clicks],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(153, 102, 255, 1)',
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

        
    }
});



//execution ends here



// generate random images on html


function generator() {

    for (var i = 0; i < randomproducts.length; i++) {

        var rand = randomizer(0, products.length - 1);
        
        if(!randomproducts.includes(products[rand]))
        {

        randomproducts[i] = products[rand];
        products[rand].shows++;
        var e = document.createElement("img");
        e.src = randomproducts[i].filepath;
        e.alt = randomproducts[i].name;

        console.log(e.src);
        container.appendChild(e);
        
        }
        else 
        {
            i--;
        }

    }
}

function randomizer(min, max) {
    return min + Math.floor(Math.random() * (Math.floor(max) - Math.floor(min)));
}