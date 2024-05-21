import React, { useEffect, useState } from 'react'
import AHeader from '../Comoan/AHeader'
import AFooter from '../Comoan/AFooter'
import axios from 'axios'

function AMangeservice() {

    useEffect(() => {
        fetch()
    })

    const [data1, setdata1] = useState()

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/service`)
        console.log(res.data)
        setdata1(res.data)
    }

    // delete 
    const deletehandle=async(id)=>{
        const res = await axios.delete(`http://localhost:3000/service/${id}`)
        console.log(res.data)
    }

    return (
        <div>
            <AHeader />
            <div className="container">
                <div>
                    <h1 className='text-center'>Manage service</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Service_name</th>
                                <th scope="col">Service_desc</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data1 && data1.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{value.id}</th>
                                            <td>{value.service_name}</td>
                                            <td>{value.desc}</td>
                                            <td>
                                                <button className='btn btn-primary'>View</button>
                                                <button className='btn btn-success mx-2'>Edit</button>
                                                <button className='btn btn-danger' onClick={()=>deletehandle(value.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <AFooter />
        </div>
    )
}

export default AMangeservice
