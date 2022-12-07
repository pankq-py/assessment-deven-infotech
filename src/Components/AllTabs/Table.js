import React, { useEffect, useState } from 'react';
export const Table = () => {
    const style = {
        textAlign: "left",
        margin: "-10px 10px",
        // border: "1px solid black"
    }
    const [data, setData] = useState([]);
    const getData = () => {
        fetch("https://api.publicapis.org/entries")
            .then((res) => res.json())
            .then((json) => {
                setData({
                    items: json,
                });
            })
    }
    useEffect(getData, []);
    var entries = []
    var columns = []
    if (data.items !== undefined) {
        entries = data.items.entries
        columns = Object.keys(entries[0])
    }

    return (
        <>
            <div className="table-responsive" style={style}>
                <table className="table table-striped" >
                    <thead className="thead-light">
                        <tr>
                            {
                                columns.map(column => {
                                    return <>
                                        <th scope="col">{column}</th>
                                    </>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            entries.map((entry, key) => {
                                return <>
                                    <tr>
                                        <td>{entry.API}</td>
                                        <td>{entry.Description}</td>
                                        <td>{entry.Auth}</td>
                                        <td>{entry.HTTPS}</td>
                                        <td>{entry.Cors}</td>
                                        <td>{entry.Link}</td>
                                        <td>{entry.Category}</td>
                                    </tr>
                                </>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

// import React from "react";
// import './App.css';
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             items: [],
//             DataisLoaded: false
//         };
//     }
//     componentDidMount() {
//         fetch(
//             "https://jsonplaceholder.typicode.com/users")
//             .then((res) => res.json())
//             .then((json) => {
//                 this.setState({
//                     items: json,
//                     DataisLoaded: true
//                 });
//             })
//     }
//     render() {
//         const { DataisLoaded, items } = this.state;
//         if (!DataisLoaded) return <div>
//             <h1> Pleses wait some time.... </h1> </div>;
//         return (
//             <div className="App">
//                 <h1> Fetch data from an api in react </h1> {
//                     items.map((item) => (
//                         <ol key={item.id} >
//                             User_Name: {item.username},
//                             Full_Name: {item.name},
//                             User_Email: {item.email}
//                         </ol>
//                     ))
//                 }
//             </div>
//         );
//     }
// }
// export default App;
