import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

class App extends React.Component {
  constructor(){
    super();
    this.state={
        products:[]
    }
}

componentDidMount(){
  firebase
  .firestore()
  .collection('products')
  .get()
  .then((snapshot)=>{
    console.log(snapshot);
    snapshot.docs.map((doc)=>{
      console.log(doc.data());
    })
  })
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
getCartCount =()=>{
  const {products}=this.state;
  let count=0;

  products.forEach((product) => {
    count +=product.qty;
  });

  return count;

}
getCartTotal =()=>{
  const {products}=this.state;
  let total=0;
  products.forEach((product)=>{
    total =total +product.qty*product.price;
  });
  return total;
}
  render(){
    const {products} =this.state;
  return (
    <div className="App">
      <Navbar
      count={this.getCartCount()}
      />
      <Cart
      products={products}
      onIncreaseQunatity={this.handleIncreaseQunatity} 
      onDecreaseQuantity={this.handelDecreaseQuantity}
      onDeleteProduct={this.handelDeleteProduct}
      />
      <div style={{padding:10,fontSize:20}}>
        TOTAL:{this.getCartTotal()} /-
      </div>
    </div>
  );
}
}

export default App;
