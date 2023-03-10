import React, { Component } from "react";
import './catalog.css';
import { fetchProducts, actAddProductRequest } from '../actions';
import { connect } from 'react-redux';
import Modal from 'react-awesome-modal';
import ItemsCatalog from "./itemCatalog";


class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        this.nameRef = React.createRef();
        this.priceRef = React.createRef();
        this.imgRef = React.createRef();
        this.detailRef = React.createRef();
        this.speciesRef = React.createRef();
        this.colorRef = React.createRef();
    }
    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }
    componentDidMount() {
        this.props.fetchProducts();
    }
    addProduct(){
        let name = this.nameRef.current.value;
        let price = this.priceRef.current.value;
        let img = this.imgRef.current.value;
        let detail = this.detailRef.current.value;
        let species = this.speciesRef.current.value;
        let color = this.colorRef.current.value;
        this.props.addProduct({name: name, price: price, img: img, detail: detail, species: species, color: color})
    }
    render() {
        const listProduct = this.props.stateReducers.data.map((item, index) => {
            return <ItemsCatalog key={item.id + index} index={index} {...item} id={item.id} />
        });
        return (
            <div className="adMain_content catalog_content">
                <button className="catalogBtn btn_add" onClick={() => this.openModal()}>New Product</button>
                <Modal
                    visible={this.state.visible}
                    width="810"
                    height="450"
                    effect="fadeInDown"
                    onClickAway={() => this.closeModal()}
                >
                    <div className="modalAdd">
                        <div className="modalAdd_header">
                            New Product
                        </div>
                        <div className="modalAdd_body">
                            <div className="modalAdd_input">
                                <label > Name </label>
                                <input type="text" ref={this.nameRef}/>
                            </div>
                            <div className="modalAdd_input">
                                <label > Price VN??</label>
                                <input type="number"  ref={this.priceRef}/>
                            </div>
                            <div className="modalAdd_input">
                                <label > Images </label>
                                <select  ref={this.imgRef}>
                                    <option value="/images/spx2-1.png">H??nh 1</option>
                                    <option value="/images/spx2-2.png">H??nh 2</option>
                                    <option value="/images/spx2-3.png">H??nh 3</option>
                                    <option value="/images/spx2-4.png">H??nh 4</option>
                                    <option value="/images/spx2-5.png">H??nh 5</option>
                                    <option value="/images/spx2-6.png">H??nh 6</option>
                                    <option value="/images/spx2-7.png">H??nh 7</option>
                                    <option value="/images/spx2-8.png">H??nh 8</option>
                                    <option value="/images/spx2-9.png">H??nh 9</option>
                                    <option value="/images/spx2-10.png">H??nh 10</option>
                                    <option value="/images/spx2-11.png">H??nh 11</option>
                                    <option value="/images/spx2-12.png">H??nh 12</option>
                                    <option value="/images/spx2-13.png">H??nh 13</option>
                                    <option value="/images/spx2-14.png">H??nh 14</option>
                                    <option value="/images/spx2-15.png">H??nh 15</option>
                                </select>
                            </div>
                            <div className="modalAdd_input">
                                <label > Detail </label>
                                <input type="text"  ref={this.detailRef}/>
                            </div>
                            <div className="modalAdd_input">
                                <label > Species </label>
                                <select  ref={this.speciesRef}>
                                    <option value="chautreo">C??y ch???u treo</option>
                                    <option value="cohoa">C??y c??? hoa</option>
                                    <option value="dayleo">C??y d??y leo</option>
                                    <option value="deban">C??y ????? b??n</option>
                                    <option value="mayman">C??y may m???n</option>
                                    <option value="trangtri">C??y trang tr??</option>
                                    <option value="noithat">C??y n???i th???t</option>
                                </select>
                            </div>
                            <div className="modalAdd_input">
                                <label > Color </label>
                                <select  ref={this.colorRef}>
                                    <option value="#98cb4a">Xanh L??</option>
                                    <option value="#f76d3c">????? Cam</option>
                                    <option value="#913ccd">T??m</option>
                                    <option value="#5481e6">Xanh Tr???i</option>
                                    <option value="#f7d842">V??ng</option>
                                    <option value="#f15f74">H???ng</option>
                                </select>
                            </div>
                        </div>
                        <div className="modalAdd_btn">
                            <button type="button" className="catalogBtn modalAdd_btn-regis" onClick={() => { this.closeModal(); this.addProduct()}}>ADD</button>
                            <button type="button" className="catalogBtn modalAdd_btn-cancel" onClick={() => this.closeModal()}> Cancel</button>
                        </div>
                    </div>
                </Modal>
                <table id="customers">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price VN??</th>
                            <th>Images</th>
                            <th>Detail</th>
                            <th>Species</th>
                            <th>Color</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listProduct}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        stateReducers: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        addProduct: (data) => dispatch(actAddProductRequest(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
