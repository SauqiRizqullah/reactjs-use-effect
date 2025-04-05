"use client"

import { useEffect, useState } from "react"
import { createConnection } from "./chat";

function ChatRoom({ roomId }){

    const [serverUrl, setServerUrl] = useState("https://localhost:1234");

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => {
            connection.disconnect();
        };
    }, [roomId, serverUrl])

    return (
        <div>
            <div className="flex flex-col gap-5">
                {/*Line 2 */}
                <div>
                <p>Server URL:</p>
                </div>
                {/*Line 3 */}
                <div>
                    <input
                        value={serverUrl}
                        onChange={e => setServerUrl(e.target.value)}
                    >
                    </input>
                </div>
                {/*Line 4 */}
                <div className="font-bold">
                    <h2>Welcome to the {roomId} room</h2>
                </div>
            </div>
            
        </div>
    )
}

export default function App(){
    
    const [show, setShow] = useState(false)
    const [roomId, setRoomId] = useState('general')

    return (
        <div>
            <div className="justify-self-center flex flex-col gap-5 mt-40">
                {/*Line 1 */}
                <div className="flex flex-row gap-5">
                    <label>
                        Choose the chat room:
                        <select
                            value={roomId}
                            onChange={e => setRoomId(e.target.value)}
                        >
                            <option value="general">general</option>
                            <option value="travel">travel</option>
                            <option value="music">music</option>
                        </select>
                    </label>
                    <button onClick={() => setShow(!show)}>
                        {show ? "Close" : "Open" } Chat
                    </button>
                </div>
                {/*Line 2 */}
                <div>
                    {show && <hr/>}
                    {show && <ChatRoom roomId={roomId}/>}
                </div>
            </div>
        </div>
    )
}