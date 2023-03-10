import React from 'react';
import { Route, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchProducts, filterColor, filterSpecies, filterPrice, sort,search, pagination, pagination1 } from '../actions';
import heading from './heading.png';
import './productList.css';
import ResultViewGrid from './resultView/resultViewGrid';
import ResultViewList from './resultView/resultViewList';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleSpecies:false,
            togglePrice:false,
            toggleColor:false,
            screenWidth:false
        }
    }
    componentDidMount() {
        window.addEventListener("resize",this.getScreenWidth);
        this.props.fetchProducts();
    }
    componentWillMount() {
        window.removeEventListener("resize",this.getScreenWidth);
    }
    getScreenWidth = () => {
        this.setState({
            screenWidth:window.innerWidth > 1280
        })
    }
    changeToggle = (type) => {
        switch(type) {
            case "species" :
                this.setState({
                    toggleSpecies : !this.state.toggleSpecies
                })
                break;
            case "price" :
                this.setState({
                    togglePrice : !this.state.togglePrice
                })
                break;
            case "color" :
                this.setState({
                    toggleColor : !this.state.toggleColor
                })
                break;
        }
    }
    handleChangeShow = (event) =>{
        this.props.pagination1(event.target.value);
        this.props.pagination(1)
    }
  
    selectAll = () => {
        this.props.search("C");
        this.props.filterSpecies("");
        this.props.pagination(1);
    }
    render() {
        console.log(this.state.screenWidth)
        return (
                <div className="wrapper">
                    <div className="container collectiion_page">
                        <NavLink exact to="/">Home /</NavLink>
                        <span>Danh s??ch s???n ph???m</span>
                    </div>
                    <div className="product container">
                        <div className="menu-left">
                            <div className="filterSpecies">
                                <p className="block_title" onClick = {()=>this.changeToggle("species")}>
                                    Danh m???c s???n ph???m
                                </p>
                                <hr className="block_title-hr"></hr>
                                { this.state.toggleSpecies || this.state.screenWidth 
                                 ?  
                                <div>
                                    <label className="filter_item" htmlFor="allPrices" >
                                        <input id="allPrices" type="radio" name="species" value="" className="hidden" defaultChecked onChange={this.selectAll } />
                                        <span className="label"></span>
                                        T???t c???
                                    </label>
                                    <label className="filter_item" htmlFor="chautreo" >
                                        <input id="chautreo" type="radio" name="species" value="chautreo" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterSpecies("chautreo")}} />
                                        <span className="label"></span>
                                        C??y ch???u treo
                                    </label>
                                    <label className="filter_item" htmlFor="cohoa" >
                                        <input id="cohoa" type="radio" name="species" value="cohoa" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterSpecies("cohoa")}} />
                                        <span className="label"></span>
                                        C??y c??? hoa
                                    </label>
                                    <label className="filter_item" htmlFor="dayleo" >
                                        <input id="dayleo" type="radio" name="species" value="dayleo" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterSpecies("dayleo")}} />
                                        <span className="label"></span>
                                        C??y d??y leo
                                    </label>
                                    <label className="filter_item" htmlFor="deban" >
                                        <input id="deban" type="radio" name="species" value="deban" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterSpecies("deban")}} />
                                        <span className="label"></span>
                                        C??y ????? b??n
                                    </label>
                                    <label className="filter_item" htmlFor="mayman" >
                                        <input id="mayman" type="radio" name="species" value="mayman" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterSpecies("mayman")}} />
                                        <span className="label"></span>
                                        C??y may m???n
                                    </label>
                                    <label className="filter_item" htmlFor="trangtri" >
                                        <input id="trangtri" type="radio" name="species" value="trangtri" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterSpecies("trangtri")}} />
                                        <span className="label"></span>
                                        C??y trang tri
                                    </label>
                                    <label className="filter_item" htmlFor="noithat" >
                                        <input id="noithat" type="radio" name="species" value="noithat" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterSpecies("noithat")}} />
                                        <span className="label"></span>
                                        C??y n???i th???t
                                    </label>
                                </div>
                                : null
                                }
                            </div>
                               
                            <div className="filterPrice">
                                <p className="block_title" onClick = {()=>this.changeToggle("price")}>
                                    T??m theo gi??
                                </p>
                                <hr className="block_title-hr"></hr>
                                { this.state.togglePrice  || this.state.screenWidth 
                                ?  
                                <div>
                                    <label className="filter_item" htmlFor="allPrice" >
                                        <input id="allPrice" type="radio" name="price" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterPrice(0,2000000)}} defaultChecked />
                                        <span className="label"></span>
                                        T???t c???
                                    </label>
                                    <label className="filter_item" htmlFor="twoFour" >
                                        <input id="twoFour" type="radio" name="price" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterPrice(200000,400000)}} />
                                        <span className="label"></span>
                                        200.000 ??-400.000 ??
                                    </label>
                                    <label className="filter_item" htmlFor="fourSix" >
                                        <input id="fourSix" type="radio" name="price" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterPrice(400000,600000)}} />
                                        <span className="label"></span>
                                        400.000 ??-600.000 ??
                                    </label>
                                    <label className="filter_item" htmlFor="sixEight" >
                                        <input id="sixEight" type="radio" name="price" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterPrice(600000,800000)}} />
                                        <span className="label"></span>
                                        600.000 ??-800.000 ??
                                    </label>
                                    <label className="filter_item" htmlFor="eightTen" >
                                        <input id="eightTen" type="radio" name="price" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterPrice(800000,1000000)}} />
                                        <span className="label"></span>
                                        800.000 ??-1.000.000 ??
                                    </label>
                                    <label className="filter_item" htmlFor="tenTwenty" >
                                        <input id="tenTwenty" type="radio" name="price" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterPrice(1000000,2000000)}} />
                                        <span className="label"></span>
                                        1.000.000 ??-2.000.000 ??
                                    </label>
                                </div>
                                : null
                                }
                            </div>
                            <div className="filterColor">
                                <p className="block_title" onClick = {()=>this.changeToggle("color")}>
                                    T??m theo m??u
                        </p>
                                <hr className="block_title-hr"></hr>
                                { this.state.toggleColor || this.state.screenWidth 
                                ?  
                                <div>
                                    <label className="filter_item" htmlFor="xanhcay" >
                                        <input id="xanhcay" type="radio" name="color" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterColor("#98cb4a")}} />
                                        Xanh c??y
                                        <span className="label"></span>
                                    </label>
                                    <label className="filter_item" htmlFor="docam" >
                                        <input id="docam" type="radio" name="color" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterColor("#f76d3c")}} />
                                        ????? cam
                                        <span className="label"></span>
                                    </label>
                                    <label className="filter_item" htmlFor="tim" >
                                        <input id="tim" type="radio" name="color" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterColor("#913ccd")}} />
                                        T??m
                                        <span className="label"></span>
                                    </label>
                                    <label className="filter_item" htmlFor="xanhtroi" >
                                        <input id="xanhtroi" type="radio" name="color" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterColor("#5481e6")}} />
                                        Xanh tr???i
                                        <span className="label"></span>
                                    </label>
                                    <label className="filter_item" htmlFor="vang" >
                                        <input id="vang" type="radio" name="color" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterColor("#f7d842")}} />
                                        V??ng
                                        <span className="label"></span>
                                    </label>
                                    <label className="filter_item" htmlFor="hong" >
                                        <input id="hong" type="radio" name="color" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterColor("#f15f74")}} />
                                        H???ng
                                        <span className="label"></span>
                                    </label>
                                    <label className="filter_item" htmlFor="allColor" >
                                        <input id="allColor" type="radio" name="color" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterColor("")}} defaultChecked />
                                        T???t c???
                                        <span className="label"></span>
                                    </label>
                                </div>
                                : null
                                }
                            </div>
                        </div>

                        <div className="displayProduct">
                            <div className="displayHeading">
                                <div className="headingImg">
                                    <img src={heading} alt="heading" />
                                </div>
                                <div className="headingNav">
                                    <div>
                                        <NavLink exact to="/product" activeStyle={{color: "#59b586"}} className="view_product">
                                            <i className="fas fa-th"></i>
                                        </NavLink>
                                        <NavLink exact to="/product/listView" activeStyle={{color: "#59b586"}} className="view_product">
                                            <i className="fas fa-list"></i>
                                        </NavLink>
                                    </div>
                                    <div>
                                        <div className="sort_product">
                                            <span>S???p x???p theo</span>
                                            <select onChange={event => this.props.sortProduct(event.target.value)}>
                                                <option value="name"> T??n s???n ph???m </option>
                                                <option value="price"> Gi?? s???n ph???m </option>
                                            </select>
                                        </div>
                                        <div className="sort_product">
                                            <span>Show</span>
                                            <select onChange={this.handleChangeShow}>
                                                <option value="6"> 6 </option>
                                                <option value="12"> 12 </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="resultView">
                                <Route exact path="/product" component={ResultViewGrid} />
                                <Route path="/product/:listView" component={ResultViewList} />
                            </div>

                        </div>
                    </div>
                </div>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        filterColor: (color) => dispatch(filterColor(color)),
        filterPrice: (min, max) => dispatch(filterPrice(min, max)),
        filterSpecies: (species) => dispatch(filterSpecies(species)),
        sortProduct: (data) => dispatch(sort(data)),
        search: (name) => dispatch(search(name)),
        pagination: (number) => dispatch(pagination(number)),
        pagination1: (number) => dispatch(pagination1(number))
    }
}

export default connect(null, mapDispatchToProps)(ProductList);