import Spinner from 'react-bootstrap/Spinner';
import {useEffect, useState} from "react";
import {useEcommerceData} from "../context/EcommerceContext";
import {APIs} from "../const/APIs";
import axios from "axios";
function AllProducts() {
    const {product,setProducts} = useEcommerceData()

    const [error, setError] = useState(false)

    const fetchAllProductsData = async () => {
        await axios.get(APIs.ECOMMERCE.PRODUCTS.GET_ALL_PRODUCT).then(res=> {
            setProducts(res.data)
            setError(false)
        }).catch(err=> {
            setError(true)
            console.log(err)
        })
    }

   useEffect(()=> {
       fetchAllProductsData()
   }, [])
    return (
      <>
           <div className="container row">
               {
                   product.length==0 ? <div className={"d-flex my-5 justify-content-center align-items-center"}>
                       {
                           error ? <span className={"text-danger"}>"Error while fetching data from api</span> : <Spinner animation="grow" />
                       }
                   </div>: product.map(p=> {
                       return <div className="col-sm-12 pt-4 pb-4 col-md-6 col-lg-3">
                           <div className="card" style={{width: "18rem"}}>
                               <img className="card-img-top" src={p.image} alt="Card image cap"/>
                               <div className="card-body">
                                   <h5 className="card-title">{p.title}</h5>
                                   <p className="card-text">{p.description}</p>
                                   <a href="#" className="btn btn-dark">Go somewhere</a>
                               </div>
                           </div>
                       </div>
                   })
               }
           </div>
      </>
    );
}

export default AllProducts;
