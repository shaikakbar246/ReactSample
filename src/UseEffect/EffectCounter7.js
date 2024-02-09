import React, { useEffect, useState } from "react";

const URL = "https://jsonplaceholder.typicode.com/users";

const EffectCounter7 = () => {
    const [usersData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState({ status: false, msg: "" });
    const fetchUserData = async (apiUrl) => {
        setLoading(true);
        setIsError({ status: false, msg: "" })
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setUserData(data);
            setLoading(false);
            setIsError({ status: false, msg: "" })
            if (response.status == 404) {
                throw new Error("Data Not Found");
            }
        }
        catch (error) {
            setLoading(false);
            setIsError({
                status: true,
                msg: error.message || "something went wrong, pls try again!",
            });
        }
    }


useEffect(() => {
    fetchUserData(URL);
}, []);


if (loading) {
    return (
        <div>
            <h3>Loading...</h3>
        </div>
    )
}
if (isError?.status) {
    return (
        <div>
            <h3 style={{ color: "red" }}>{isError?.msg}</h3>
        </div>
    );
}

return (
    <div>
        <h1>useEffect example - 1</h1>
        <ul>
            {
                usersData.map((eachUser)=> {
                    const { id, name, email } = eachUser;
                    return (
                        <>
                        <li>{name}</li>
                        <li>{email}</li>
                        </>

                    )
                })
            }
        </ul>
    </div>
);
}

export default EffectCounter7;