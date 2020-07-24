import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";

export default function Screen( { routerProps }) {

    const [response, setResponse] = useState("");

    const API_ENDPOINT = "http://127.0.0.1:4001";

    console.log(API_ENDPOINT);

    useEffect(() => {
        const socket = socketIOClient(API_ENDPOINT);
        socket.on("FromAPI", data => {
            setResponse(data);
        })
    }, []);

    return (
        <p>
            It's <time dateTime={response}>{response}</time>
        </p>
    )
}