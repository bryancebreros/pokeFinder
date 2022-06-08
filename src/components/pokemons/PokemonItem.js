import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function PokemonItem({ pokemon: {name}}){
    return (
        <div className='card shadow-md compact side bg-base-100'>
        <div className="flex-row items-center space-x-4 card-body">
        {/* <div>
            <div className="avatar">
                <div className="rounded-full shadow w-14 h-14">
                    <img src={official_artwork} alt={name} />
                </div>
            </div>
        </div> */}
        <div>
            <h2 className='card-title'>{name}</h2>
            {/* <Link className='text-base-content text-opacity-40' to={`/user/${name}`}>Visit Profile </Link> */}
        </div>
        </div>
        </div>
    )

}

PokemonItem.propTypes = {
    pokemon: PropTypes.object.isRequired,
}

export default PokemonItem