import React, { useState, useEffect } from 'react';

function Content4Fetch() {
    const [data, setData] = useState([]);
    const apiUrl ='https://sophisticated-humane-dandelion.glitch.me';
    
    useEffect(() => {
fetch(apiUrl)
.then((response) => {
    if (!response.ok){
        throw new Error('Response not ok');
    }
    return response.json();
})
.then((data) => {
    setData(data);
})
.catch((error) => {
console.error('Error fetching data:', error);
});
    }, []);
    return (
        <div className="content4fetch">
            {/*render*/}
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}
export default Content4Fetch;