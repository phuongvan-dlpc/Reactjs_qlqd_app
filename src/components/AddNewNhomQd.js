import { useNavigate } from "react-router-dom";
import "./NhomQds.scss"
import { useState } from "react";
import axios from "axios";

const AddNewNhomQd = () => {

    const [manhom, setManhom] = useState('');
    const [tennhom, setTennhom] = useState('');

    let navigate = useNavigate();

    const handleBackData = () => {        
        navigate("/nhomqds")
    }  

    const handleSubmitBtn = async () => {
        // if (manhom === '' || manhom === null || manhom === undefined) alert ('chưa nhập mã nhóm')
        if (!manhom) {
            alert ('chưa nhập mã nhóm');
            return;
        }
        if (!tennhom){
            alert ('chưa nhập tên nhóm');
            return;
        } 

        let data = {
            ma_nhom: manhom,
            ten_nhom: tennhom,            
        }

        let res = await axios.post('http://127.0.0.1:8000/nhomqds/', data)
        if (res && res.data) {}
    }

    return (
        <div className="add-new-container">
            {/* <div> <span className="btn-back" onClick={handleBackData}> &lt;--Back </span> </div> */}
            <div className="inputs-data">
                <label> Mã nhóm quyết định: </label>
                <input type="text" 
                    value={manhom} 
                    onChange={(e) => setManhom(e.target.value)} 
                />
            </div>
            <div className="inputs-data">
                <label> Tên nhóm QĐ: </label>
                <input type="text" 
                    value={tennhom}
                    onChange={(e) => setTennhom(e.target.value)}
                />
            </div>
            <button className="btn-add-new" onClick={handleSubmitBtn}> Lưu </button>
        </div>        
    )
}

export default AddNewNhomQd