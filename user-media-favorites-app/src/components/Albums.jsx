import React, {Component} from 'react';

class Albums extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log("The child album component has mounted");
    }

    render(){
        return(
            <div>
                <h1>Albums</h1>
                <div>
                    {this.props.albums.map(m => <h1>{m}</h1>)}
                </div>
            </div>
        )
    }
}

export default Albums;