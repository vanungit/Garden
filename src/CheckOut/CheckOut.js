import React from 'react';

// import { Link } from "react-router-dom";
import '../CheckOut/CheckOut.css';
import { connect } from 'react-redux';
import { checkLogIn,checkLogIn_edit } from '../actions'
import { Redirect } from 'react-router-dom'

import axios from 'axios';
class CheckOut extends React.Component {
    constructor(props) {
        super(props);
        const name =  JSON.parse(localStorage.getItem("name"));
        const addr =  JSON.parse(localStorage.getItem("address"));
        const phone =  JSON.parse(localStorage.getItem("phone"))
        this.state = {
            select:3,
            info: name + " " + phone + " " + addr,
            toggle:false,
            cardNumber:"",
            redirect:false

        }
    }   
    
    findTotal = (array) => {
        return  Math.floor( array.reduce((accu,element) => {
             return accu+parseInt(element.price)*parseInt(element.number)
         },0) *1.1)
     }

    getInfo = (e) => {
        this.setState({
            info:e.target.value
        })
    }
    getCard = (e) => {
        this.setState({
            cardNumber:e.target.value
        })
    }
    changeToggle = () => {
        this.setState({
            toggle : !this.state.toggle
        })
    }

    submitOrder = () => {
        console.log(this.props.dataList.checkLogIn);
        let d = new Date();
        let dateUpdate = d.getFullYear() + "-" + parseInt(d.getMonth()) + 1 + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes()
        const product =  JSON.parse(localStorage.getItem("cartUser"));
        const idUser =  JSON.parse(localStorage.getItem("id"));
        console.log(idUser)
        let order = {}
        for(let i=0; i<=product.length ; i++){
            order[i] = product[i];
        }
        let dataOrder = JSON.stringify(order)
        axios.put('https://5ca5c51d3a08260014278a74.mockapi.io/usersShop/' + idUser,
                {
                    order: dataOrder,
                    dateOrder: dateUpdate,
                    statusOrder: "Ordered",
                    infoOrder:this.state.info,
                    cardNumber:this.state.cardNumber
                }
            )
            alert("B???n ???? ?????t h??ng th??nh c??ng !")
          this.props.checkLogIn_edit(idUser,[]);
          localStorage.setItem("cartUser", JSON.stringify([]));
          localStorage.setItem("orderUser",dataOrder);
          localStorage.setItem("dateOrder", JSON.stringify(dateUpdate));
          localStorage.setItem("statusOrder", JSON.stringify("Ordered"));
          this.setState({
            redirect:true
        })


    }
    render() {
        const product =  JSON.parse(localStorage.getItem("cartUser"));
        console.log(this.props.dataList.checkLogIn);
        if(!this.state.redirect)
        return (
            <div className="CheckOut">
                <div className="title">
                    <div>
                        <p> THANH TO??N</p>
                    </div>
                </div>
                <div className="info">
                    <div>
                        <p><i className="fas fa-map-marker-alt"> </i> ?????a Ch??? Nh???n H??ng</p>
                        {(!this.state.info.includes(undefined)) ? this.state.info : null}
                        <button onClick = {() => this.changeToggle()}> Thay ?????i </button>
                        { this.state.toggle
                            ? <div><input onChange={this.getInfo} type="text"></input></div>
                            : <></>
                        }

                    </div>
                </div>

                <div className="ship">
                    <div>
                        <span>Ch???n ph????ng th???c giao h??ng </span>
                        <button onClick={()=>this.setState({select:1})}>V?? Airpay</button>
                        <button onClick={()=>this.setState({select:2})}>Th??? t??n d???ng / ghi n???</button>
                        <button onClick={()=>this.setState({select:3})}>Thanh to??n khi nh???n h??ng</button>
                        <div>
                            { this.state.select ===1 ? <div className="airpay">Use Airpay</div>
                            : ( this.state.select ===2 ? <div className="card">Nh???p m?? th???
                                <input onChange={this.getCard} type="text"></input>
                            </div>
                            : <div className="cod">B???n s??? thanh to??n sau khi nh???n h??ng .</div>
                            )
                            }
                        </div>
                    </div>
                </div>
                <div className="total">
                    <div className="wrapper">
                        <div className="left1">T???ng ti???n h??ng</div>
                        <div className="left2">Ph?? v???n chuy???n</div>
                        <div className="left3">T???ng thanh to??n</div>
                        <div className="right1">{this.findTotal(product)} ??</div>
                        <div className="right2"> {
                            (product.length) ? <span>20 000</span>
                            : null
                            } ??</div>
                        <div className="right3"><span style={{color:"#3FB871",fontWeight:"bold",fontSize:"1.2em"}}> {
                            (product.length) ? this.findTotal(product)+20000
                            : 0
                            }
                         </span> ??</div>
                        <div className="bottom">
                        <button onClick={()=>this.submitOrder()}>Thanh to??n</button>
                        </div>
                    </div>
                </div>
            </div>
        );
        else return <Redirect to="/"/>
    }
}


const mapStateToProps = state => {
    return {
        dataList: state
    };
};
const mapDispatchToProps = dispatch => {
    return {
        checkLogIn: (status,name,cart,address,phone,username) => dispatch(checkLogIn(status,name,cart,address,phone,username)),
        checkLogIn_edit: (id, cart) => dispatch(checkLogIn_edit(id, cart)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CheckOut);
