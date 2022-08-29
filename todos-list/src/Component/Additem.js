// import React from 'react'
import React ,{useState} from 'react'

export default function Additem(props) {
    // const [title,settitle] =const[state,setstate] = useState(initialState)

     const [title,setTitle]=useState("");
     const [desc,setDesc]=useState("");
    const submit = (e)=> {
        e.preventDefault();
        if (!title || !desc){
            alert("Field can't be empty");
        }
        props.additem(title,desc);


    }
return (
    <div className="container my-3">
        <h3>Add Item</h3>
  <form onSubmit={submit} >
  <div className="mb-3" >
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" value = {title} onChange={(e)=>setTitle(e.target.value)} id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" className="form-control" id="desc" onChange={(e)=>setDesc(e.target.value)} value = {desc}/>
  </div>
  <button type="submit" className="btn btn-success btn-sm">Submit</button>
</form>
    </div>
    
)

}