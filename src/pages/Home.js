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
            <div className="homepage">

                <div className="left"></div>

                <div className="middle">
                    <div className="card">
                        <div className="header">David Harrison Calderwood</div>
                        <img src="./images/profile.jpg" alt="profile-pic"></img>
                        <div className="contact-info">
                            <p>davidhcalderwood@gmail.com</p>
                            <p>david.calderwood5@gmail.com</p>
                            <p>(503) 858-5790</p>
                        </div>
                        <div className="bottom-info">
                            <div className="bottom-card left-card">1</div>
                            <div className="bottom-card middle-card">2</div>
                            <div className="bottom-card right-card">3</div>
                        </div>
                    </div>
                </div>

                <div className="right"></div>

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