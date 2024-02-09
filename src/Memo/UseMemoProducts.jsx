import React, { useState, useEffect } from 'react'
import { useMemo } from 'react'
const UseMemoProducts = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    const [products, setProducts] = useState(
        [
            { id: 1, name: 'Real Me 9', price: 10000 },
            { id: 1, name: 'Real Nazro', price: 12000 },
            { id: 1, name: 'Real me 9i', price: 15000 }
        ]
    )

    const [serchText, updateSearchText] = useState('');

    // const filteredProducts = filterProducts(products, serchText)
    // function filterProducts(products, serachKey) {
    //     return products.filter((f) => {
    //         return f.name.toLowerCase().includes(serachKey)

    //     })

    // }
    const filteredProducts = useMemo(
        () => {
            return products.filter((f) => {
                return f.name.toLowerCase().includes(serchText)
            })

        }, [products, serchText])



    // useEffect(
    //     () => {
    //         setInterval(
    //             () => {
    //                 setTime(new Date.toLocaleTimeString())
    //             }, 1000
    //         )
    //     }, []
    // )
    return (
        <div className="text-capitalize text-center mt-5">
            <div>{time}</div>
            <input type="text" id="txtSearch" value={serchText} onChange={e=>updateSearchText(e.target.value)}></input>
            <table>
                <tr>
                    <td>
                        Snodddd
                    </td>
                    <td>
                        Name
                    </td>
                    <td>
                        Price
                    </td>
                </tr>
                {
                    filteredProducts.map(p => (
                        <tr key={p.id}>
                            <td>
                                {p.id}
                            </td>
                            <td>
                                {p.name}
                            </td>
                            <td>
                                {p.price}
                            </td>
                        </tr>
                    ))
                }

            </table>
        </div>
    )
}

export default UseMemoProducts
