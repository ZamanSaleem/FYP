import React from 'react'
import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import Popular from './Popular';
import Newcollection from './Newcollection';
// import Offer from './Offers'

export default function Home() {
    return (
        <div>
            <Hero />
            <Popular/>
            {/* <Offer/> */}
            <Newcollection/>
        </div>
        
    );
}

