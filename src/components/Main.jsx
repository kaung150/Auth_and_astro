import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Main = () => {
  return (
    <>
      <div className="text-center font-semibold mt-20">
        <h1 className="text-white text-5xl">Trust From Customers</h1>
        <p className="text-white mt-3">
          Join our 1000+ Happy <br />
          Customers
        </p>
      </div>

      <Splide options={{ arrows: false }}>
        <SplideSlide>
          <div className="text-white text-center px-6 py-4 mx-6 border mt-10 md:mx-80 border-[#E1FF3C]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              fugiat amet repellendus reiciendis, repudiandae harum aspernatur,
              vero voluptas voluptatem officia recusandae. Eos eum, eligendi
              odit doloribus maxime velit perferendis veritatis.
            </p>

            <div className="flex justify-between mt-4">
              <span>David Kaung</span>
              <div>
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="text-white text-center px-6 py-4 mx-6 border mt-10 md:mx-80 border-[#E1FF3C]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              fugiat amet repellendus reiciendis, repudiandae harum aspernatur,
              vero voluptas voluptatem officia recusandae. Eos eum, eligendi
              odit doloribus maxime velit perferendis veritatis.
            </p>

            <div className="flex justify-between mt-4">
              <span>David Zaw</span>
              <div>
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="text-white text-center px-6 py-4 mx-6 border mt-10 md:mx-80 border-[#E1FF3C]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              fugiat amet repellendus reiciendis, repudiandae harum aspernatur,
              vero voluptas voluptatem officia recusandae. Eos eum, eligendi
              odit doloribus maxime velit perferendis veritatis.
            </p>

            <div className="flex justify-between mt-4">
              <span>David Min</span>
              <div>
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
        </SplideSlide>

        <SplideSlide>
          <div className="text-white text-center px-6 py-4 mx-6 border mt-10 md:mx-80 border-[#E1FF3C]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              fugiat amet repellendus reiciendis, repudiandae harum aspernatur,
              vero voluptas voluptatem officia recusandae. Eos eum, eligendi
              odit doloribus maxime velit perferendis veritatis.
            </p>

            <div className="flex justify-between mt-4">
              <span>David Khant</span>
              <div>
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} color="yellow" />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </>
  );
};

export default Main;
