import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

function capName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}
function PokemonItem({pokemon: {name, url}}){
  //@TODO - try  refactor w/ custom hook
  
  const [poke, setPoke] = useState()
  useEffect(() => {
    axios.get(url).then((res) => {
      setPoke(res.data)
    })
    // eslint-disable-next-line
  }, [])
  const entry = poke?.id
  const icon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${entry}.png`
  // }).catch(e => {
  //     if (axios.isCancel(e)) return
  //     setError(true)
  // })
  // return () => cancel()
  return (
    
      <Link to={`/pokemon/${poke?.name}`}>
          <div className={`card card-side bg-base-100 shadow-xl  group hover:bg-yellow-400`}>
              <div className="card-bodyp-6 max-w-sm mx-auto  flex items-center space-x-6">
                  <h2 className="card-title ">{capName(name)}</h2>
                  <figure className='w-24 '>
                    <img src={icon} alt={name} className='group-hover:-translate-y-2'/>
                  </figure>
              </div>
          </div>
      </Link>
  )

}

PokemonItem.propTypes = {
    pokemon: PropTypes.object.isRequired,
}

export default PokemonItem