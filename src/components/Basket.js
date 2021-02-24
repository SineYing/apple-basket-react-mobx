import React, { Component } from 'react'
import '../assets/styles/appleBasket.scss'

export default class Basket extends Component{
    render(){
        return <div className="appleBusket">
            <div className="title">苹果篮子</div>

            <div className="stats">
                <div className="section">
                    <div className="head">当前</div>
                    {/* <div className="content">{notEatenQuantity}个苹果，{notEatenWeight}克 */}
                {/* </div> */}
                </div>
                <div className="section">
                    <div className="head">已吃掉</div>
                    {/* <div className="content">{EatenQuantity}个苹果，{EatenWeight}克</div> */}
                </div>
            </div>

            <div className="appleList">
                {/* {this.getAppleItem()} */}
            </div>

            <div className="btn-div">
                {/* <button className={isPicking ? 'disabled' : ''} onClick={() => pickApple()} >{buttonText}</button> */}
            </div>
        </div>
    }
}