import React, { useRef, useState } from 'react'
import img from './Images/bhanuka-dilshan-RZqyoUDZ9Rk-unsplash (1).jpg';
import img1 from './Images/efe-kurnaz-RnCPiXixooY-unsplash.jpg';
import img2 from './Images/jason-leung-Xaanw0s0pMk-unsplash.jpg';
import img3 from './Images/krystal-ng-PrQqQVPzmlw-unsplash.jpg';
import img4 from './Images/nik-z1d-LP8sjuI-unsplash.jpg';
import img5 from './Images/patrick-tomasso-QMDap1TAu0g-unsplash.jpg';
import img6 from './Images/swati-b-Vf2-ZiIu8xY-unsplash.jpg';

export default function Grid() {
    const imageArray = [
        {
            img:img,
            imgName:"Image1",
            imgDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            uploadDate:"24/04/2023",
            fileSize:"2"
        },
        {
            img:img1,
            imgName:"Image2",
            imgDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            uploadDate:"15/04/2023",
            fileSize:"5"
        },
        {
            img:img2,
            imgName:"Image 3",
            imgDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            uploadDate:"11/04/2023",
            fileSize:"3"
        },
        {
            img:img,
            imgName:"Image 4",
            imgDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            uploadDate:"24/07/2023",
            fileSize:"6"
        },{
            img:img3,
            imgName:"Image 5",
            imgDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            uploadDate:"24/06/2023",
            fileSize:"2"
        },
        {
            img:img4,
            imgName:"Image 6",
            imgDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            uploadDate:"24/03/2023",
            fileSize:"6"
        },
        {
            img:img5,
            imgName:"Image 7",
            imgDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            uploadDate:"21/04/2023",
            fileSize:"1"
        },
        {
            img:img6,
            imgName:"Image1",
            imgDescription:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            uploadDate:"22/04/2023",
            fileSize:"5"
        }
    ]
// const [data , setData] = useState(imageArray);
const [filter , setFilter] = useState(imageArray);
const [input , setInput] = useState({
    imageName:"",
    imageSize:""
})
const [viewChangeBtn , setViewChangeBtn] = useState(false);
const imageWrapper = useRef();
const mainWrapper = useRef();
const [noImage , setNoImage] = useState(false)


function viewGridChangeFun(){
    setViewChangeBtn(false);
    // imageWrapper.current.style.flexDirection = "column";
    // imageWrapper.current.style.backGroundColor = "red" 
    // console.log(imageWrapper.current)
}

function viewListChangeFun(){
setViewChangeBtn(true);
}

function handleInput(e){
        const {name,value} = e.target;
        setInput((prev)=>({
        ...prev,[name]:value
        }))
    const tempArray=imageArray.filter((data)=>{
       if(data.imgName.includes(input.imageName) && data.fileSize.includes(input.imageSize)){
           return data
       }
    })
    
    if(tempArray.length === 0){
        setNoImage(true)
    }
    else{
        setNoImage(false)
    }
    setFilter(tempArray)
}
function sortImagesBySize(){
    imageArray.sort(function (a,b){
        return a.fileSize-b.fileSize
    })
    setFilter(imageArray)
}
  return (
    <>   
    <div className='filter-main-wrapper'>
        <div>
        <input type='text' placeholder='Search Here..' name='imageName' onChange={handleInput}></input>
        <input type='date'></input>
        <input type='text' placeholder='By File Size(in MB)' name="imageSize" onChange={handleInput}></input>
        </div>
        <div>
            <button>Sort Images By Date Uploaded</button>
            <button onClick={sortImagesBySize}>Sort Images By Size</button>
            {
                viewChangeBtn ? <button onClick={viewGridChangeFun}>Grid View</button> : <button onClick={viewListChangeFun}>List View</button>
            }
        </div>
    </div>
     <div className='image-main-wrapper' ref={mainWrapper}>
        {
            filter.map((data , index)=>{
                return (
                    <div className='image-wrapper' key={index} ref={imageWrapper} >
                        <div className='image'>
                            <img src={data.img} alt='img'></img>
                        </div>
                    <div>
                <h3>{data.imgName}</h3>
                <p>{data.imgDescription}</p>
                <p>{data.uploadDate}</p>
                <p>{data.fileSize}</p>
            </div>
        </div>
                )
            })
        }
        
    {noImage ? <div className='no-image'>No Image Found</div> : ""}
    </div>
    
    </>
  )
}
