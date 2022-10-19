(() => {
    'use strict';
    const products = [
        {
            "id": "6318be202dafb88857ced6ef",
            "price": 22999,
            "picture": "https://content.rozetka.com.ua/goods/images/preview/252192898.jpg",
            "availableCount": 9,
            "name": "Laptop Asus",
            "description": "Sit ipsum nisi cillum eu excepteur dolore non nulla labore pariatur. Pariatur occaecat ad exercitation labore sint nulla aliqua id. Cupidatat commodo anim culpa cupidatat sint id. Dolore sit laboris minim consequat esse irure tempor commodo. Ex laborum minim qui adipisicing nulla magna et irure anim consectetur culpa fugiat mollit. Consequat cupidatat velit officia velit cillum cillum. Nulla duis Lorem irure dolor magna do incididunt labore pariatur.\r\n"
        },
        {
            "id": "6318be205b25750683803721",
            "price": 27899,
            "picture": "https://content.rozetka.com.ua/goods/images/preview/274406559.jpg",
            "availableCount": 5,
            "name": "Laptop Lenovo",
            "description": "Occaecat fugiat ut reprehenderit culpa minim voluptate. Enim occaecat ad reprehenderit officia irure enim. Ad nisi excepteur nulla laboris sit incididunt sit. Dolore commodo occaecat adipisicing aliqua eiusmod. Sint irure culpa dolore velit nostrud occaecat.\r\n"
        },
        {
            "id": "6318be20b958f314f55a2cfa",
            "price": 17499,
            "picture": "https://content.rozetka.com.ua/goods/images/preview/280562759.jpg",
            "availableCount": 9,
            "name": "Laptop Acer",
            "description": "Culpa eu enim sit cupidatat ipsum anim fugiat irure tempor incididunt pariatur ullamco amet. Ad magna incididunt reprehenderit eiusmod elit quis. Ipsum anim do ex sit voluptate adipisicing velit mollit enim magna cillum. Laborum dolore nulla esse cupidatat. Do laborum veniam id ut commodo quis duis enim elit mollit cillum. Commodo magna ea qui ipsum. Cupidatat id proident labore anim consectetur veniam laboris velit.\r\n"
        },
        {
            "id": "6318be20942c96af2a22fc30",
            "price": 699,
            "picture": "https://content2.rozetka.com.ua/goods/images/preview/10957380.jpg",
            "availableCount": 3,
            "name": "Hankey Bannister",
            "description": "Laborum esse aute eu ullamco dolore. Eiusmod sit consectetur mollit ipsum incididunt aliquip ipsum consectetur qui ullamco velit. Aute qui anim qui adipisicing non. Duis exercitation consequat laborum ut nulla reprehenderit nisi cupidatat ex proident excepteur fugiat exercitation.\r\n"
        },
        {
            "id": "6318be20f78d4bc4b1118484",
            "price": 229,
            "picture": "https://content1.rozetka.com.ua/goods/images/preview/242980171.jpg",
            "availableCount": 10,
            "name": "Persil",
            "description": "Elit laborum proident nostrud commodo minim. Labore ullamco irure anim exercitation dolor culpa duis labore reprehenderit non consectetur. Enim in reprehenderit amet non culpa eiusmod consequat ullamco. Lorem non laboris nostrud consequat nulla labore consectetur esse. Amet labore nostrud pariatur dolor do cillum eu mollit consequat exercitation proident dolor aliqua in. Anim et est est amet aute non. Ad do velit tempor elit et reprehenderit sint cillum cupidatat proident et consectetur.\r\n"
        },
        {
            "id": "6318be200d058394f96faa32",
            "price": 8499,
            "picture": "https://content1.rozetka.com.ua/goods/images/preview/282149567.jpg",
            "availableCount": 9,
            "name": "Xiaomi Mi8",
            "description": "Irure culpa irure eiusmod officia quis ex aute aute elit adipisicing officia minim ullamco. Dolor sit aliqua est pariatur aliqua. Mollit anim proident voluptate laborum reprehenderit occaecat enim consequat qui laboris. Nulla nostrud officia veniam tempor laboris voluptate dolore voluptate magna. Laboris consequat magna eiusmod ea reprehenderit anim. Nisi deserunt laborum occaecat magna magna deserunt qui deserunt. Amet veniam magna est aliqua ex reprehenderit non ea amet commodo qui minim.\r\n"
        },
        {
            "id": "6318be204295dde104ae26a5",
            "price": 99,
            "picture": "https://content1.rozetka.com.ua/goods/images/preview/282073669.jpg",
            "availableCount": 4,
            "name": "Deodorant",
            "description": "Aliquip consectetur pariatur nostrud do fugiat laboris quis. Laboris dolore nulla consectetur reprehenderit ea officia incididunt. Eu adipisicing cupidatat id enim ex eiusmod dolore reprehenderit sint enim nulla deserunt ea minim. Aliqua quis et minim ex sint est aliqua laboris.\r\n"
        },
        {
            "id": "6318be200e26561d690d61a4",
            "price": 1499,
            "picture": "https://content1.rozetka.com.ua/goods/images/preview/186382233.jpg",
            "availableCount": 5,
            "name": "Automatical fan",
            "description": "Qui enim adipisicing proident nostrud eiusmod nisi duis adipisicing officia excepteur. Esse qui veniam fugiat adipisicing do excepteur. Elit est incididunt pariatur aute voluptate anim non dolor voluptate incididunt. Ex incididunt laborum aliqua voluptate. Tempor magna proident proident consectetur dolor dolore ex. Aliqua laborum velit do nostrud magna ipsum elit dolore. Sint laborum magna dolore voluptate occaecat.\r\n"
        },
        {
            "id": "6318be20e6264ff0e640c5b2",
            "price": 759,
            "picture": "https://content2.rozetka.com.ua/goods/images/preview/280442118.jpg",
            "availableCount": 4,
            "name": "Women blouse",
            "description": "Fugiat aliqua Lorem ad nulla sunt excepteur anim deserunt ullamco ex incididunt eu. Anim culpa sit sunt sit voluptate incididunt laboris deserunt deserunt culpa. Excepteur aliquip ut ipsum excepteur irure eiusmod. Ad deserunt esse magna voluptate consectetur aute exercitation tempor commodo aliqua. Velit ex non ex laboris culpa cupidatat nulla ipsum anim. Eu velit anim esse elit qui aliquip ex nulla mollit duis dolor dolor.\r\n"
        },
        {
            "id": "6318be208862533fb4735214",
            "price": 299,
            "picture": "https://content1.rozetka.com.ua/goods/images/preview/281549665.jpg",
            "availableCount": 2,
            "name": "adapter",
            "description": "Pariatur commodo aute qui eiusmod labore adipisicing amet quis ad in occaecat reprehenderit nisi. Dolor commodo consectetur sit dolore officia et quis nulla aute nulla ut eiusmod Lorem in. Sint ipsum ullamco aliqua mollit ullamco culpa. Reprehenderit reprehenderit fugiat laboris velit commodo aute magna consequat. Laborum sit magna veniam in consequat tempor aliquip ipsum Lorem cupidatat nulla enim.\r\n"
        }
    ];

    const shop = {
        products,
        cart: [],
        addToCart(productId) {
            // TODO: need to implement this method. Find product by id and add it to cart
            const btn = document.getElementById(productId);
            btn.addEventListener("click", () => {
                products.map((product) => {
                    if (product.id === productId) {
                        if (!this.cart.some((elem) => elem.id === productId)) {
                            this.cart.push(product);
                            this.cart.map((elem) => elem.quantity = 1);
                        }
                    }
                })
                this.renderCart();
            }) 
        },
        removeFromCart(productId) {
            // TODO: need to implement this method. remove product from cart by id
            const trash = document.querySelectorAll('.fa-trash');
            for (let i = 0; i < trash.length; i++) {
                trash[i].addEventListener('click', (e) => {
                    const index = this.cart.findIndex(prod => prod.id === productId);
                    const product = this.cart[index];
                    if (e.target.id === product.id) {
                        this.cart.splice(index, 1);
                    }
                    this.renderCart();
                })
            }
        },
        increaseQuantity(productId) {
            // TODO: need to implement this method. increase product quantity in cart
            let incr = document.querySelectorAll('.plus');
            for (let i = 0; i < incr.length; i++) {
                incr[i].addEventListener('click', (e) => {
                    const target = e.target;
                    const index = this.cart.findIndex(prod => prod.id === productId);
                    const product = this.cart[index];
                    if (product.id === target.id && product.quantity <= product.availableCount) {
                        product.quantity++;
                    }
                    this.renderCart();
                })
            }

        },
        decreaseQuantity(productId) {
            // TODO: need to implement this method. decrease product quantity in cart
            let incr = document.querySelectorAll('.minus');
            for (let i = 0; i < incr.length; i++) {
                incr[i].addEventListener('click', (e) => {
                    const target = e.target;
                   console.log(target);
                    const index = this.cart.findIndex(prod => prod.id === productId);
                    const product = this.cart[index];
                    console.log(target.id);
                    console.log(product.id)
                    if (product.id === target.id) {
                        product.quantity--;
                    }
                    this.renderCart();
                })
            }

        },
        getTotalCart() {
          // TODO: need to return total sum in cart
          let sum = 0;
          this.cart.map(item => {
            sum += item.price * item.quantity;
          })
          return sum;
        },
        renderOneProduct(product) {
            // TODO: need to implement this method. render one product in catalog
            let productCard = document.querySelector('.products');
            productCard.innerHTML += `
            <li class="product">
            <div class="image__placeholder">
            <img src="${product.picture}" alt="good">
            </div>
            <h3>${product.name}</h3>
            <div class="price">${numberWithSpaces(product.price)} ₴</div>
            <button class="buy" id="${product.id}">Buy</button>
            </li>`
        },
        renderOneCartProduct(cartProduct) {
            // TODO: need to implement this method. render one product in cart
            let cartItem = document.createElement('div');
            cartItem.classList.add('cart-content__item');
            cartItem.innerHTML = `
            <div class="cart-content__pic">
                <img src="${cartProduct.picture}" alt="cart_good">
            </div>
            <div class="cart-content__main">
                <div class="cart-content__name">${cartProduct.name}</div>
                <div class="cart-content__quantity">${cartProduct.quantity}</div>
            </div>
            <div class="cart-content__price">${numberWithSpaces(cartProduct.price * cartProduct.quantity)} ₴</div>
            <div class="cart-content__buttons">
                <button class="plus" id = "${cartProduct.id}">+</button>
                <button class="minus" id = "${cartProduct.id}">-</button>
            </div>
            <div class="cart-content__delete"><i class="fa-solid fa-trash" id = "${cartProduct.id}"></i></div>
            `
            return cartItem;
        },
        renderTotalCart() {
            // TODO: need to implement this method. render total in cart
            let total = document.querySelector('.cart-total');
            total.innerHTML = `
                <h4>Total: ${numberWithSpaces(this.getTotalCart())} ₴</h4>
            `
        },
        renderCatalog() {
            // TODO: need to implement this method. render all products. need to use renderOneProduct
            for (let i = 0; i < this.products.length; i++) {
                shop.renderOneProduct(products[i]);
            }
            products.forEach((product) => {
                this.addToCart(product.id);
            })
        },
        renderCart() {
            // TODO: need to implement this method. render cart. need to use renderOneCartProduct and renderTotalCart
            let container = document.querySelector('.cart-content');
            container.innerHTML = ``;
            this.cart.forEach(product => {
                container.appendChild(this.renderOneCartProduct(product));
            })
            this.renderTotalCart();
            this.cart.forEach(product => {
                this.increaseQuantity(product.id);
            });
            this.cart.forEach(product => {
                this.decreaseQuantity(product.id);
            });
            this.cart.forEach(product => {
                this.removeFromCart(product.id);
            });
        }
    }
    shop.renderCatalog();
    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }    
})()
