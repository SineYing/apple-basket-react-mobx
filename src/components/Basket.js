import React, { Component } from 'react'
import AppleItem from './AppleItem';
import '../assets/styles/appleBasket.scss'
import { observer, inject } from 'mobx-react';

@inject('applesBox')
@observer
class Basket extends Component {
    render() {
        const {
            apples,
            status,
            isPicking,
            pickApple,
            buttonText,
            eatApple,
        } = this.props.applesBox
        const { appleEaten, appleNow } = status
        return <div className="appleBusket">
            <div className="title">苹果篮子</div>
            <div className="stats">
                <div className="section">
                    <div className="head">当前</div>
                    <div className="content">{appleNow.quantity}个苹果，{appleNow.weight}克
                    </div>
                </div>
                <div className="section">
                    <div className="head">已吃掉</div>
                    <div className="content">{appleEaten.quantity}个苹果，{appleEaten.weight}克</div>
                </div>
            </div>

            <div className="appleList">
                {apples.map((apple) => !apple.isEaten && <AppleItem apple={apple} eatApple={eatApple} key={apple.id} />)}
                {appleNow.quantity === 0 && <div className="empty-tip" key="empty">苹果篮子空空如也</div>}
            </div>

            <div className="btn-div">
                <button className={isPicking ? 'disabled' : ''} onClick={() => pickApple()} >{buttonText}</button>
            </div>
        </div>
    }
}

export default Basket