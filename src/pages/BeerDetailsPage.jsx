import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function BeerDetailsPage() {

    const [beer, setBeer] = useState (null)
    const {beerId} = useParams ()

    async function getOneBeer () {
        try {
            const response = await fetch (`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            console.log(response)

            if(response.status === 200) {
                const fetchedBeer = await response.json ()
                setBeer (fetchedBeer)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect (() => {
        getOneBeer ()
    }, [])

    return beer ? (
        <div>
            <img src={beer.image_url} alt={beer.name} />
            <h1> {beer.name} </h1>
            <h4> {beer.tagline} </h4>
            <h6> {beer.first_brewed} </h6>
            <h6> {beer.attenuation_level} </h6>
            <h6> {beer.description} </h6>
            <h6> {beer.contributed_by} </h6>
        </div>) : 
        (<h1>Loading...</h1>)



}

export default BeerDetailsPage;
