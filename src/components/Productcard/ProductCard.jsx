
export default function ProductCard({ product }) {



  return (
    <div className='productCard'>
      <img className='productPicture' src={product.picture} />
      <div className='productMainData'>
        <h3>{product.name}</h3>
        <p>{product.specs}</p>
      </div>
      <div className='productSecondaryData'>
        <p className="productPrice">{product.price}</p>
        <p className="productUnits">{product.units}</p>
        <p className="productStock">{product.stock}</p>
      </div>
    </div>
  )

}