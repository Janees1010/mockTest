import { useEffect } from "react";
import { fetchProducts } from "../redux/slices/productSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { useNavigate } from "react-router-dom";
import { removeProduct } from "../redux/slices/productSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);
  const navigate = useNavigate()

  const handleEdit = (id:number)=>{
       navigate(`/edit/${id}`)
  }

  const handleDelete = (id:number)=>{
    const payload = {id}
    dispatch(removeProduct(payload))
   
    
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="p-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">category</th>
            <th scope="col">price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length &&
            products.map((product, index) => {
              return (
                <tr>
                  <td scope="row">{index + 1}</td>
                  <td>
                    {product.title.length > 40
                      ? product.title.slice(0, 40) + "..."
                      : product.title}
                  </td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td className="d-flex gap-3">
                    <button className="btn btn-primary" onClick={()=>handleEdit(product.id)}>Edit</button>
                    <button className="btn btn-danger"  onClick={()=>handleDelete(product.id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
