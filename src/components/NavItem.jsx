import imgDefault from '../assets/images/large.jpg';


export const NavItem = ({title,description,img,url}) => {
  return (
    <>
    <div className="card my-2">
  <img src={img ? img : imgDefault} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
</>
  )
}
