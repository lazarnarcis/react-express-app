import React, { useEffect, useState } from 'react';

export default function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`/api/notifications`)
        .then(res => res.json())
        .then(res => setData(res))
        .catch(err => console.error(err));
    }, []);

    return (
        <div>
            {
                data.map((item, key) => {
                    return <div key={key}>
                        {item.id}
                    </div>
                })
            }
        </div>
    )
}