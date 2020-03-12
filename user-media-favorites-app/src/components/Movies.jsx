import React, {Component} from 'react';

class Movies extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("The child movie component has mounted");
    }

    render(){
        return(
            <div>
                <h1>Movies</h1>
                <div>
                    {this.props.movies.map(m => <h1>{m}</h1>)}
                </div>
            </div>
        )
    }
}

export default Movies;