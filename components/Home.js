import React from 'react';
import Launches from './Launches';



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
            this.setState({
                filters: {
                    ...this.state.filters,
                    year: ''
                }  
            })
        } else {
            this.setState({
                filters: {
                    ...this.state.filters,
                    year
                }  
            })
        }
        
    }

    changeLanding(landing) {
        if(this.state.filters.landing === landing) {
            this.setState({
                filters: {
                    ...this.state.filters,
                    landing: ''
                }  
            })
        } else {
            this.setState({
                filters: {
                    ...this.state.filters,
                    landing
                }  
            })
        }
        
    }

    changeLaunch(launch) {
        if(this.state.filters.launch === launch) {
            this.setState({
                filters: {
                    ...this.state.filters,
                    launch: ''
                }  
            })
        } else {
            this.setState({
                filters: {
                    ...this.state.filters,
                    launch
                }  
            })
        }
        
    }


    render() {
        return (
            <div className="main">
            <h2 className="main-title">SpaceX Launch Programs</h2>
            <div className="sections">
                <div className="filters">
                    <h3>Filters</h3>
                    <p>Launch Year</p>
                    <hr/>
                    <div className="filters-type">
                        
                        {this.state.filters.year==2006 ? 
                            <div className="filters-type__year active" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2006</div>:
                            <div className="filters-type__year" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2006</div>
                        }
                        
                        {this.state.filters.year==2007 ? 
                            <div className="filters-type__year active" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2007</div>:
                            <div className="filters-type__year" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2007</div>
                        }
                        {this.state.filters.year==2008 ? 
                            <div className="filters-type__year active" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2008</div>:
                            <div className="filters-type__year" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2008</div>
                        }
                        {this.state.filters.year==2009 ? 
                            <div className="filters-type__year active" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2009</div>:
                            <div className="filters-type__year" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2009</div>
                        }
                        {this.state.filters.year==2010 ? 
                            <div className="filters-type__year active" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2010</div>:
                            <div className="filters-type__year" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2010</div>
                        }
                        {this.state.filters.year==2011 ? 
                            <div className="filters-type__year active" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2011</div>:
                            <div className="filters-type__year" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2011</div>
                        }
                        {this.state.filters.year==2012 ? 
                            <div className="filters-type__year active" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2012</div>:
                            <div className="filters-type__year" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2012</div>
                        }
                        {this.state.filters.year==2013 ? 
                            <div className="filters-type__year active" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2013</div>:
                            <div className="filters-type__year" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2013</div>
                        }
                        {this.state.filters.year==2014 ? 
                            <div className="filters-type__year active" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2014</div>:
                            <div className="filters-type__year" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2014</div>
                        }
                        {this.state.filters.year==2015 ? 
                            <div className="filters-type__year active" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2015</div>:
                            <div className="filters-type__year" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2015</div>
                        }
                        {this.state.filters.year==2016 ? 
                            <div className="filters-type__year active" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2016</div>:
                            <div className="filters-type__year" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2016</div>
                        }
                        {this.state.filters.year==2017 ? 
                            <div className="filters-type__year active" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2017</div>:
                            <div className="filters-type__year" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2017</div>
                        }
                        {this.state.filters.year==2018 ? 
                            <div className="filters-type__year active" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2018</div>:
                            <div className="filters-type__year" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2018</div>
                        }
                        {this.state.filters.year==2019 ? 
                            <div className="filters-type__year active" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2019</div>:
                            <div className="filters-type__year" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2019</div>
                        }
                        {this.state.filters.year==2020 ? 
                            <div className="filters-type__year active" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2020</div>:
                            <div className="filters-type__year" onClick={(e)=>{this.changeYear(e.target.innerHTML)}}>2020</div>
                        }
                    </div>

                    <p>Successful Launch</p>
                    <hr/>
                    <div className="filters-type">
                    {this.state.filters.launch=='true' ? 
                        <div className="filters-type__year active" onClick={(e)=>{this.changeLaunch(e.target.innerHTML)}}>true</div>:
                        <div className="filters-type__year" onClick={(e)=>{this.changeLaunch(e.target.innerHTML)}}>true</div>
                    }
                    
                    {this.state.filters.launch=='false' ? 
                        <div className="filters-type__year active" onClick={(e)=>{this.changeLaunch(e.target.innerHTML)}}>false</div>:
                        <div className="filters-type__year" onClick={(e)=>{this.changeLaunch(e.target.innerHTML)}}>false</div>
                    }
                    </div>
                    <p>Successful Landing</p>
                    <hr/>
                    <div className="filters-type">
                    {this.state.filters.landing=='true' ? 
                        <div className="filters-type__year active" onClick={(e)=>{this.changeLanding(e.target.innerHTML)}}>true</div>:
                        <div className="filters-type__year" onClick={(e)=>{this.changeLanding(e.target.innerHTML)}}>true</div>
                    }


                    {this.state.filters.landing=='false' ? 
                        <div className="filters-type__year active" onClick={(e)=>{this.changeLanding(e.target.innerHTML)}}>false</div>:
                        <div className="filters-type__year" onClick={(e)=>{this.changeLanding(e.target.innerHTML)}}>false</div>
                    }
                    </div>
                    
                </div>
                
                <div className="launches">
                <Launches filters={this.state.filters}/>
                </div>
            
            </div>
            </div>
        )
    };
}

export default Home;