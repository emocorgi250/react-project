import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import propTypes from "prop-types";

import FoodItem from "./FoodItem";

class FavList extends Component {
    render(){
        
        let favList = this.props.favList.filter((fooditem)=>{return fooditem.isFav === true;});
        let total = 0;
        favList.forEach((fooditem) => (total += fooditem.price));
        return (
            <Container>
            <h2>Total Price: ${total.toLocaleString("en-US")}
            </h2>
            <Row >
                {favList.map((fooditem) =>(
                <Col key={fooditem.id}>
                <FoodItem  fooditem={fooditem} starItem={this.props.starItem} unstarItem={this.props.unstarItem}/>
                </Col>
                ))
            }        
            </Row>
            </Container>
        )
        
    }
}

FavList.propTypes={
    favList: propTypes.array.isRequired,
    starItem: propTypes.func.isRequired,
    unstarItem: propTypes.func.isRequired,
}

export default FavList;
