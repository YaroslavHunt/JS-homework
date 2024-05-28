function createLine(color, wight, element) {
    let line = document.createElement('hr');
    line.style.color = color;
    line.style.borderWidth = wight;
    line.style.borderStyle = 'solid';
    element.appendChild(line);
}

// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.


// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(console.log);
let baseUrl = 'https://dummyjson.com';
let getCarts = baseUrl + '/carts';
let getRecipes = baseUrl + '/recipes';
let matchArray = getCarts.match(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/g);

if (matchArray) {
    let basketsContainer = document.getElementsByClassName('baskets')[0];
    let productsUrl = new URL(getCarts);

    fetch(productsUrl)
        .then((value) => value.json())
        .then((response) => {
            let carts = response.carts;
            for (const cart of carts) {
                let divBasketContainer = document.createElement('div');
                divBasketContainer.classList.add('divBasketContainer');
                let line = document.createElement('hr');
                divBasketContainer.textContent = JSON.stringify(cart.products);
                basketsContainer.append(divBasketContainer, line);
            }
            createLine('red', '5px', basketsContainer);
        });
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
//     fetch('https://dummyjson.com/recipes')
//         .then(res => res.json())
//         .then(console.log);

    let recipesContainer = document.getElementsByClassName('recipes')[0];
    let recipesUrl = new URL(getRecipes);

    fetch(recipesUrl)
        .then((value) => value.json())
        .then((response) => {
            let recipes = response.recipes;

            for (const recipe of recipes) {
                let divRecipeContainer = document.createElement('div');
                divRecipeContainer.classList.add('divRecipeContainer');


                for (const recipeKey in recipe) {
                    let title = document.createElement('h3');
                    title.textContent = recipeKey + ": ";
                    divRecipeContainer.appendChild(title);

                    if (Array.isArray(recipe[recipeKey])) {
                        let ulOfArr = document.createElement('ul');
                        recipe[recipeKey].forEach(item => {
                            let li = document.createElement('li');
                            li.textContent = item;
                            ulOfArr.appendChild(li);
                        });
                        divRecipeContainer.appendChild(ulOfArr);
                    } else if (recipeKey === 'image') {
                        let img = document.createElement('img');
                        img.src = recipe[recipeKey];
                        divRecipeContainer.appendChild(img);
                    } else {
                        let info = document.createElement('p');
                        info.textContent = recipe[recipeKey];
                        divRecipeContainer.appendChild(info);
                    }
                }
                recipesContainer.appendChild(divRecipeContainer);
                let line = document.createElement('hr');
                recipesContainer.appendChild(line);
            }
        });
}
