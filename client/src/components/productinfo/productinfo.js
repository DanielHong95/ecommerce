function ProductInfo(props) {
  return (
    <div key={props.id}>
      <h1>{props.name}</h1>
      <img src={props.image_url} alt="images" className="image" />
      <div className="info">
        <p>{props.brand}</p>
        <p>{props.price}</p>
        <p>{props.size}</p>
        <p>{props.abv}</p>
        <p>{props.year}</p>
        <p>{props.type}</p>
        <p>{props.style}</p>
        <p>{props.category}</p>
        <p>{props.market}</p>
        <p>{props.varietal}</p>
        <p>{props.country}</p>
        <p>{props.state}</p>
        <p>{props.city}</p>
        <p>{props.region}</p>
        <p>{props.appellation}</p>
        <p>{props.taste}</p>
        <p>{props.body}</p>
        <p>{props.product_info}</p>
      </div>
    </div>
  );
}

export default ProductInfo;
