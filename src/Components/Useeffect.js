import React, { useEffect, useState } from 'react'

export default function Useeffect() {
    const [content, setContent] = useState("")
    const [count, setCount] = useState(0)
    const [items, setItems] = useState([])
    const [time, setTime] = useState(0);
    
    useEffect(() => {
        console.log("componentDidMount");
    }, [count]);
    
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/' + content)
            .then(response => response.json())
            .then(json => setItems(json))
            .catch((err) => {
                console.log(err)
            })


        console.log("componentDidUpdate")
    }, [content])
    
    useEffect(() =>{
        setTimeout(() => {
            setTime(time + 1)
        }, 1000);
    },[])
    return (
        <div>
            <h2>{time}</h2>
            <button onClick={() => setCount(count + 1)}>count {count}</button> <br />
            <button onClick={() => setContent("posts")}>Posts</button>
            <button onClick={() => setContent("comments")}>Comments</button>
            <button onClick={() => setContent("users")}>Users</button>
            <h3>{content}</h3>

            
            {content === "posts" ? (
                items.map(data =>{
                    return (
                        <li key={data.id}><strong>{data.id}</strong> {data.title} 
                            <p >{data.body}</p>
                        </li>
                    )
                })
            ) : ""}
            {content === "comments" ? (
                items.map(data =>{
                    return(
                        <li key={data.id}><strong>{data.id}</strong> {data.name}
                            <table className=' table table-bordered '>
                                <thead>
                                    <tr>
                                        <th>Email</th>
                                        <th>Body</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{data.email}</td>
                                        <td>{data.body}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    )
                })
            ) : ""}
            {content === "users" ? (
                items.map(item =>{
                    return (
                        <li key={item.id}><strong>{item.id}</strong> {item.name}
                            <table className=' table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>City</th>
                                        <th>Phone</th>
                                        <th>Web-site</th>
                                        <th>Company</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address && item.address.city}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.website}</td>
                                        <td>{item.company && item.company.name}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </li>
                    )
                },)
            ) : ""}
        </div>
    )
}
