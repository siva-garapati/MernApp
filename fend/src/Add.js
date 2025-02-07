import { useState } from "react"
import axios from 'axios'

const Add = () => {
    let [name, setName] = useState('')
    let [msg, setMsg] = useState('')
    let [file, setFile] = useState('')

    let handleFileChange = (e) => {
        console.log(e.target.files[0])
        setFile(e.target.files[0])
        console.log(file)
    }

    let handleUpload = () => {
        if (!file) {
            alert("Please select a file and enter a name!");
            return;
        }
        else {
            console.log(file)
            let formData = new FormData()
            formData.append('name', name)
            formData.append('file', file)

            axios.post("http://localhost:5000/add", formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then((res) => {
                if (res.data === "error in add") {
                    setMsg("error in uploading file")
                } else {
                    setMsg("file Uploaded")
                    console.log(res.data)
                }
            })
            setName('')
        }
    }

    return (
        <div className="add">
            <div className='upload'>
                <h2>Upload File here</h2>
                <input type='text' onChange={(e) => setName(e.target.value)} value={name} placeholder='Enter name' />
                {/* <input type='file' onChange={handleFileChange} /> */}
                
                <input type="file" id="fileInput" onChange={handleFileChange} style={{ display: "none" }} accept="image/*"/>
                <label htmlFor="fileInput" className="imgInput">
                {file ? <img src={URL.createObjectURL(file)} alt=""/> :
                    <span>📂 Upload File</span>}
                </label>
                <button onClick={handleUpload}>Upload</button>
                <p>{msg}</p>
            </div>
        </div>
    )
}

export default Add