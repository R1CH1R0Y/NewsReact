import React, { useState } from 'react'
import NavBar from './NavBar'

const Add = () => {
    const [news,changeData]=useState(
        {
            "title":"",
            "urlToImage":"",
            "content":""
        }
    )
    const eventHandler=(event)=>{
        changeData({...news,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(news)
    }
  return (
    <div>
        <NavBar/>
        <br />
        <div class="card text-center mb-3">
  <div class="card-body">
    <h5 class="card-title">Add News</h5>
    <p></p>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Title</label>
                        <input type="text" className="form-control" name='title' value={news.title} onChange={eventHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Image :</label>
                        <input type="file" id="" className="form-control" name='urlToImage' value={news.urlToImage} onChange={eventHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Content :</label>
                        <textarea id="" className="form-control" name='content' value={news.content} onChange={eventHandler}></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br />
    <button className="btn btn-success" onClick={readValue}>Add</button>
  </div>
</div>
    </div>
  )
}

export default Add