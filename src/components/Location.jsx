const Location = ({locationList}) => {
    let i = 0
    // const loadLocations = () => {
    //     console.log(locationList)
    //     locationList.map(location => {
    //         return (
    //             <option value={location}>{location}</option>
    //         )
    //     }
    //     )
    // }

    const onSelectChange = () => {

    }

  return (
    <div>
        <select id="lctnSelect" className="All" onChange={onSelectChange}>
        {locationList.map(location => {
            return (
                <option value={location} key= {i++}>{location}</option>
            )
        }
        )
        }

        </select>
    </div>
  )
}

export default Location