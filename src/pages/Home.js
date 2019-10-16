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

{/* Left Card */}
                <div className="left">
                    {CardData.slice(0, 3).map((cardDetail, index) => {
                    return <div key={index}>

                        <div className="card">
                            <div className="changeable-header"> {cardDetail.name}
                                {/* <i className="fa fa-ellipsis-v fa-lg" onClick={this.changeCard}></i> */}
                            </div>

                            <div className="card-content">
                                    {/* <strong>{cardDetail.subTitle}</strong><br/> */}
                                    <p>{cardDetail.content}</p>

                                    {/* <div className="dropdown">
                                        {!this.state.cardOption && <Dropdown />}
                                    </div> */}
                            </div>
                        </div>

                    </div>
                })}
                </div>

{/* Middle Card */}
                <div className="middle">
                    <div className="card profile">
                        <div className="header">David Harrison Calderwood</div><br/>
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
                    {CardData.slice(7, 9).map((cardDetail, index) => {
                    return <div key={index}>

                        <div className="card">
                            <div className="changeable-header"> {cardDetail.name}
                                {/* <i className="fa fa-ellipsis-v fa-lg" onClick={this.changeCard}></i> */}
                            </div>

                            <div className="card-content">
                                    {/* <strong>{cardDetail.subTitle}</strong><br/> */}
                                    <p>{cardDetail.content}</p>

                                    {/* <div className="dropdown">
                                        {!this.state.cardOption && <Dropdown />}
                                    </div> */}
                            </div>
                        </div>

                    </div>
                })}
                </div>

{/* Right Card */}
                <div className="right">
                    {CardData.slice(3, 5).map((cardDetail, index) => {
                        return <div key={index}>

                            <div className="card">
                                <div className="changeable-header"> {cardDetail.name}
                                    {/* <i className="fa fa-ellipsis-v fa-lg" onClick={this.changeCard}></i> */}
                                </div>

                                <div className="card-content">
                                        {/* <strong>{cardDetail.subTitle}</strong><br/> */}
                                        <p>{cardDetail.content}</p>

                                        {/* <div className="dropdown">
                                            {!this.state.cardOption && <Dropdown />}
                                        </div> */}
                                </div>
                            </div>

                        </div>
                    })}
                    <div className="card">
                        <div className="changeable-header">Projects</div>
                        <div className="card-content">
                            <strong>Yona-Brixtel</strong>
                            <p>At YB we have been using Angular 7+ with PrimeNG and Bootstrap to build the FAA a new internal application. </p>
                            <strong>Stars Mobile App</strong>
                            <p>At Helio Training we started building the Utah Stars a mobile application that was similar to the Utah Jazz app. This was built using React-Native. After graduation we passed the project down to the next group of students.</p>
                        </div>
                    </div>
                </div>
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