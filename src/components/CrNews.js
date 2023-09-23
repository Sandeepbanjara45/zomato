import React from 'react'
import newsData from '../utils/newsData'
import Ournews from './Ournews'

const CrNews = () => {
    const nData = (val) => {
        return(
        <Ournews imgsrc={val.imgsrc} title={val.title} icon1={val.icon1} icon2={val.icon2} desc={val.desc} readmore={val.readmore} />
        )
    }
  return (
    <>
     <div className='latest-news pt-150 pb-150 mt-5 py-5'>
        <div className='container-3'>
            <div className='row-3'>
                <div className=' text-center'>
                    <div className='section-title'>
                        <h1><span className="orange-text text-center mt-3">Our</span> News</h1>
                        <p className='my-3 mb-5 py-3 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi repellendus eveniet nobis dolorem aperiam magnam. </p>
                    </div>
                </div>
             {newsData.map(nData)}
            </div>
        </div>
        <div className="row-4 my-5">
				<div className="col-lg-12 text-center ">
					<a href="news.html" className="boxed-btn">More News</a>
				</div>
			</div>
     </div>
    </>
  )
}


						
					
export default CrNews;
