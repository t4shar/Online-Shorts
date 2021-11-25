import React from 'react'

const Insider = (props) => {


        let { title, description, imageUrl, newsUrl,publishedAt,author } =   props;
        return (
            <div className=" my-3">
                <div className="card" style={{border:'3px solid black'}} >
                    <img src={!imageUrl ? "https://semantic-ui.com/images/wireframe/image.png" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body" style={  props.mode === 'light' ? {color:'black',backgroundColor:'white'} : {color:'white',backgroundColor:'black'}} >
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p>{author} {publishedAt}</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-blue" style={  props.mode === 'light' ? {color:'white',backgroundColor:'#0d6efd'} : {color:'white',backgroundColor:'black'}} >Read More</a>
                    </div>

                </div>
            </div>
        )
    }


export default Insider
