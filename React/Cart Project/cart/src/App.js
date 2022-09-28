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
        products:[],
        loading:true
    }
    this.db=firebase.firestore();
}

componentDidMount(){
  this.db
  .collection('products')
  .onSnapshot((snapshot)=>{
    console.log(snapshot);
    snapshot.docs.map((doc)=>{
      console.log(doc.data())
    })
    const products=snapshot.docs.map((doc)=>{
      const data =doc.data();
      data['id']=doc.id;
      return data;
    })
    this.setState({
      products,
      loading:false
    })
  })
}
handleIncreaseQunatity=(product)=>{
console.log('Hey please inc the qty of',product);
const {products}=this.state;
const index=products.indexOf(product);

// products[index].qty +=1;

// this.setState({
//     products:products
// });
const docRef=this.db.collection('products').doc(products[index].id);
docRef
.update({
  qty:products[index].qty+1
})
.then(()=>{
  console.log('updated successfully')
})
.catch((error)=>{
  console.log('error',error);
})
}
handelDecreaseQuantity=(product)=>{
    const {products}=this.state;
    
    const index=products.indexOf(product);
    if(products[index].qty===0){
        return;
    }
    // products[index].qty -=1;
    
    // this.setState({
    //     products
    //     /*we can also write like that products:products */
    // })
    const docRef=this.db.collection('products').doc(products[index].id);
docRef
.update({
  qty:products[index].qty-1
})
.then(()=>{
  console.log('updated successfully')
})
.catch((error)=>{
  console.log('error',error);
})
}
handelDeleteProduct=(id)=>{
    const{products}=this.state;
    // const items=products.filter((item)=>item.id!==id);
    // /*give the new array hows id is not equal to that product which is deleted*/ 
    // this.setState({
    //     products:items
    // })
    const docRef=this.db.collection('products').doc(id);
    docRef
    .delete()
    .then(()=>{
      console.log('delete successfully');
    })
    .catch((error)=>{
      console.log('error:',error);
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
addProduct=()=>{
  this.db
  .collection('products')
  .add({
    img:'',
    price:300,
    qty:3,
    title:'Bag'
  })
  .then((docRef)=>{
    console.log('the item added successfully in the collect',docRef)
  })
  .catch((error)=>{
    console.log('error',error);
  })
}
  render(){
    const {products,loading} =this.state;
  return (
    <div className="App">
      <Navbar
      count={this.getCartCount()}
      />
      <button onClick={this.addProduct} Style={{padding:20, fontSize:20}}>Add a Product</button>
      <Cart
      products={products}
      onIncreaseQunatity={this.handleIncreaseQunatity} 
      onDecreaseQuantity={this.handelDecreaseQuantity}
      onDeleteProduct={this.handelDeleteProduct}
      />
      {loading && <h1>Loading Products....</h1>}
      <div style={{padding:10,fontSize:20}}>
        TOTAL:{this.getCartTotal()} /-
      </div>
    </div>
  );
}
}

export default App;
