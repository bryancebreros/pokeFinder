import {useEffect, useContext, useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import Spinner from '../components/layouts/Spinner'
import { showPokemon} from '../context/pokedex/PokedexActions'
import PokedexContext from '../context/pokedex/PokedexContext'
import { FaAngleLeft, FaHashtag } from 'react-icons/fa'
import Modal from "react-modal"
import axios from 'axios'
import useAbilitySearch from '../components/customHooks/useAbilitySearch'
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement("#root")
function Pokemon() {
  const [habilidades, setHabilidades] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
    const { pokemon, loading, dispatch, forms, formas} = useContext(PokedexContext)
    const params = useParams()
    useEffect(() => {
      dispatch({type: 'SET_LOADING'})
      const getPokemonData = async() => {
        const pokemonData = await showPokemon(params.entry)
        dispatch({type: 'SHOW_POKEMON', payload: pokemonData})
      }
      getPokemonData()
    }, [dispatch, params.entry])
    const {
      name,
      id,
      sprites,
      types,
      abilities,
      stats
    } = pokemon
    // const pokeAbilities = abilities?.map((a) => a.ability.name)
    // useEffect(() => {
    //   dispatch({type: 'SET_LOADING'})
    //   const getPokemonAbilities = async() => {
    //     const pokemonAbilities = await getAbilities(pokeAbilities)
    //     dispatch({type: 'GET_ABILITIES', payload: pokemonAbilities})
    //   }
    //   getPokemonAbilities()
    // }, [dispatch, pokeAbilities])
    // const {abilitiesDesc} = useAbilitySearch(pokeAbilities)
    // console.log(abilitiesDesc);
    // const [aaa] = useAbilitySearch(pokeAbilities)
    // console.log(aaa);
    // useEffect(() => {
    //   dispatch({type: 'SET_LOADING'})
    //   const getPokemonForms = async() => {
    //     const pokemonForms = await getForms(params.entry)
    //     dispatch({type: 'GET_FORMS', payload: pokemonForms})
    //   }
    //   getPokemonForms()
      
    // }, [dispatch, params.entry])
    // useEffect(() => {
    //   console.log("hi");
    //   dispatch({type: 'SET_LOADING'})
    //   const getFormId = async() => {
    //     forms?.map(async (form)=> {
    //       if(!form?.is_default){
    //         console.log({form});
    //         const formId = await getForm(form.pokemon.url)
    //         dispatch({type: 'GET_FORM', payload: formId})
    //       }
         
    //     })
       
    //   }
    //   getFormId()
      
    // }, [dispatch, params.entry])
    // console.log({formas});
    // console.log({forms});



    // async function fetchId(url) {
    //   try {
    //     const response = await axios.get(url);
    //     setPokeId([...pokeId, {formId: response.data.id, formName: response.data.name}])
    //   } catch (e) {
    //     console.error(e)
    //   }
    // }  
      
    
    // useEffect(() => {
      
    //     forms.map((form) => {
    //       const getPokemonId = async() => {
    //         ids = await getForm("https://pokeapi.co/api/v2/pokemon-species/6")
    //       }
    //       getPokemonId()
    //     })
  
    // }, [dispatch, params.entry])     
    // console.log(ids);
    const handleOpenModal = () => {
      setShowModal(true)
    }
    const handleCloseModal = () => {
      console.log({showModal});
      setShowModal(false)
      console.log({showModal});
    }
    const sum = stats?.reduce((acc, o) => acc + parseInt(o.base_stat), 0)
    const colorStat = (baseStat) => {
      if (baseStat < 51){
        return 'progress-primary'
      } else if (baseStat > 50 && baseStat < 100){
        return 'progress-warning'
      } else if (baseStat > 99 && baseStat < 130){
        return 'progress-info'
      } else {
        return 'progress-secondary'
      }
    }
    if (loading) {
      return <Spinner />
    }
    
    
  return (
    <>
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 >Hello</h2>
                        <button onClick={closeModal}>close</button>
                        <div>I am a modal</div>
                        <form>
                          <input />
                          <button>tab navigation</button>
                          <button>stays</button>
                          <button>inside</button>
                          <button>the modal</button>
                        </form>
      </Modal>
    </div>
    {/* Put this part before </body> tag */}
    {/* <input type="checkbox" id="my-modal-3" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box relative">
        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
        <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
      </div>
    </div> */}
      <div className='w-full mx-auto lg:w-11/12'>
        <div className="mb-4">
          <Link to='/' className='btn btn-ghost'>
          <FaAngleLeft icon="fa-solid fa-arrow-left" />Back
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-1 mb-8 md:gap-8">
          <div className="card w-96 bg-base-100 shadow-xl">
            <h2 className="btn btn-square btn-sm btn-disabled flex-1 w-auto mb-4"><FaHashtag />{(id+'').padStart(3,'0')}</h2>
            <div className="card-body">
              <h2 className="card-title text-3xl card-title">
                  {name}
                  <div className={`badge badge-info badge-lg text-white ${types?.[0].type.name}`}>{types?.[0].type.name}</div>
                  {types?.length > 1 &&
                    <div className={`badge badge-info badge-lg text-white ${types?.[1].type.name}`}>{types?.[1].type.name}</div>
                  }
              </h2>
              <figure><img src={sprites?.other.home.front_default} alt={name} /></figure>
            
                  
              <div className='w-full rounded-lg shadow-md bg-base-100 stats stats-vertical text-center'>
                {abilities?.map((a) => (
                  <label className='modal-button stat bg-gray-200 hover:bg-gray-400 cursor-pointer' onClick={openModal} key={a.ability.name}> 
                  {a.is_hidden ? 
                    <>
                      <div className="stat-title">Hidden Ability</div>
                      <p className=" flex-grow-0 text-lg stat-value">{a.ability.name}</p>
                      
                    </>
                  :  
                    <p  className="flex-grow-0 text-lg stat-value">{a.ability.name}</p>}
                  </label>
                ))}
              </div>
            </div>
          

            <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
              
            </div>
          </div>
          <div className="overflow flex-end">
              <table className="table w-24 lg:w-96">
                  {/* <!-- head --> */}
                  <thead>
                  <tr>
                      <th></th>
                      <th className='text-xl'>Base Stats</th>
                      <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  {/* <!-- row 1 --> */}
                  <tr>
                      <th>HP:</th>
                      <td>{stats?.[0].base_stat}</td>
                      <td><progress className={`progress ${colorStat(stats?.[0].base_stat)} w-24 lg:w-96`} value={stats?.[0].base_stat} max="255"></progress></td>
                      
                  </tr>
                  {/* <!-- row 2 --> */}
                  <tr>
                      <th>Attack:</th>
                      <td>{stats?.[1].base_stat}</td>
                      <td><progress className={`progress ${colorStat(stats?.[1].base_stat)} w-24 lg:w-96`} value={stats?.[1].base_stat} max="255"></progress></td>
                      
                  </tr>
                  {/* <!-- row 3 --> */}
                  <tr>
                      <th>Defense:</th>
                      <td>{stats?.[2].base_stat}</td>
                      <td><progress className={`progress ${colorStat(stats?.[2].base_stat)} w-24 lg:w-96`} value={stats?.[2].base_stat} max="255"></progress></td>
                      
                  </tr>
                  <tr>
                      <th>Sp. Attack:</th>
                      <td>{stats?.[3].base_stat}</td>
                      <td><progress className={`progress ${colorStat(stats?.[3].base_stat)} w-24 lg:w-96`} value={stats?.[3].base_stat} max="255"></progress></td>
                      
                  </tr>
                  <tr>
                      <th>Sp. Defense:</th>
                      <td>{stats?.[4].base_stat}</td>
                      <td><progress className={`progress ${colorStat(stats?.[4].base_stat)} w-24 lg:w-96`} value={stats?.[4].base_stat} max="255"></progress></td>
                      
                  </tr>
                  <tr>
                      <th>Speed:</th>
                      <td>{stats?.[5].base_stat}</td>
                      <td><progress className={`progress ${colorStat(stats?.[5].base_stat)} w-24 lg:w-96`} value={stats?.[5].base_stat} max="255"></progress></td>
                      
                  </tr>
                  </tbody>
              </table>
              <div className="stat">
              <div className="stat-title">Total:</div>
              <div className="stat-value text-primary">{sum}</div>
          </div>
          </div>
        </div>
        {/* <div>
          Pokemon
          {formas.map((forma) =>{
            
            return(
              <>
                <h1>{forma.formName}</h1>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${forma.formId}.png`} />
              </>
            )
          })}
        </div> */}
      </div>
    </>

  )
  
}
export default Pokemon