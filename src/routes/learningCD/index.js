import React, { useState, useEffect } from "react";
import "./index.css";
import { Table } from "react-bootstrap";

function LearningCD() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://run.mocky.io/v3/dcdfabac-50b3-43e6-b702-16ac43cfc20e")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);

  return (
    <>
      <div className="head">
        <h1>CD</h1>
      </div>
      <p>
        <br />
        <br />
      </p>
      <Table striped bordered hover variant="dark" className="cd-table">
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Book Account No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Edition</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((x, idx) => {
              if (x.SL >= 1 && x.SL <= 15) {
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{x.BOOKACCNO}</td>
                    <td>{x.Title}</td>
                    <td>{x.Author}</td>
                    <td>{x.Publisher}</td>
                    <td>{x.Edition}</td>
                    <td>{x.Remarks}</td>
                  </tr>
                );
              }
            })}
        </tbody>
      </Table>
    </>
  );
}
export default LearningCD;
