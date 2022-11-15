// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function useAbilitySearch(abilities){
//     const [error, setError] = useState(false)
//     const [abilitiesDesc, setAbilitiesDesc] = useState([])
//     console.log({abilities});

//     useEffect(() => {
//         // abilities.map((ability) => {
//             axios
//                 .get(`https://pokeapi.co/api/v2/ability/${abilities}`)
//                 .then((res)=> {
//                     console.log("hi");
//                     setAbilitiesDesc(...abilitiesDesc, {name: res.data.name, effect: res.data.effect_entries[1].effect})
//                 })
//                 .catch((err)=> {
//                     setError(err)
//                 })
//         // })
        
//     }, [abilities])

//     return {error, abilitiesDesc}
// }