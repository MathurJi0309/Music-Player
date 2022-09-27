import React from 'react';

class CartItem extends React.Component{
    increaseQuantity=()=>{
        console.log('this',this.state);
        this.setState({
            qty:this.state.qty+1
        });
    }
    decreaseQuantity=()=>{
        const {qty} =this.state;
        if(qty===0){
            return;
        }
        console.log('this',this.state);
        this.setState({
            qty:this.state.qty-1
        });
    }
    render(){
        console.log("this.props",this.props);
         /*const{price,title,qty}=this.state;(while using state now we are using props in the place of the state) */
        const{price,title,qty}=this.props.product;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.Image}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs {price} /-</div>
                    <div style={{color:'#777'}}>Qty:{qty}</div>
                    <div className='cart-item-actions'>
                        {/*Buttons*/ }
                        <img 
                        alt="Increase"  
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/992/992651.png'
                        onClick={this.increaseQuantity}
                        />
                        <img 
                        alt="Decrease"  
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
                        onClick={this.decreaseQuantity}
                        />
                        <img 
                        alt="Delete"  
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/484/484662.png'
                        />


                    </div>

                </div>
            </div>
        );
    }
}

const styles={
    Image:{
        height:110,
        width:110,
        borderRadius:4
    }
}

export default CartItem;