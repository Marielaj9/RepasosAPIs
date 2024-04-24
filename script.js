
async function getPokemon(){
    const pokemonId= Math.floor(Math.random()*100)+1; // Escoge el ID del pokemon
    try{
        const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
        const data = await response.json();
        const pokemonName= data.name;
        const pokemonAbilities= data.abilities.map(ability => ability.ability.name).join(',');
        const pokemonInfo= `¡Has obtenido a ${pokemonName}!/Habilidades: ${pokemonAbilities}`
        document.getElementById('pokemonInfo').innerText= pokemonInfo;
    } catch(error){
        console.error('Ha ocurrido un error:', error);
    }
}



