import React from 'react';
import axios from 'axios';

class Launches extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            launches: []
        }
        
    }

    async UNSAFE_componentWillReceiveProps(props) {
        const filters = props.filters;
        let url = 'https://api.spaceXdata.com/v3/launches?limit=100';
        if(filters.launch.length) {
            url += `&launch_success=${filters.launch}`
        }
        if(filters.landing.length) {
            url += `&land_success=${filters.landing}`
        }
        if(filters.year.length) {
            url += `&launch_year=${filters.year}`
        }
        console.log(url);
        const response = await axios.get(url);
        if(response.status===200) {
            const launches = response.data;
            this.setState({
                launches
            });
        }
    }

    async componentDidMount(props) {
        const response = await axios.get(`https://api.spaceXdata.com/v3/launches?limit=100`);
        if(response.status===200) {
            const launches = response.data;
            this.setState({
                launches
            });
        }
    }


    render() {
        return (
            <React.Fragment>
            {this.state.launches.map((launch, index)=>{
                return <div key={index} className="launch-icon">
                <img className="launch-image" src={launch.links.mission_patch}></img>
                <p className="launch-title">{launch.mission_name} #{index+1}</p>
                <p className="launch-key">Mission ids:</p>
                <ul>
                {launch.mission_id.map((id)=>{
                    return <li key={id}>{id}</li>
                })}
                </ul>
                <p className="launch-key">Launch Year: {launch.launch_year}</p>
                <p className="launch-key">Launch Success: {launch.launch_success ? 'true' : 'false'}</p>
                <p className="launch-key">Successful Landing: {launch.rocket && launch.rocket.first_stage.cores && Array.isArray(launch.rocket.first_stage.cores) && typeof(launch.rocket.first_stage.cores[0].land_success) === 'boolean' ?  launch.rocket.first_stage.cores[0].land_success.toString(): 'NA'}</p>
                </div>
            })}
            </React.Fragment>
            );
    }
}

export default Launches;