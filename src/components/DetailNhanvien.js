import { useParams, useNavigate } from "react-router-dom"
import useFetch from "../customize/fetch";

const DetailNhanvien = () => {
    let {manhanvien} = useParams();
    let navigate = useNavigate();

    const {data: nhanvienDetail, isLoading, isError} = useFetch(`http://127.0.0.1:8000/nhanviens/${manhanvien}`)

    const handleBackData = () => {        
        navigate("/nhanviens")
    }

    // console.log(">>>> Check data detail: ", nhanvienDetail.donvi)

    return (
        <>
            <div> <span onClick={handleBackData}> &lt;--Back </span> </div>
            <div className="nhanvien-detail">
                {nhanvienDetail && nhanvienDetail.donvi &&
                    <>
                        <div className="title">
                            Mã nhân viên: {nhanvienDetail.manhanvien}
                        </div>
                        <div className="content">
                            Họ tên: {nhanvienDetail.hoten}
                        </div>
                        <div className="content">
                            Chức danh: {nhanvienDetail.chucdanh}
                        </div>
                        <div className="content">
                            Đơn vị: {nhanvienDetail.donvi.tendonvi}
                        </div>
                    </>
                }
            </div>
        </>
    )
}

export default DetailNhanvien