import React from "react";
import CardItem from "../cardItem/CardItem";


export default class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            itemList: [],
            totalPrice: 0
        }
    }
    addToList = (obj) => {
        this.setState({

            itemList: [...this.state.itemList, obj],
            totalPrice: this.state.totalPrice + +obj.rea
        })
    }






    componentDidUpdate() {
        localStorage.setItem('myState', JSON.stringify(this.state))
    }
    componentDidMount() {
        if (localStorage.getItem("myState")) {
            this.setState(JSON.parse(localStorage.getItem("myState")))
        }
    }

    render() {
        return (
            <div className="container">
                <CardItem text="Super product 1" imageAlt="Hello Alt" image="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" rea='300' reduse='450' addToList={this.addToList}></CardItem>
                <CardItem text="Super product 34" imageAlt="Hello Alt" image="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" rea='300' reduse='450' addToList={this.addToList}></CardItem>
                <CardItem text="Super product 39" imageAlt="Hello Alt" image="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" rea='300' reduse='450' addToList={this.addToList}></CardItem>
                <CardItem text="Super product 56" imageAlt="Hello Alt" image="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" pris='400' addToList={this.addToList}></CardItem>
                <CardItem text="Super product 77" imageAlt="Hello Alt" image="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" pris='400' addToList={this.addToList} ></CardItem>
                <CardItem text="Super product 99" imageAlt="Hello Alt" image="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" pris='400' addToList={this.addToList} ></CardItem>
                <div className="wishList">
                    <h1>Wish list</h1>
                    <ul>{this.state.itemList.map((value) => {
                        return (
                            <h3>{value.text}</h3>
                        )
                    })}</ul>
                    <h2>Total Price: {this.state.totalPrice}</h2>
                </div>
            </div>
        )
    }
}