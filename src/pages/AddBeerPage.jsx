import { useState } from "react";

function AddBeerPage() {

    const [name, setName] = useState ("");
    const [tagline, setTagline] = useState ("");
    const [description, setDescription] = useState ("");
    const [firstBrewed, setFirstBrewed] = useState ("");
    const [brewersTips, setBrewersTips] = useState ("");
    const [attenuationLevel, setAttenuationLevel] = useState ("");
    const [contributedBy, setContributedBy] = useState ("");

    const handleSubmit = async event => {
        event.preventDefault ()
        try {
            const response = await fetch ("https://ih-beers-api2.herokuapp.com/beers/new", {method:"POST", headers: {
                'Content-Type': 'application/json',
            }, body: JSON.stringify({name, tagline, description, first_brewed: firstBrewed, brewers_tips: brewersTips, attenuation_level: attenuationLevel, contributed_by: contributedBy})})

            if(response.status === 200) {
                const parsed = await response.json ()
                setName ("");
                setTagline ("");
                setDescription ("");
                setFirstBrewed ("");
                setBrewersTips ("");
                setAttenuationLevel ("");
                setContributedBy ("");
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (

        <form onSubmit = {handleSubmit} >
            <label>
                Name:
                <input value={name} onChange={event => setName (event.target.value)} />
            </label>
            <label>
                Tagline:
                <input value={tagline} onChange={event => setTagline(event.target.value)} />
            </label>
            <label>
                Description:
                <input value={description} onChange={event => setDescription(event.target.value)} />
            </label>
            <label>
                First Brewed:
                <input value={firstBrewed} onChange={event => setFirstBrewed(event.target.value)} />
            </label>
            <label>
                Brewer's Tips:
                <input value={brewersTips} onChange={event => setBrewersTips(event.target.value)} />
            </label>
            <label>
                Attenuation Level:
                <input value={attenuationLevel} onChange={event => setAttenuationLevel(event.target.value)} type="number" />
            </label>
            <label>
                Contributed By:
                <input value={contributedBy} onChange={event => setContributedBy(event.target.value)} />
            </label>
            <button type="submit" >Add Beer!</button>
        </form>
    )

}

export default AddBeerPage;
