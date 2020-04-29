import React from 'react'
import trending from '../assets/mocks/trending'
import { PostMasonry } from '../components'

export default function Home() {
    return (
        <section className='container home'>
            <div className='row'></div>
            <h2>Trending Posts</h2>
            <PostMasonry posts={trending} columns={3} />
        </section>
    )
}