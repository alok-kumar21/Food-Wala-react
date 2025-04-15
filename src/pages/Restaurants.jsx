import Footer from '../components/Footer';
import Header from '../components/Header';
export default function Restaurants() {
  const img1 =
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D';
  const img2 =
    'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D';

  return (
    <>
      <Header />
      <div className="container py-4">
        <h2 className="fw-normal">Restaurants</h2>

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={img1} className="img-fluid rounded-start" alt="img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Taste of India</h5>
                <p className="card-text">
                  Enjoy authentic Indian cuisine at Taste of India. Explore a
                  variety of delicious dishes from different regions of India.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Rating 4.7 | Open Now
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={img2} className="img-fluid rounded-start" alt="img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Pizza Paradise</h5>
                <p className="card-text">
                  Indulge in mouth-watering pizzas at pizza Paradise. With a
                  variety of topping and crusts.it's a pizza lover's dream.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Rating 4.5 | Open Now
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
