import './App.css';
import { useState } from "react";
// import Header from 'Header';
import Axios from 'axios';
function App() {
  const [pid, setPid] = useState(0);
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [salesperson, setSalesPerson] = useState("");
  const [price, setPrice] = useState("");

  const [sid, setSid] = useState(0);
  const [sname, setSName] = useState("");
  const [section, setSection] = useState("");
  const [saleitem, setSaleItem] = useState("");
  const [salary, setSalary] = useState("");

  const [productList, setProductList] = useState([]);
  const [personList, setPersonList] = useState([]);

  const addProduct = () => {

    Axios.post('http://localhost:3001/create', {
      pid: pid,
      name: name,
      brand: brand,
      salesperson: salesperson,
      price: price
    }).then(() => {
      alert("sucess")
      console.log("success");
    });
  };
  const addPerson = () => {

    Axios.post('http://localhost:3001/person', {
      sid: sid,
      sname: sname,
      section: section,
      saleitem: saleitem,
      salary: salary
    }).then(() => {
      alert("sucess")
      console.log("success");
    });
  };

  const getProduct = () => {

    Axios.get('http://localhost:3001/products').then((response) => {
      setProductList(response.data);
    });
  };
  const getPerson = () => {

    Axios.get('http://localhost:3001/persondetails').then((response) => {
      setPersonList(response.data);
    });
  };

  return (
    <div className="App">
      <div className="main-header">
        <div> <h3 className="heading">Product-Sales Application</h3></div>
      </div>
      <div className="style">
        <div className="information">
        <h1>Add Product</h1>
          <label>Product id :</label>
          <input type="number"
            onChange={(event) => {
              setPid(event.target.value);
            }} />
          <label>Name :</label>
          <input type="text"
            onChange={(event) => {
              setName(event.target.value);
            }} />
          <label>Brand :</label>
          <input type="text"
            onChange={(event) => {
              setBrand(event.target.value);
            }} />
          <label>Sales Person :</label>
          <input type="text"
            onChange={(event) => {
              setSalesPerson(event.target.value);
            }} />
          <label>Price :</label>
          <input type="number"
            onChange={(event) => {
              setPrice(event.target.value);
            }} />
          <button style={{ color: "black" }} onClick={addProduct}>Add Product</button>

          <div className="products">
            <button style={{ color: "black" }} onClick={getProduct}>Show Products</button>
          </div>
        </div>

        {productList.map((val, key) => {
          return <div className="display">
            <h4>P_Id:{val.pid}</h4>
            <h4>Name:{val.name}</h4>
            <h4>Brand:{val.brand}</h4>
            <h4>sales person:{val.salesperson}</h4>
            <h4>Price:{val.price}</h4>
          </div>
        })}

        <div className="information">
        <h1>Add Sales Person</h1>
          <label>SalesPerson Id :</label>
          <input type="number"
            onChange={(event) => {
              setSid(event.target.value);
            }} />
          <label>Person Name :</label>
          <input type="text"
            onChange={(event) => {
              setSName(event.target.value);
            }} />
          <label>Section :</label>
          <input type="text"
            onChange={(event) => {
              setSection(event.target.value);
            }} />
          <label>Saled Item :</label>
          <input type="text"
            onChange={(event) => {
              setSaleItem(event.target.value);
            }} />
          <label>Salary :</label>
          <input type="number"
            onChange={(event) => {
              setSalary(event.target.value);
            }} />
          <button style={{ color: "black" }} onClick={addPerson}>Add Sales person</button>


          <div className="products">
            <button style={{ color: "black" }} onClick={getPerson}>Show Person</button>
          </div>
        </div>
        

        {personList.map((val, key) => {
          return <div className="display">
            <h4>S_Id:{val.sid}</h4>
            <h4>Name:{val.sname}</h4>
            <h4>Section:{val.section}</h4>
            <h4>saled Item:{val.saleitem}</h4>
            <h4>Salary:{val.salary}</h4>
          </div>
        })}
      </div>
    </div>

  );
}

export default App;
