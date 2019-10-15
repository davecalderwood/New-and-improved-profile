import React, { Component } from 'react';
import BookData from '../data/book.json';

export default class Favorites extends Component {
    constructor (props)
    {
      super(props);
      this.state={
        books: []
      }
      console.log('Books', BookData);
    }
    render() {
        return (
            <div className="favorites">

                <div className="row">
                    <div className="book">
                        {BookData.slice(0, 9).map((bookDetail, index) => {
                            return <div key={index}>
                                <div className="card">
                                    {bookDetail.series}<br/>
                                    {bookDetail.title}<br/>
                                    <img src=
                                    {bookDetail.image} alt="Book"></img><br/>
                                    {bookDetail.author}
                                </div>
                            </div>
                        })}
                    </div>
                </div>

                <div className="row">
                <div className="card">1</div>
                    <div className="card">2</div>
                    <div className="card">3</div>
                    <div className="card">4</div>
                    <div className="card">5</div>
                    <div className="card">6</div>
                    <div className="card">7</div>
                    <div className="card">8</div>
                    <div className="card">9</div>
                </div>

                {/* <div className="row">
                <div className="card">1</div>
                    <div className="card">2</div>
                    <div className="card">3</div>
                    <div className="card">4</div>
                    <div className="card">5</div>
                    <div className="card">6</div>
                    <div className="card">7</div>
                    <div className="card">8</div>
                    <div className="card">9</div>
                </div> */}
            </div>
        );
    }
}