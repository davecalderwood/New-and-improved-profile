import React, { Component } from 'react';
import CardData from '../data/data.json';

export default class Home extends Component {

    constructor ()
    {
      super();
      this.state={
        data: [],
        id: Number,
        name: '',
        agency: ''
        
      }
      console.log('Data', CardData);

    }

    render() {
        return (
            <div className="homepage">

                {CardData.map((cardDetail, index) => {
                    return <div>

                        <div className="card">
                            <div className="card-header"> {cardDetail.name}
                                <i className="fa fa-ellipsis-v fa-lg"></i>
                            </div>
                            <div className="card-content">
                                {cardDetail.content}
                            </div>
                        </div>
                        
                    </div>
                })}
            </div>
        );
        
    }
}