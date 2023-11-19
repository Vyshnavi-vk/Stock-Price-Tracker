import React, { useEffect, useState } from 'react'


const UpdatePerMinute = ({ price }) => {
    const [data, setData] = useState(price)
    const [prev, setPrev] = useState(price)
    let prevPrice = price

    useEffect(() => {
        const interval = setInterval(() => {
            let random = Number.parseFloat((Math.floor(Math.random() * (97.6 - (-97.1) + 1))) + -97.1)
            console.log(Number(price) + random + "," + prevPrice)
            setPrev(prevPrice)
            setData(Number(price) + random)
            prevPrice = (Number(price) + random)
        }, 60000);

        // Clearing the interval 
        return () => clearInterval(interval);
    }, [price]);



    return (
        <>
            <h1
                style={{
                    color: parseFloat(data) > parseFloat(prev) ? 'green' : 'red'
                }}


            >{data}
            </h1>
        </>
    )
}

export default UpdatePerMinute
