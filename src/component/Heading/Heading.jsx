const Heading = ({ heading }) => {
    return (
      <div className="my-8" style={{ backgroundColor: "#ab73ef", color: "#fcfbfd" }}>
        
        <h2 className="text-center text-5xl p-5 font-bold italic">
          {heading}
        </h2>
      </div>
    );
  };
  
  export default Heading;