// needed DOM resources

const cities = [];
const textBox = document.getElementById('input')
const listBox = document.getElementById('li')
const url = 'cities.json'

// fetching the data

fetch(url)
    .then(place => place.json())
    .then(response => cities.push(response.cities))

// running the function
listener()


// all functions defined

function listener() {
    textBox.addEventListener('input', () => {
        const inputText = input.value;
        if (inputText === "") {
            return
        } else {
            const element = filter(inputText);
            updateData(element)
        }
    })
}


function filter(input) {
    return cities[0].filter(place => {
        const regX = new RegExp(input, 'gi');
        return place.city.match(regX) || place.district.match(regX) || place.state.match(regX)
    })
}

function updateData(element) {
    let domEl = element.map(place=>{
        return `<li>${place.city}</li>`
    }).join('')
    listBox.innerHTML = domEl
}