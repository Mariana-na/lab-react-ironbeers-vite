import {useEffect, useState} from "react";

function RandomBeersPage() {

    const [randomBeer, setRandomBeer] = useState (null)

    async function getRandom () {
        try {
            const response = await fetch (`https://ih-beers-api2.herokuapp.com/beers/random`)
            console.log(response)

            if(response.status === 200) {
                const fetchedRandomBeer = await response.json ()
                setRandomBeer (fetchedRandomBeer)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect (() => {
        getRandom ()
    }, [])

    return randomBeer ? (
        <div>
            <img src={randomBeer.image_url} alt={randomBeer.name} />
            <h1> {randomBeer.name} </h1>
            <h4> {randomBeer.tagline} </h4>
            <h6> {randomBeer.first_brewed} </h6>
            <h6> {randomBeer.attenuation_level} </h6>
            <h6> {randomBeer.description} </h6>
            <h6> {randomBeer.contributed_by} </h6>
        </div>) : 
        (<h1>Loading...</h1>)

}

export default RandomBeersPage;
