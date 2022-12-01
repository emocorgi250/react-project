import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { Dropdown } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import propTypes from "prop-types";

export class Filter extends Component{
    render(){
      return (
        <Container
        className="flex-md-row d-flex flex-column"
      >
    <div className="flex-row align-items-left  px-2">
    <span>Filter by Type:</span>
    <DropdownButton id="dropdown-basic-button" title={this.props.type} onSelect={this.props.filterType}>
    <Dropdown.Item eventKey="All">All</Dropdown.Item>
      <Dropdown.Item eventKey="Coffee">Coffee</Dropdown.Item>
      <Dropdown.Item eventKey="Tea">Tea</Dropdown.Item>
      <Dropdown.Item eventKey="Pastry">Pastry</Dropdown.Item>
    </DropdownButton>  
    </div> 
    <div className="flex-row align-items-center px-2">
    <span>Filter by Dietary:</span>
    <DropdownButton id="dropdown-basic-button" title={this.props.dietary} onSelect={this.props.filterDietary}>
    <Dropdown.Item eventKey="All">All</Dropdown.Item>
      <Dropdown.Item eventKey="gluten-free">gluten-free</Dropdown.Item>
      <Dropdown.Item eventKey="nut-free">nut-free</Dropdown.Item>
    </DropdownButton>  
        </div>
        <div className="flex-row align-items-center px-2">
        <span>Sort by Price:</span>
    <DropdownButton id="dropdown-basic-button" title={this.props.price} onSelect={this.props.sortPrice}>
    <Dropdown.Item eventKey="None">None</Dropdown.Item>
      <Dropdown.Item eventKey="Low to High">Low to High</Dropdown.Item>
      <Dropdown.Item eventKey="High to Low">High to Low</Dropdown.Item>
    </DropdownButton>  
        </div>
      </Container>
      );
    }
}

Filter.propTypes = {
  type: propTypes.string.isRequired,
  dietary: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
  filterType: propTypes.func.isRequired,
  filterDietary: propTypes.func.isRequired,
  sortPrice: propTypes.func.isRequired,
};

export default Filter;