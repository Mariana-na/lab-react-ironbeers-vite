import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function AllBeersPage() {

    const [beers, setBeers] = useState ([])

    async function getBeers () {
        try {
            const response = await fetch ("https://ih-beers-api2.herokuapp.com/beers")

            if(response.status === 200) {
                const fetchedBeers = await response.json ()
                setBeers (fetchedBeers)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect (() => {
        getBeers ()
    }, [])

    return (
        <>
            <h1>All Beers</h1>
            {beers.map(oneBeer => {
                return (
                <div key={oneBeer._id} >
                    <img src={oneBeer.image_url} alt={oneBeer.name} />
                    <h2> {oneBeer.name} </h2>
                    <h4> {oneBeer.tagline} </h4>
                    <p> {oneBeer.contributed_by} </p>
                    <Link to={`/beers/${oneBeer._id}`} >More Info</Link>
                </div>
                )
            })}
        </>
    )
}

export default AllBeersPage;
