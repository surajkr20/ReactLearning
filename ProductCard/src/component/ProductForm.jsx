import './ProductForm.css'
import {useState} from 'react';
 
const ProductForm = () =>{

    // handle states

    const [newTitle, setnewTitle] = useState('');
    const [newDate, setnewDate] = useState('')

    const titleChangeHandler = (event) =>{
        setnewTitle(event.target.value);
    }

    const dateChangeHandler = (event) =>{
        setnewDate(event.target.value)
    }

    const formHandler = (event) =>{
        event.preventDefault();

        const data = {
            Title : newTitle,
            Date : newDate,
        }

        console.log(data);

        setnewDate('');
        setnewTitle('');
    }

    return(
        <form onSubmit={formHandler}>
            <div>
                <label>Title</label>
                <input type="text" value={newTitle} onChange={titleChangeHandler} />
            </div>
            <div>
                <label>Date</label>
                <input type="date" min='2023-01-01' max='2023-12-12' value={newDate} onChange={dateChangeHandler} />
            </div>
            <div>
                <button type="submit">Add Product</button>
            </div>
        </form>
    )
}

export default ProductForm;