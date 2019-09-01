/*
//
*/
/*
  {
    "id": 1,
    "name": "Linguine",
    "category": "pasta",
    "ethnicity": "italian",
    "restaurantId": 1
  },
*/

//
const container = document.querySelector('.food-list');

//
function createTagElement ( tag, content ) {
    return `<${tag}>${content}</${tag}>`
}

//
function foodFactory ( food ) {
    return `
        ${createTagElement( 'h2', food.name )}
        ${createTagElement( 'div', food.category )}
        ${createTagElement( 'div', food.ethnicity )}
    `
}

//
function addFoodToDom ( element ) {
    const DOMElement = document.createElement( 'div' );
    DOMElement.innerHTML = element;
    //console.log( DOMElement );
    container.appendChild( DOMElement );
}

//
fetch("http://localhost:8088/food")
.then(foods => foods.json())
.then(parsedFoods => {
    parsedFoods.forEach(food => {
        const foodAsHTML = foodFactory(food)
        addFoodToDom(foodAsHTML)
    })
})
