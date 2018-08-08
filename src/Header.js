import React, { Component } from "react";

export default class Header extends Component {

	constructor(props){
		super(props);
		this.state = {
			age: props.age
		}
	}

	older(){
		this.setState(
			{
				age:this.state.age+3
			}
		)
	}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-1">
            {this.state.age}
          </div>
          <div>
              <button onClick={()=>{this.older()}} className="btn btn-primary">Older! </button>
					</div>
        </div>
      </div>
    );
  }
}
