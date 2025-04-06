"use client"

import { useEffect, useRef, useState } from "react"
import { FadeInAnimation } from "./animation";

function Welcome(){
    const ref = useRef(null);

    useEffect(() => {
        const animation = new FadeInAnimation(ref.current);
        animation.start(500)
        return() => {
            animation.stop();
        }
    }, [])

    return (
        <h1
            ref={ref}
            style={{ 
                opacity: 0,
                color: 'white',
                padding: 50,
                textAlign: 'center',
                fontSize: 50,
                backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1), rgba(252,70,107,1))'
             }}
        >
            Welcome
        </h1>
    )
}

export default function Trigger() {
    const [show, setShow] = useState(false)

    return (
        <div>
            <button onClick={() => setShow(!show)}>
                {show ? 'Remove' : 'Show'}
            </button>
            <hr/>
            {show && <Welcome />}
        </div>
    )
}