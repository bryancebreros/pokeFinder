import {useEffect, useContext, useRef} from 'react'
import { useParams, Link } from 'react-router-dom'
import Spinner from '../components/layouts/Spinner'
import { showPokemon} from '../context/pokedex/PokedexActions'
import PokedexContext from '../context/pokedex/PokedexContext'

function Pokemon() {
    const { pokemon, loading, dispatch} = useContext(PokedexContext)
    const isMounted = useRef(true)
    const params = useParams()

    useEffect(() => {
      dispatch({type: 'SET_LOADING'})
       const getPokemonData = async() => {
         const pokemonData = await showPokemon(params.name)
         dispatch({type: 'SHOW_POKEMON', payload: pokemonData})

       }
       getPokemonData()
    }, [dispatch, params.name])

    useEffect(() =>{
      return () => {
        isMounted.current = false
      }
      
    }, [])
    const {
      name,
      id,
      sprites,
      types
      
    } = pokemon
    
   
    
    console.log(name);
    
    console.log('fin');
    
    
    if (loading) {
      return <Spinner />
    }
    
  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className="mb-4">
          <Link to='/' className='btn btn-ghost'>
            Back To Search
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          {/* <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-xl card image-full">
              <figure>
                <img src={sprites.front_default} alt="" />
                <img src={sprites?.other.home.front_default} alt={name}/>
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">
                  {name}
                </h2>
                <p className='flex-grow-0'>{`#${id}`}</p>
              </div>
            </div>
          </div> */}
          <div class="card w-96 bg-base-100 shadow-xl">
          
            <figure><button class="btn btn-square btn-sm flex-1 w-32">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button><img src={sprites?.other.home.front_default} alt={name} /></figure>
            
            <div class="card-body">
            
              <h2 class="card-title">
                {name}
                <div class={`badge mr-2 px-2.5 py-0.5 rounded ${types?.[0].type.name}`}>{types?.[0].type.name}</div>
                {types?.length > 1 &&
                  <div class={`badge mr-2 px-2.5 py-0.5 rounded ${types?.[1].type.name}`}>{types?.[1].type.name}</div>
                }
                
              </h2>
              <p className='flex-grow-0'>{`#${id}`}</p>
              
              <div class="card-actions justify-end">
              
                <div class="badge badge-outline">Moves</div> 
                <div class="badge badge-outline">Area</div>
              </div>
            </div>
          </div>
          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className='text-3xl card-title'>
                {/* {abilities[0].ability.name} */}
                {/* <div className='ml-2 mr-1 badge badge-success'>{type}</div>
                {hireable && (
                  <div className='mx-1 badge badge-info'>Hireable</div>
                )} */}
              </h1>
              {/* <p>{bio}</p> */}
              {/* <div className='mt-4 card-actions'>
                <a
                  href={html_url}
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-outline'
                >
                  Visit Github Profile
                </a>
              </div> */}
            </div>

            <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
              {/* {location && (
                <div className='stat'>
                  <div className='stat-title text-md'>Location</div>
                  <div className='text-lg stat-value'>{location}</div>
                </div>
              )} */}
              {/* {blog && (
                <div className='stat'>
                  <div className='stat-title text-md'>Website</div>
                  <div className='text-lg stat-value'>
                    <a href={`https://${blog}`} target='_blank' rel='noreferrer'>
                      {blog}
                    </a>
                  </div>
                </div>
              )} */}
              {/* {twitter_username && (
                <div className='stat'>
                  <div className='stat-title text-md'>Twitter</div>
                  <div className='text-lg stat-value'>
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>

        {/* <div className='w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats'>
            <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='stat'>
                <div className='stat-figure text-secondary'>
                <FaUsers className='text-3xl md:text-5xl' />
                </div>
                <div className='stat-title pr-5'>Followers</div>
                <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {followers}
                </div>
            </div>

            <div className='stat'>
                <div className='stat-figure text-secondary'>
                <FaUserFriends className='text-3xl md:text-5xl' />
                </div>
                <div className='stat-title pr-5'>Following</div>
                <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {following}
                </div>
            </div>

            <div className='stat'>
                <div className='stat-figure text-secondary'>
                <FaCodepen className='text-3xl md:text-5xl' />
                </div>
                <div className='stat-title pr-5'>Public Repos</div>
                <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {public_repos}
                </div>
            </div>

            <div className='stat'>
                <div className='stat-figure text-secondary'>
                <FaStore className='text-3xl md:text-5xl' />
                </div>
                <div className='stat-title pr-5'>Public Gists</div>
                <div className='stat-value pr-5 text-3xl md:text-4xl'>
                {public_gists}
                </div>
            </div>
            </div>
        </div> */}

        
        
      </div>
    </>

  )
  
}
export default Pokemon