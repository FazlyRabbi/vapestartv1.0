import RichText from "./RitchText/RichText";
// import image
import ThumbsGallery from "./Slider/ThumbGellery";

// import required modules
function ProductDetails({ details }) {
  
  const imgUrl = {};

  return (
    <section className=" overflow-hidden w-full">
      <div className=" hidden">
        {details &&
          details.attributes.Thubmnails.data.map(
            (data, index) => (imgUrl[`m${index}`] = data.attributes.url)
          )}
      </div>

      <div className="product-slider">
        {imgUrl !== {} ? (
          <ThumbsGallery
            url={{
              url_1: imgUrl?.m0,
              url_2: imgUrl?.m1,
              url_3: imgUrl?.m2,
              url_4: imgUrl?.m3,
            }}
          />
        ) : (
          ""
        )}
      </div>
      <div className="product-content mt-4">
        <RichText />
      </div>
    </section>
  );
}

export default ProductDetails;
