import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';
import './App.css';
import Scroll from '../components/scroll';
import ErrorBoundry from '../components/ErrorBoundry';

//STATE >> props
//STATE is an object that describes your application.

//to add a STATE we need to create a constructor
//in react the constructor will declare the STATE
class App extends Component 
{
    constructor() 
    { 
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    componentDidMount()
    {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=> response.json()) //converts the response to json format)))    
            .then(users =>{this.setState({ robots: users })})
    }

    onSearchChange = (event) => 
    { //I can pass this to the SearchBox component.
        this.setState({ searchfield: event.target.value })  
    }

    render() 
    {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => 
        {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if (robots.length === 0)
        {
            return <h1>Loading</h1>
        } 
        else
        {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll> 
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}
export default App;
