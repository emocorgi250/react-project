import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import propTypes from "prop-types";

export class FoodItem extends Component{
    render(){
        const{id,name,type, dietary,price, popularity,image,isFav}=this.props.fooditem;
        return (
        <Card style={{ backgroundColor: "#008000", textAlign: "center", height:"100%", width:"12rem"}}>
        <Card.Img variant="top" src={image} style={{width: '12rem'}}/>
        <Card.Body>
            <Card.Title>
                {name}
            </Card.Title>
            <Card.Text>
            <span>Price: {price.toLocaleString("en-US")}</span>
            <br></br>
            <span>Type: {type}</span>
            <br></br>
            <span>Popularity:{popularity}</span>
            <br></br>
            <span>Dietary: {dietary}</span>
            </Card.Text>
            <Button onClick={this.props.starItem.bind(this, id)} disabled={isFav === true}>Add to favorite</Button>
            <Button onClick={this.props.unstarItem.bind(this, id)} disabled={isFav === false}>Remove From favorite</Button>
        </Card.Body>

        </Card>
        );    
    }
}

FoodItem.propTypes={
    fooditem:propTypes.object.isRequired,
    starItem: propTypes.func.isRequired,
    unstarItem: propTypes.func.isRequired,
}

export default FoodItem;