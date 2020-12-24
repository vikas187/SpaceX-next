import React from 'react';
import Launches from './Launches';
import axios from 'axios';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            filters: {
                    year: '',
                    launch: '',
                    landing: '',
            }
        }
    }

    changeYear(year) {
        if(this.state.filters.year===year) {
            year='';
        } 
        this.setState({
            filters: {
                ...this.state.filters,
                year
            }  
        })
        
    }

    changeLanding(landing) {
        if(this.state.filters.landing === landing) {
            landing='';
        } 
        this.setState({
            filters: {
                ...this.state.filters,
                landing
            }  
        })
        
    }

    changeLaunch(launch) {
        if(this.state.filters.launch === launch) {
            launch='';
        } 
        this.setState({
            filters: {
                ...this.state.filters,
                launch
            }  
        })
        
    }

    static async getInitialProps({req}) {
      const appProps = await axios.get(`https://api.spaceXdata.com/v3/launches?limit=100`);
    
      return { data:appProps.data }
    }


    render() {
        const filters = [2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
        return (
            <div className="main">
            <h2 className="main-title">SpaceX Launch Programs</h2>
            <div className="sections">
                <div className="filters">
                    <h3>Filters</h3>
                    <p>Launch Year</p>
                    <hr/>
                    <div className="filters-type">
                        {filters.map((fil)=>{
                            return <button key={fil} className={"filters-type__year" + (this.state.filters.year==fil? " active": "")} onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>{fil}</button>;
                        })}
                    </div>

                    <p>Successful Launch</p>
                    <hr/>
                    <div className="filters-type">
                        <button className= {"filters-type__year" + (this.state.filters.launch=='true' ? " active": "")} onClick={(e)=>{this.changeLaunch(e.target.innerHTML)}}>true</button>
                        <button className={"filters-type__year" + (this.state.filters.launch=='false'? " active": "")} onClick={(e)=>{this.changeLaunch(e.target.innerHTML)}}>false</button> 
                    </div>
                    <p>Successful Landing</p>
                    <hr/>
                    <div className="filters-type">
                    <button className={"filters-type__year" + (this.state.filters.landing=='true'? " active": "")} onClick={(e)=>{this.changeLanding(e.target.innerHTML)}}>true</button>
                    <button className={"filters-type__year" + (this.state.filters.landing=='false'? " active": "")} onClick={(e)=>{this.changeLanding(e.target.innerHTML)}}>false</button>
                    </div>
                    
                </div>
                
                <div className="launches">
                <Launches filters={this.state.filters} data={this.props.data}/>
                </div>
            
            </div>
            <div className="footer">Developed By - Vikas Bhandari</div>
            </div>
        )
    };
}

export default Home;