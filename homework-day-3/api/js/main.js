const getData = async () => {
    let season = document.querySelector('season')
    let round = document.querySelector('round')
    let position 
    let name
    let nationality
    let sponsor
    let points
    let response = await axios.get('https://ergast.com/api/f1/2008/5/driverStandings.json')
    console.log(response.data)
    return response.data
};

let form = document.querySelector('#season-round')
console.log(form)




const DOM_ELEMENTS = {
    list: '.standings-list'
}

const loadData = async() =>{
    const race_standings = await getData();
    race_standings.forEach(standing => createList(standing.id, standing.position, standing.name, standing.nationality, standing.sponsor, standing.points))
};

const clearData = () => {
    document.querySelector(DOM_ELEMENTS.list).innerHTML = ''
};