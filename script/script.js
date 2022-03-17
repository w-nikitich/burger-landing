const menuList = {
    dishes : [ 
        {
            name : 'Dairy Queen',
            desc : 'Dairy Queen is one of the biggest fast-food.',
            priceDef : 6,
            priceDisc : 4
        },
        {
            name : 'Burger King',
            desc : 'Together with McDonald’s, Burger King.',
            priceDef : 6,
            priceDisc : 5
        },
        {
            name : 'Pizza Hut',
            desc : 'Although the Pizza Hut Menu Prices.',
            priceDef : 7,
            priceDisc : 3
        },
        {
            name : 'Papa John’s',
            desc : 'Papa John’s is one of the most popular fast-food.',
            priceDef : 8,
            priceDisc : 6
        }
    ]
}

const menuImages = [
    '../images/dairy-queen-bg.png',
    '../images/burger-king-bg.png',
    '../images/pizza-hut-bg.png',
    '../images/papa-john-bg.png'
]

var menuItemBlock = document.querySelectorAll('.pricing__item');
var burgerMenu = document.querySelector('.collapse');
var burgerMenuBtn = document.querySelector('.navbar-toggler');
var clickCount = 0;
menuItemBlock[3].style.marginBottom = '0';

for (let i = 0; i < menuItemBlock.length; i++) {
    menuItemBlock[i].style.backgroundImage = 'url("'+menuImages[i]+'")';
    menuItemBlock[i].getElementsByTagName('h4')[0].innerHTML = menuList.dishes[i].name;
    menuItemBlock[i].getElementsByTagName('p')[0].innerHTML = menuList.dishes[i].desc;
    menuItemBlock[i].getElementsByTagName('span')[0].innerHTML = '$' + menuList.dishes[i].priceDisc;
    menuItemBlock[i].getElementsByTagName('span')[1].innerHTML = '$' + menuList.dishes[i].priceDef;

    if (i == 2 || i == 3) {
        if (window.innerWidth <= 768) {
            menuItemBlock[i].style.paddingLeft = '5%';
        }
        else {
            menuItemBlock[i].style.paddingLeft = '50px';
        }
    }    
}

window.addEventListener('resize', function() {
    for (let i = 0; i < menuItemBlock.length; i++) {
        if (i == 2 || i == 3) {
            if (window.innerWidth <= 768) {
                menuItemBlock[i].style.paddingLeft = '5%';
            }
            else {
                menuItemBlock[i].style.paddingLeft = '50px';
            }
        }
    }
}, false);

burgerMenuBtn.addEventListener('click', function() {
    clickCount++;

    if (clickCount == 1) {
        burgerMenu.classList.remove('show');
    }
    else {
        burgerMenu.classList.add('show');
        clickCount = 0;
    }
}); 


