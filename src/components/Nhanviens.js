import { useEffect, useState } from "react"
import useFetch from "../customize/fetch"
import { Link } from "react-router-dom"

const Nhanviens = () => {

  const {data: dataNhanvien, isLoading, isError} = useFetch('http://127.0.0.1:8000/nhanviens/')

  return (
      <table>         
        <thead>
          <tr>
            <th>Mã nhân viên</th>
            <th>Họ tên</th>
            <th>Chức danh</th>
            <th>Đơn vị</th>
            <th>Action</th>
          </tr>          
        </thead>
        <tbody>          
          {isError === false && isLoading === false && dataNhanvien && dataNhanvien.results.length > 0 &&
            dataNhanvien.results.map(item => {
              return (
                <tr key={item.manhanvien}>
                  <td>{item.manhanvien}</td>
                  <td>{item.hoten}</td>
                  <td>{item.chucdanh}</td>
                  <td> {item.donvi.tendonvi} </td>
                  <td> 
                    <button>
                       <Link to={`/nhanviens/${item.manhanvien}`}> Xem CT </Link>
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
  )
}

export default Nhanviens