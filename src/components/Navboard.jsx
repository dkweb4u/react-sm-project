import { useEffect, useState } from "react";
import { NavItem } from "./NavItem";

export const Navboard = ({category}) => {

    const [articles,setArticle] = useState([]);

    useEffect(()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    
      fetch(url)
      .then(res=>res.json()).
      then(data => {setArticle(data.articles);console.log(data)});
    
    },[category]);

  return (
    <>
  <div className="container-fluid">
      <h2 className="text-center my-4">Latest <span className="badge bg-danger text-light">NEWS</span></h2>
    <div className="item-box row">
      
      {articles && articles.length ?   articles.map((data,index)=>{
         return  <div className="col-lg-3"  key={index}><NavItem 
         title={data.title} 
         description={data.description}
         img = {data.urlToImage}
         url={data.url}
         /></div>
        }) : 'No Api Data'}
      
    </div>
  </div>
    </>
  )
}
