import React, { useEffect, useState, Component } from 'react';
import {coffeeList} from "./assets/coffeeList";
import  Container  from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FoodItem from "./components/FoodItem";
import FavList from "./components/FavList";
import Filter from "./components/Filter";
import "./App.css";


class App extends Component{
    state={
        foodlist:coffeeList,
        filteredlist: coffeeList,
        type:"All",
        dietary:"All",
        price:"None",

    };

    filterList=()=>{
        let tmp = coffeeList;
        tmp = tmp.filter((fooditem)=>
        {
            return (
                this.state.type ==="All" || fooditem.type === this.state.type);
            
        });

        tmp = tmp.filter((fooditem)=>
        {
            return (
                this.state.dietary ==="All" || fooditem.dietary === this.state.dietary);
            
        });

        if (this.state.price === "None") {
            this.setState({
                filteredlist: tmp,
            });
            return;
          };

        if (this.state.price === "High to Low"){
            tmp.sort((x, y) => 
            {
            if (x.price < y.price) {
                return 1;
            } 
            else if (x.price > y.price) {
                return -1;
            } 
            else {                  
                return 0;
            }
            });
        };
        
        if (this.state.price === "Low to High"){
            tmp.sort((x, y) => 
            {
            if (x.price < y.price) {
                return -1;
            } 
            else if (x.price > y.price) {
                return 1;
            } 
            else {                  
                return 0;
            }
            });
        };
        this.setState({
            filteredlist: tmp,
        });
        };

        filterType=(t)=> {
            this.setState(
            {type:t},
            () => this.filterList()
            );
        };

        filterDietary=(d)=> {
            this.setState(
            {dietary:d},
            () => this.filterList()
            );
        };

        sortPrice=(p)=> {
            this.setState(
            {price:p},
            () => this.filterList()
            );
        };

        starItem = (id) => {
            this.setState(
                {
                    foodlist: this.state.foodlist.map(
                        (fooditem) => {
                            if (fooditem.id === id){
                                fooditem.isFav = true;
                            }
                            return fooditem;

                        }
                        ),
                }
            );
        };
        unstarItem = (id) => {
            this.setState(
                {
                    foodlist: this.state.foodlist.map(
                        (fooditem) => {
                            if (fooditem.id === id){
                                fooditem.isFav = false;
                            }
                            return fooditem;

                        }
                        ),
                }
            );
        }
        
        render(){
            return (
              <div className="main">
                <div className="header">
                    <h1>Coffee Shop</h1>
                </div>
                <Filter 
                    type = {this.state.type}
                    dietary={this.state.dietary}
                    price={this.state.price}
                    filterType={this.filterType}
                    filterDietary={this.filterDietary}
                    sortPrice={this.sortPrice}
                    />

                <Container className="p-4" style={{backgroundColor:"#aaa"}}>
                <Row className="flex-wrap">
                <Col md={7}>
                <Row className="flex-wrap">
                {this.state.filteredlist.map((fooditem) => {
                    return(
                    <Col key={fooditem.id} className="my-2">
                    <FoodItem fooditem={fooditem} starItem={this.starItem} unstarItem={this.unstarItem}/>
                    </Col>
                    );
                })}
                </Row>
                </Col>
                <Col md={5}>
                    <FavList
                        favList={this.state.foodlist}
                        starItem={this.starItem}
                        unstarItem={this.unstarItem}
                    />
                    
            </Col>
            </Row>
            </Container>
                </div>

            );
        }
}
              
export default App;