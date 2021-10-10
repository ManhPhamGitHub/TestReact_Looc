import React from 'react'
import Navbar from './1-navbar/navbar'
import Banner from './2-banner/banner'
import Contract from './3-contract/contract'
import GetStart from './4-getStart/getStart'
import Step from './5-step/step'
import Easy from './6-easy/easy'
import Analyst from './7-analyst/analyst'
import Why from './8-why/why'
import Footer from './9-footer/footer'

export default function index() {
    return (
        <>
            <Navbar />
            <Banner />
            <Contract />
            <GetStart/>
            <Step/>
            <Easy />
            <Analyst/>
            <Why />
            <Footer/>
        </>
    )
}
