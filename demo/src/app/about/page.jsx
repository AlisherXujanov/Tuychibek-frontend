"use client"

import { useState, useEffect } from 'react'
import Loading from '../components/Loading'

function About() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchPosts()
    }, [])

    async function fetchPosts() {
        setLoading(true)
        setTimeout(async () => {
            const URL = "https://jsonplaceholder.typicode.com/posts"
            let response = await fetch(URL)
            let data = await response.json()
            setPosts(data)
            setLoading(false)
        }, 2000)
    }

    return (
        <>
            <h1>About page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sapiente delectus dolores veritatis incidunt, reprehenderit corporis non in quas facilis. Cumque animi dignissimos voluptas vitae totam autem odit architecto temporibus.</p>
            <button onClick={fetchPosts}>Fetch Posts</button>


            {
                loading && <Loading />
            }
            {
                posts && posts.length > 0 &&
                posts.map(post => {
                    return (
                        <div key={post.id + post.title}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    )
                })
            }
        </>
    )
}


export default About


