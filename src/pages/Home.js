import React, { Component } from 'react';
import CardData from '../data/data.json';

export default class Home extends Component {

    constructor (props)
    {
      super(props);
      this.state={
        data: [],
        id: Number,
        name: '',
        agency: '',
        
        cardOption: true
      }
      console.log('Data', CardData);
    }

    changeCard = () => {
        this.setState({
            cardOption: !this.state.cardOption
        });
        console.log('New Card:')
    }

    render() {
        return (
            <div className="homepage">Home

                {/* {CardData.slice(0, 4).map((cardDetail, index) => {
                    return <div key={index}>

                        <div className="card">
                            <div className="card-header"> {cardDetail.name}
                                <i className="fa fa-ellipsis-v fa-lg" onClick={this.changeCard}></i>
                            </div>

                            <div className="card-content">
                                    <strong>{cardDetail.subTitle}</strong><br/>
                                    {cardDetail.content}

                                    <div className="dropdown">
                                        {!this.state.cardOption && <Dropdown />}
                                    </div>
                            </div>
                        </div>

                    </div>
                })} */}

            </div>
        );
        
    }
}
// const Dropdown = () => (
//     <div className="other-cards">
//         {CardData.map((cardDetail, index) => {
//             return <div key={index}>
//                 <div className="new-cards">
//                     {cardDetail.name}
//                 </div>
//             </div>
//         })}
//     </div>
// )