// pikachu
var _condition = "pokemon"
var _pocketmonster = "pikachu"

fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
.then( res => res.json())
.then(data => {
    console.log(data.sprites)
    const {...img} = data.sprites;
    selector = document.querySelector('#pikachu');
    pokeIMG = `<img src="${img.front_default}" id="pikachu">`;
    selector.innerHTML = pokeIMG;
}
    );

       // primarina
  var _condition = "pokemon"
  var _pocketmonster = "primarina"
  
  fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
  .then( res => res.json())
  .then(data => {
      console.log(data.sprites)
      const {...img} = data.sprites;
      selector = document.querySelector('#primarina');
      pokeIMG = `<img src="${img.front_default}" id="primarina">`;
      selector.innerHTML = pokeIMG;
  }
      );
       // diancie
  var _condition = "pokemon"
  var _pocketmonster = "diancie"
  
  fetch(`https://pokeapi.co/api/v2/${_condition}/${_pocketmonster}`)
  .then( res => res.json())
  .then(data => {
      console.log(data.sprites)
      const {...img} = data.sprites;
      selector = document.querySelector('#diancie');
      pokeIMG = `<img src="${img.front_default}" id="diancie">`;
      selector.innerHTML = pokeIMG;
  }
      );