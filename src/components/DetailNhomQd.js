import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import useFetch from "../customize/fetch";

const DetailNhomQd = () => {
    let {id} = useParams();
    let navigate = useNavigate();

    const {data : dataDetailNhom, isLoading, isError} = useFetch(`http://127.0.0.1:8000/nhomqds/${id}`)
    

    const handleBackData = () => {        
        navigate("/nhomqds")
    }   

    // console.log(">>check data nhom qd", dataDetailNhom)

    return (
        <>
            <div> <span className="btn-back" onClick={handleBackData}> &lt;--Back </span> </div>
            <div className="nhanvien-detail">
                {dataDetailNhom && 
                    <>
                        <div>
                            Mã nhóm: {dataDetailNhom.ma_nhom}
                        </div>   
                        <div>
                            Tên nhóm: {dataDetailNhom.ten_nhom}
                        </div>                       
                    </>
                }
            </div>
        </>
    )
}

export default DetailNhomQd