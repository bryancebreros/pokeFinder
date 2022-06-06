function About() {
  return (
    <>
        <h1 className='text-6xl mb-4'>PokéFinder</h1>
            <p className='mb-4 text-2xl font-light'>
                A React app to search Pokémon from all generations and see their info.
                All data is retrieved from <strong><a href='https://pokeapi.co/'>PokéAPI</a></strong>!
        
            </p>
        <p className='text-lg text-gray-400'>
            Version <span className='text-black'>1.0.0</span>
        </p>
        <p className='text-lg text-gray-400'>
            Layout By <a className='text-black' href='https://twitter.com/hassibmoddasser'>
            Hassib Moddasser
            </a>
        </p>
    </>
  )
}

export default About