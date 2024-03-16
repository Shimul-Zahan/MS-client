import React from 'react'
import { useParams } from 'react-router-dom'

const Extra = () => {

    const { pageName } = useParams();

    return (
        <div className="grid h-screen place-content-center bg-white px-4">
            <h1 className="uppercase tracking-widest text-gray-500">{pageName}</h1>
        </div>
    )
}

export default Extra