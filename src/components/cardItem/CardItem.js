import React from "react";

export default class CardItem extends React.Component {
    addToList = () =>{
        const obj = {
            text:this.props.text,
            rea: this.props.rea || this.props.pris
        }
        this.props.addToList(obj)
    }

    render() {
        return (
            <div className="product">
                <img className="imgs"
                    src={this.props.image}
                    alt={this.props.imageAlt}
                />
                <h1 className="ItemName"> {this.props.text}</h1>
                <p className="desc">descriptionSome text for this super product that all want to buy...</p>
                <div className="pr">
                <h2 className="rea"> {this.props.rea}</h2>
                    <h2 className="pris">{this.props.pris}</h2>
                    <h3  className="reduse">{this.props.reduse}</h3>
                </div>
                <button onClick={this.addToList} className="addList">Add to list</button>
            
                
            </div>
        )
    }
}
