import {connect} from 'react-redux';
import './Home.css';
import pawn from '../img/piece-pawn.png';

function Home(props) {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-12 page-edge-shadow">
          <section className="Home--board">
            <div className="d-flex Home--board--files">
              <div className="d-flex flex-column Home--board--files--file">
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
              </div>
              <div className="d-flex flex-column Home--board--files--file">
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
              </div>
              <div className="d-flex flex-column Home--board--files--file">
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
              </div>
              <div className="d-flex flex-column Home--board--files--file">
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
              </div>
              <div className="d-flex flex-column Home--board--files--file">
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
              </div>
              <div className="d-flex flex-column Home--board--files--file">
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
              </div>
              <div className="d-flex flex-column Home--board--files--file">
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
              </div>
              <div className="d-flex flex-column Home--board--files--file">
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
                <div className="Home--board--files--file--rank"></div>
              </div>
            </div>
            <div className="Home--board--pieces">
              <img src={pawn} className="Home--board--pieces--piece Home--board--pieces--piece--pawn" />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

const mapStateToprops = state => ({ exhibits: state });

export default connect(mapStateToprops)(Home);
