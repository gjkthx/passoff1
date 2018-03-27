import React,{Component} from 'react';
import AFunction from './AFunction';
import BFunction from './BFunction';
import axios from 'axios';


export default class Home extends Component {
    constructor(){
        super();

        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        axios({
            url:'/api/getters',
            method:'get'
        })
        .then((response) =>{
            console.log('get worked',response)
        })
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <div>hello, this worked</div>

                <BFunction name="michael" />
                <div>
                    <AFunction />
                </div>
                <div>
                    props location = {this.props.location.pathname}
                </div>
                <div>
                    props match = {this.props.match.path} 
                    <div></div>
                    you may want to check the console.log
                                       {/* 42J 42K */}
                </div>
                <div>
                    <button onClick={this.handleClick}>click to get</button>
                </div>
            </div>

        )
    }
}