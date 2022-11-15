import {useState, useContext} from 'react'
import PokedexContext from '../../context/pokedex/PokedexContext'
import AlertContext from '../../context/alert/AlertContext'
import {useNavigate} from 'react-router-dom'
import {getKanto, getJohto, getHoenn, getSinnoh, getUnova, getKalos, getAlola, getGalar} from '../../context/pokedex/PokedexActions'
function PokemonSearch() {
    const [text, setText] = useState('')
    const [active, setActive] = useState(1)
    // const [appState, changeState] = useState({
    //     activeObject: null,
    //     objects: [{id: 1}, {id: 2}]
    // })
    // function toggleActive(idx) {
    //     changeState({...appState, activeObject: appState.objects[idx]})

    // }
    // function toggleActiveStyles(idx){
    //     if(appState.objects[idx] === appState.activeObject){
    //         return 'btn btn-ghost btn-lg btn-active'
    //     }else{
    //         return 'btn btn-ghost btn-lg'
    //     }
    // }
    const {pokemons, dispatch}  = useContext(PokedexContext)
    const { setAlert} =useContext(AlertContext)
    const navigate = useNavigate()

    const handleChange = (e) => setText(e.target.value)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (text === ''){
            setAlert('Please enter a valid Pokémon', 'error')
        }else{
            {text ==='deoxys'?  navigate(`/pokemon/deoxys-normal`):  navigate(`/pokemon/${text.toLowerCase()}`)}   
        }
    }
    const handleKanto = async () => {
        setActive(1)
        dispatch({type: 'CLEAR_POKEMONS'})
        dispatch({type: 'SET_LOADING'})
        const pokemons = await getKanto()
        dispatch({type: 'GET_POKEMONS', payload: pokemons})
        
    }
    const handleJohto = async () => {
        setActive(2)
        dispatch({type: 'CLEAR_POKEMONS'})
        dispatch({type: 'SET_LOADING'})
        const pokemons = await getJohto()
        dispatch({type: 'GET_POKEMONS', payload: pokemons})
        
    }
    const handleHoenn = async () => {
        setActive(3)
        dispatch({type: 'CLEAR_POKEMONS'})
        dispatch({type: 'SET_LOADING'})
        const pokemons = await getHoenn()
        dispatch({type: 'GET_POKEMONS', payload: pokemons})
        
    }
    const handleSinnoh = async () => {
        setActive(4)
        dispatch({type: 'CLEAR_POKEMONS'})
        dispatch({type: 'SET_LOADING'})
        const pokemons = await getSinnoh()
        
        dispatch({type: 'GET_POKEMONS', payload: pokemons})
        
    }
    const handleUnova = async () => {
        setActive(5)
        dispatch({type: 'CLEAR_POKEMONS'})
        dispatch({type: 'SET_LOADING'})
        const pokemons = await getUnova()
        
        dispatch({type: 'GET_POKEMONS', payload: pokemons})
        
    }
    const handleKalos = async () => {
        setActive(6)
        dispatch({type: 'CLEAR_POKEMONS'})
        dispatch({type: 'SET_LOADING'})
        const pokemons = await getKalos()
        dispatch({type: 'GET_POKEMONS', payload: pokemons})
        
    }
    const handleAlola = async () => {
        setActive(7)
        dispatch({type: 'CLEAR_POKEMONS'})
        dispatch({type: 'SET_LOADING'})
        const pokemons = await getAlola()
        dispatch({type: 'GET_POKEMONS', payload: pokemons})
        
    }
    const handleGalar = async () => {
        setActive(8)
        dispatch({type: 'CLEAR_POKEMONS'})
        dispatch({type: 'SET_LOADING'})
        const pokemons = await getGalar()
        dispatch({type: 'GET_POKEMONS', payload: pokemons})
        
    }
  return (
    <div className="grid grid-cols-1 xl:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input value={text} onChange={handleChange} placeholder="Enter Pokémon name/entry" type="text" className="w-full pr-40 bg-gray-100 input input-lg text-black" />
                            
                                <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                                    Go!
                                </button>
                            
                        </div>
                    </div>
                </form>
            </div>
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-8 lg:grid-cols-3 md:grid-cols-2'>
                {/* {appState.objects.map((element, idx) => {
                    <div
                        key={idx}
                        className={toggleActiveStyles(idx)}
                        onClick={()=> {
                            toggleActive(idx)
                        }}
                    >
                        <button id='1' onClick={handleKanto} type="submit" className="btn btn-ghost btn-lg">
                        I
                        </button>
                    </div> */}
                {/* })} */}
                <div>
                    <button id='1' onClick={handleKanto} type="submit" className={`btn btn-ghost btn-lg ${active === 1 && 'btn-active'}`}>
                        I
                    </button>
                </div>
                <div>
                    <button id='2' onClick={handleJohto} type="submit" className={`btn btn-ghost btn-lg ${active === 2&& 'btn-active'}`}>
                        II
                    </button>
                </div>
                <div>
                    <button id='3' onClick={handleHoenn} type="submit" className={`btn btn-ghost btn-lg ${active === 3 && 'btn-active'}`}>
                        III
                    </button>
                </div>
                <div>
                    <button id='4' onClick={handleSinnoh} type="submit" className={`btn btn-ghost btn-lg ${active === 4 && 'btn-active'}`}>
                        IV
                    </button>
                </div>
                <div>
                    <button id='5' onClick={handleUnova} type="submit" className={`btn btn-ghost btn-lg ${active === 5 && 'btn-active'}`}>
                        V
                    </button>
                </div>
                <div>
                    <button id='6' onClick={handleKalos} type="submit" className={`btn btn-ghost btn-lg ${active === 6 && 'btn-active'}`}>
                        VI
                    </button>
                </div>
                <div>
                    <button id='7' onClick={handleAlola} type="submit" className={`btn btn-ghost btn-lg ${active === 7 && 'btn-active'}`}>
                        VII
                    </button>
                </div>
                <div>
                    <button id='8' onClick={handleGalar} type="submit" className={`btn btn-ghost btn-lg ${active === 8 && 'btn-active'}`}>
                        VIII
                    </button>
                </div>
            </div>
        </div>
  )
}

export default PokemonSearch