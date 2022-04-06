import React from 'react'
import { useSelector } from 'react-redux';

const ProductComponent = () => {
  const products = useSelector(state => state.allProducts.products);
  console.log(products);
  const {id , name , desc} = products
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </div >
  )
}

export default ProductComponent;