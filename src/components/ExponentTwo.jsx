const ExponentTwo = ({count}) => (
   <div className="exponent-counter-container">
    <p className="exponent-label">{count}²</p>
    <p className="exponent-result">{count} * {count} = <span className="total">{(count ** 2).toLocaleString()}</span></p>
  </div>
);

export default ExponentTwo;