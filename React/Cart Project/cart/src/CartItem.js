import React from 'react';

const CartItem=(props)=>{
         /*const{price,title,qty}=this.state;(while using state now we are using props in the place of the state) */
        const{price,title,qty}=props.product;
        const{product,onIncreaseQuantity,
            onDecreaseQuantity,
            onDeleteProduct
        }=props;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.Image} src={product.img}/>
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
                        onClick={()=>onIncreaseQuantity(product)}
                        />
                        <img 
                        alt="Decrease"   
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
                        onClick={()=>onDecreaseQuantity(product)}
                        />
                        <img 
                        alt="Delete"  
                        className='action-icons' 
                        src='https://cdn-icons-png.flaticon.com/512/484/484662.png'
                        onClick={()=>onDeleteProduct(product.id)}
                        />


                    </div>

                </div>
            </div>
        );
    }

const styles={
    Image:{
        height:110,
        width:110,
        borderRadius:4
    }
}

export default CartItem;