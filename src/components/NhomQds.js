import { useEffect, useState } from "react"
import useFetch from "../customize/fetch"
import { Link, useNavigate } from "react-router-dom"
import "./NhomQds.scss"
import AddNewNhomQd from "./AddNewNhomQd"
import { Button, Modal } from "react-bootstrap"



const NhomQds = () => {

  const {data: dataNhomQd, isLoading, isError} = useFetch('http://127.0.0.1:8000/nhomqds/')
  let navigate = useNavigate();  

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddnew = () => {
    // navigate("/add-new-nhomqd")
    setShow (false);
  }

  return (
    <>
      <div>
        <Button variant="primary" className="my-3" onClick={handleShow}>
          Thêm nhóm quyết định
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddNewNhomQd />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Thoát
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Lưu
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <div> <button className="btn-add-new" onClick={handleAddnew}> + Thêm nhóm quyết định </button></div>
      <table>         
        <thead>
          <tr>
            <th>Id</th>
            <th>Mã nhóm</th>
            <th>Tên nhóm</th>
            <th>Trạng thái</th>
            <th>Action</th>
          </tr>          
        </thead>
        <tbody>          
          {isError === false && isLoading === false && dataNhomQd && dataNhomQd.results.length > 0 &&
            dataNhomQd.results.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.ma_nhom}</td>
                  <td>{item.ten_nhom}</td>
                  <td> {item.trang_thai} </td>
                  <td> 
                    <button>
                       <Link to={`/nhomqds/${item.id}`}> Xem CT </Link>
                    </button> 
                  </td>
                </tr>  
              )
            })
          }
          {
            isLoading === true
            && <tr>
                <td colSpan="4" style={{textAlign: "center"}}> Loading... </td>
              </tr>
          }  
          {
            isError === true
            && <tr>
                <td colSpan="4" style={{textAlign: "center"}}> Something wrong... </td>
              </tr>
          }    

        </tbody>
      </table>
    </>      
  )
}

export default NhomQds