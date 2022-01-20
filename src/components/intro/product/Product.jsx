import "./product.css";

const Product = ({link,img}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle" />
        <div className="p-circle" />
        <div className="p-circle" />
      </div>
     <a href={link} target="_blank" rel="noreferrer" >
         <img src={img} className="p-img" alt="img"  />
     </a>
    </div>
  );
};

export default Product;
