import {useState} from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../redux/store'

const EditProductPage = () => {
    let {id}:any = useParams()
    const products = useAppSelector((state)=> state.products)
    let product = products.filter((pro)=> pro.id == id)
    const [formValue,setFormValues] = useState({})
   
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value } = e.target;
        setFormValues({...formValue,[name]:value})
    }
   
    const handleSubmit = ()=>{
      console.log(formValue);
    }
    
    
  return (
    <div className='d-flex justify-content-center align-items-center pt-5'>
      <form>
         
           <label className='pt-1'>name</label><br/>
           <input  onChange={(e) => handleChange(e)} type="text" value={product[0].title} /><br></br>
           <label className='pt-1' >category</label><br/>
           <input onChange={(e) => handleChange(e)} type="text" contentEditable value= "lkdsjfksfnksz" /><br></br>
           <label className='pt-1'>price</label><br/>
           <input onChange={(e) => handleChange(e)} type="text"  value={product[0].price} /><br/>
           <button className='btn btn-primary mt-2' onClick={handleSubmit}>Submit</button>
      </form> 
    </div>
  )
}

export default EditProductPage
