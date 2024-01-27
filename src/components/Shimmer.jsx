const Shimmer = () => {
  return (
    <div className="shimmer">
      {
        Array(10)
          .fill("")
          .map((e ,index) => (
            <div key={index} className="shimmerList">
              <img className="shimLogo"
                src="./src/assets/ShimIMG.jpg" alt="shimmer image"
              />
              <h1>Shimmer UI .........</h1>
            </div>
          ))}
    </div>
  );
}

export default Shimmer;