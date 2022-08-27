import PropTypes from 'prop-types'

import { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { showPokemon } from '../../context/pokedex/PokedexActions'
import PokedexContext from '../../context/pokedex/PokedexContext'

function capName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
function PokemonItem({pokemon: {name}}){
    
    return (
        <div className='card shadow-md compact side bg-base-100'>
        <div className="flex-row items-center space-x-4 card-body">
        {/* <div>
            <div className="avatar">
                <div className="rounded-full shadow w-14 h-14">
                    <img src={} alt={name} />
                </div>
            </div>
        </div> */}
        <Link to={`/pokemon/${name}`}>
            <div>
                <h2 className='card-title'>{capName(name)}</h2>
                <h2>#d</h2>
                
            </div>
        </Link>
        </div>
        </div>
    )

}

PokemonItem.propTypes = {
    pokemon: PropTypes.object.isRequired,
}

export default PokemonItem