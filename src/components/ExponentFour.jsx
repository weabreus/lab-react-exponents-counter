const ExponentFour = ({count}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{count}⁴</p>
    <p className="exponent-result">{count} * {count} * {count} * {count} = <span className="total">{(count ** 4).toLocaleString()}</span></p>
  </div>
);

export default ExponentFour;