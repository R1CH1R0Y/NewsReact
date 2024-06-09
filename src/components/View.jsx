import React, { useEffect, useState } from 'react'
import axios from 'axios'
import NavBar from './NavBar'

const View = () => {
    const [news, changeData] = useState({"articles":[]})
    const fetchData=()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=9b6ac262eea44bcbbf80ae1b064f631d").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <NavBar/>
            <br />
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Live</h5>
                    <p></p>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    {news.articles.map(
                                        (value, index) => {
                                            return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                                <div className="card mb-3">
                                                    <img src={value.urlToImage} className="card-img-top" alt="..."></img>
                                                    <div className="card-body">
                                                        <p className="card-text"><b>{value.title}</b></p>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
            <br />
        </div >
    )
}

export default View