import React, { useEffect, useState } from "react";
import Header from "./header/header";

export default function Home() {
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
            <Header />
        </div>
    )
}