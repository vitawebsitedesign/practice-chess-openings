import {createStore} from 'redux';
import {addExhibits} from '../actions/exhibits';
import AgileAES from '../exhibits/agile-aes';
import AsxMarketCapitalisation from '../exhibits/asx-market-capitalisation';
import ThreeDGeometryAndMaterials from '../exhibits/3d-geometry-and-materials';
import BngCampaignXmlGenerator from '../exhibits/bng-campaign-xml-generator';
import BulkUrlShortener from '../exhibits/bulk-url-shortener';
import FollowTheProcess from '../exhibits/follow-the-process';
import MachiKoro from '../exhibits/machi-koro';
import Mint from '../exhibits/mint';
import ModernBng from '../exhibits/modern-bng';
import RealestateVisualiser from '../exhibits/realestate-visualiser';
import Sudoku from '../exhibits/sudoku';
import SqlKeywordFormatter from '../exhibits/sql-keyword-formatter';
import reducer from '../reducers/exhibits';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(addExhibits([
    ThreeDGeometryAndMaterials,
    ModernBng,
    Sudoku,
    BngCampaignXmlGenerator,
    AgileAES,
    Mint,
    SqlKeywordFormatter,
    BulkUrlShortener,
    FollowTheProcess,
    MachiKoro,
    RealestateVisualiser,
    AsxMarketCapitalisation
]));

export default store;