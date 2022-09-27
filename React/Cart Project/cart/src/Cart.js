import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products:[
                {
                    price:114352,
                    title:'I-Phone',
                    qty:3,
                    img:'',
                    id:1
                },
                {
                    price:114352,
                    title:'Laptop',
                    qty:2,
                    img:'',
                    id:2
                },
                {
                    price:114352,
                    title:'Watch',
                    qty:4,
                    img:'',
                    id:3
                }
            ]
        }
    }
    handleIncreaseQunatity=(product)=>{
         console.log('Hey please inc the qty of',product);
         const {products}=this.state;
         const index=products.indexOf(product);

         products[index].qty +=1;

         this.setState({
            products:products
         });
    }
    handelDecreaseQuantity=(product)=>{
        const {products}=this.state;
        
        const index=products.indexOf(product);
        if(products[index].qty===0){
            return;
        }
        products[index].qty -=1;
        
        this.setState({
            products
            /*we can also write like that products:products */
        })
    }
    handelDeleteProduct=(id)=>{
        const{products}=this.state;
        const items=products.filter((item)=>item.id!==id);
        /*give the new array hows id is not equal to that product which is deleted*/ 
        this.setState({
            products:items
        })
    
    }
    
    render(){
        const {products}=this.state;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return (
                    <CartItem 
                    product={product} 
                    key={product.id}
                    onIncreaseQuantity={this.handleIncreaseQunatity} 
                    onDecreaseQuantity={this.handelDecreaseQuantity}
                    onDeleteProduct={this.handelDeleteProduct}
                    />
                    )
                })}
            </div>
        );
    }
}
    



export default Cart;