import React from "react";

const TeamMembers = () => {
  return (
    <React.Fragment>
      <div className="container my-5">
        <div className="my-2">
          <h3>Faculty Mentor:</h3>
          <h5>Dr Parneeta Dhaliwal</h5>
        </div>

        <br />

        <div className="my-2">
          <h3>Student Mentors:</h3>
          <table className="table text-center table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ravi Prakash</td>
                <td>2K18CSUN01127</td>
              </tr>
              <tr>
                <td>Sanchit Bajaj</td>
                <td>2K19CSUN01108</td>
              </tr>
              <tr>
                <td>Harsh Mittal</td>
                <td>2K19CSUN01082</td>
              </tr>
            </tbody>
          </table>
        </div>

        <br />

        <div className="my-2">
          <h3>Designing Team</h3>
          <table className="table text-center table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kunal Arora</td>
                <td>2K20CSUN01059</td>
              </tr>
              <tr>
                <td>Arsh Lakhina</td>
                <td>2K20CSUN01013</td>
              </tr>
              <tr>
                <td>Srijan</td>
                <td>2K19CSUN01113</td>
              </tr>
            </tbody>
          </table>
        </div>

        <br />

        <div className="my-2">
          <h3>Frontend Development Team</h3>

          <table className="table text-center table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kunal Arora</td>
                <td>2K20CSUN01059</td>
              </tr>
              <tr>
                <td>Arsh Lakhina</td>
                <td>2K20CSUN01013</td>
              </tr>
              <tr>
                <td>Kunal Arora</td>
                <td>2K20CSUN01060</td>
              </tr>
              <tr>
                <td>Khushi Arora</td>
                <td>2K20CSUN01058</td>
              </tr>
            </tbody>
          </table>
        </div>

        <br />

        <div className="my-2">
          <h3>Backend Development Team</h3>
          <table className="table text-center table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vansh Bisht</td>
                <td>2K20CSUN4052</td>
              </tr>
              <tr>
                <td>Chhaya Tyagi</td>
                <td>2K20CSUN01026</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TeamMembers;
