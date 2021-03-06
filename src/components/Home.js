import {connect} from 'react-redux';
import './Home.css';
import './PieceCoordinates.css';
import {selectPiece, movePiece, removePiece, resetBoard} from '../redux/actions/board';
import {addMoves} from '../redux/actions/moves';
import {setOpening} from '../redux/actions/ai';
import openings from '../redux/reducers/data/ai-openings/ai-openings-list';
import blackBishop from '../img/piece-black-bishop.png';
import blackHorse from '../img/piece-black-horse.png';
import blackKing from '../img/piece-black-king.png';
import blackPawn from '../img/piece-black-pawn.png';
import blackQueen from '../img/piece-black-queen.png';
import blackRook from '../img/piece-black-rook.png';
import whiteBishop from '../img/piece-white-bishop.png';
import whiteHorse from '../img/piece-white-horse.png';
import whiteKing from '../img/piece-white-king.png';
import whitePawn from '../img/piece-white-pawn.png';
import whiteQueen from '../img/piece-white-queen.png';
import whiteRook from '../img/piece-white-rook.png';
import React from 'react';
import { StrictMode } from 'react';

const pieceDisplayNames = {
  'pawn': '',
  'rook': 'r',
  'knight': 'n',
  'bishop': 'b',
  'king': 'k',
  'queen': 'q'
};

const getPieceDisplayName = id => {
  const type = id.substr(0, id.indexOf('-'));
  return pieceDisplayNames[type];
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.pieceClicked = this.pieceClicked.bind(this);
    this.trySelectPiece = this.trySelectPiece.bind(this);
    this.tryMovePiece = this.tryMovePiece.bind(this);
  }

  pieceClicked(event) {
    const colour = event.target.getAttribute('data-colour');
    const file = event.target.getAttribute('data-file');
    const rank = event.target.getAttribute('data-rank');
    const pieceId = event.target.getAttribute('id');
    const playerColour = this.props.playerColour;
    const isPlayerMove = true;
    this.trySelectPiece(colour, file, rank, pieceId, playerColour, isPlayerMove);
  };

  trySelectPiece = (colour, file, rank, pieceId, playerColour, isPlayerMove) => {
    const selectedPiece = this.props.selectedPiece;

    if (colour !== playerColour) {
      this.tryMovePiece(this.props, file, rank, selectedPiece?.colour, selectedPiece?.pieceId, isPlayerMove);
      return;
    }

    const isReselectPiece = selectedPiece?.pieceId === pieceId;
    if (isReselectPiece) {
      this.props.selectPiece(null);
    } else {  
      this.props.selectPiece({
        pieceId,
        colour,
        file,
        rank
      });
    }
  };

  getPieceSrc = (colour, type) => {
    if (colour === 'black') {
      switch (type) {
        case 'bishop':
          return blackBishop;
        case 'knight':
          return blackHorse;
        case 'king':
          return blackKing;
        case 'pawn':
          return blackPawn;
        case 'queen':
          return blackQueen;
        case 'rook':
          return blackRook;
        default:
          break;
      }
    } else if (colour === 'white') {
      switch (type) {
        case 'bishop':
          return whiteBishop;
        case 'knight':
          return whiteHorse;
        case 'king':
          return whiteKing;
        case 'pawn':
          return whitePawn;
        case 'queen':
          return whiteQueen;
        case 'rook':
          return whiteRook;
        default:
          break;
      }
    }

    throw new Error(`Unexpected colour/type: ${colour}/${type}`);
  };

  getPieceElements = pieces => pieces.map(piece => {
    const src = this.getPieceSrc(piece.colour, piece.type);
    return (
      <img
        key={piece.id}
        id={piece.id}
        src={src}
        alt={piece.id}
        onClick={this.pieceClicked}
        data-colour={piece.colour}
        data-file={piece.file}
        data-rank={piece.rank}
        className="Home--board--pieces--piece Home--board--pieces--piece--pawn"
      />
    );
  });

  getSquare = (props, file, rank) => {
    const isSelected = props.selectedPiece
      && props.selectedPiece.file === file
      && props.selectedPiece.rank === rank;

    const selectedClassName = isSelected
      ? 'selected'
      : '';
  
    const className = `Home--board--files--file--rank ${selectedClassName}`;
    return (
      <div
        key={`${file}${rank}`}
        data-file={file}
        data-rank={rank}
        onClick={evt => this.tryMovePiece(props, file, rank, props.selectedPiece?.colour, props.selectedPiece?.pieceId)}
        id={`square-${file}${rank}`}
        className={className}>
        <span className="Home--board--files--file--rank--square-coordinate text-center">{file}{rank}</span>
        <div className="Home--board--files--file--rank--legal-move-marker"></div>
      </div>
    );
  };

  tryMovePiece = (props, file, rankStr, selectedPieceColour, selectedPieceId, isPlayerMove = true) => {
    const rank = parseInt(rankStr);

    if (selectedPieceId) {
      const attackedPiece = props.pieces.find(p => p.file === file
        && p.rank === rank
        && p.colour !== selectedPieceColour);

      if (attackedPiece) {
        props.removePiece(attackedPiece.id);
      }

      props.movePiece(selectedPieceId, file, rank);
      props.selectPiece(null);

      if (isPlayerMove) {
        this.tryPlayAiMove(props);
      }
    }
  };

  tryPlayAiMove = (props) => {
    if (props.aiMoves && props.aiMoves.length > 1) {
      props.aiMoves.shift();  // Skip white moves
      const mv = props.aiMoves.shift();
      if (mv) {
        const piece = props.pieces.find(p => p.id === mv.pieceId);
        if (piece) {
          const colour = props.playerColour === 'white' ? 'black' : 'white';
          const file = piece.file;
          const rank = piece.rank;
          const pieceId = piece.id;
          const playerColour = colour;
          const isPlayerMove = false;
  
          setTimeout(() => this.trySelectPiece(colour, file, rank, pieceId, playerColour, isPlayerMove), 500);
          setTimeout(() => this.tryMovePiece(props, mv.file, mv.rank, piece.colour, piece.id, isPlayerMove), 2000);
        }
      } 
    }
  };

  trySetOpening = evt => {
    this.setOpening(this.props, evt.target.value);
  };

  trySetRandomOpening = () => {

    const selectedOpenings = [...document.querySelectorAll('input[type="checkbox"][name="selected-openings"]:checked')];
    const selectedOpeningIds = selectedOpenings.map(cbx => cbx.value);

    let poolOpeningIds = this.props.openingIds;
    if (selectedOpeningIds.length) {
      poolOpeningIds = this.props.openingIds.filter(id => selectedOpeningIds.includes(id));
    }
    
    const rand = Math.floor(Math.random() * 10 % poolOpeningIds.length);
    const id = poolOpeningIds[rand];
    this.setOpening(this.props, id);
  };

  setOpening = (props, openingId) => {
    props.resetBoard();
    props.setOpening(openingId);
  };

  calculateScore = props => {
    if (props.aiMovesPristine.length === 0)
      return 0;

    const numCorrectMoves = props.moves.filter((move, idx) => {
      if (idx > props.aiMovesPristine.length - 1)
        return true;

      const correctMove = props.aiMovesPristine[idx];
      return move.pieceId === correctMove.pieceId
        && move.file === correctMove.file
        && move.rank === correctMove.rank;
    }).length;

    const score = numCorrectMoves / props.aiMovesPristine.length;
    const scoreRounded = (score * 100).toFixed(2);
    return Math.min(100, scoreRounded);
  };

  render() {
    const props = this.props;
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const ranks = [8, 7, 6, 5, 4, 3, 2, 1];
    const eles = [];
    for (let file of files) {
      const rankEles = ranks.map(rank => this.getSquare(props, file, rank));
      eles.push(
        <div key={file} className="d-flex flex-column Home--board--files--file">
          {rankEles}
        </div>
      );
    }
  
    const pieceEles = this.getPieceElements(props.pieces);
    const openingOptions = openings.map(id => <option key={id} value={id}>{id}</option>);
    const movesListItems = props.aiMovesPristine.map((m, idx) => <li key={idx}>{getPieceDisplayName(m.pieceId)}{m.file}{m.rank}</li>)

    let scoreClassName = '';
    const score = props.moves.length === 0
      ? '-'
      : this.calculateScore(props);

    if (score === 0) {
      scoreClassName = 'text-danger';
    } else if (score === 100) {
      scoreClassName = 'text-success';
    }

    const openingComplexities = {
      'alekhines-defense': {
        area: 'B',
        subcategory: '02',
        complexity: 'bronze'
      },
      'benko-gambit': {
        area: 'A',
        subcategory: '00',
        complexity: 'gold'
      },
      'benoni-defense-modern-variation': {
        area: 'A',
        subcategory: '60',
        complexity: 'diamond'
      },
      'birds-opening': {
        area: 'A',
        subcategory: '02',
        complexity: 'bronze'
      },
      'bogo-indian-defense': {
        area: 'E',
        subcategory: '11',
        complexity: 'gold'
      },
      'caro-kann-defense': {
        area: 'B',
        subcategory: '10',
        complexity: 'bronze'
      },
      'catalan-opening': {
        area: 'E',
        subcategory: '00',
        complexity: 'gold'
      },
      'dutch-defense': {
        area: 'B',
        subcategory: '02',
        complexity: 'bronze'
      },
      'english-opening': {
        area: 'B',
        subcategory: '02',
        complexity: 'bronze'
      },
      'french-defense': {
        area: 'B',
        subcategory: '02',
        complexity: 'bronze'
      },
      'grob-opening': {
        area: 'B',
        subcategory: '02',
        complexity: 'bronze'
      },
      'grunfeld-defense': {
        area: 'B',
        subcategory: '02',
        complexity: 'gold'
      },
      'italian-game': {
        area: 'B',
        subcategory: '02',
        complexity: 'silver'
      },
      'kings-fianchetto-opening': {
        area: 'B',
        subcategory: '02',
        complexity: 'bronze'
      },
      'kings-gambit': {
        area: 'B',
        subcategory: '02',
        complexity: 'easy'
      },
      'kings-indian-attack': {
        area: 'B',
        subcategory: '02',
        complexity: 'silver'
      },
      'kings-indian-defense': {
        area: 'B',
        subcategory: '02',
        complexity: 'silver'
      },
      'london-system': {
        area: 'B',
        subcategory: '02',
        complexity: 'gold'
      },
      'nimzo-indian-defense': {
        area: 'B',
        subcategory: '02',
        complexity: 'gold'
      },
      'nimzowitsch-larsen-attack': {
        area: 'B',
        subcategory: '02',
        complexity: 'bronze'
      },
      'polish-opening': {
        area: 'B',
        subcategory: '02',
        complexity: 'bronze'
      },
      'queens-gambit': {
        area: 'B',
        subcategory: '02',
        complexity: 'bronze'
      },
      'queens-indian-defense': {
        area: 'B',
        subcategory: '02',
        complexity: 'gold'
      },
      'reti-opening': {
        area: 'B',
        subcategory: '02',
        complexity: 'bronze'
      },
      'ruy-lopez': {
        area: 'B',
        subcategory: '02',
        complexity: 'gold'
      },
      'scotch-game': {
        area: 'B',
        subcategory: '02',
        complexity: 'gold'
      },
      'sicilian-defense-closed': {
        area: 'B',
        subcategory: '02',
        complexity: 'bronze'
      },
      'sicilian-defense': {
        area: 'B',
        subcategory: '02',
        complexity: 'bronze'
      },
      'slav-defense': {
        area: 'B',
        subcategory: '02',
        complexity: 'silver'
      },
      'trompowsky-attack': {
        area: 'B',
        subcategory: '02',
        complexity: 'silver'
      },
      'vienna-game': {
        area: 'B',
        subcategory: '02',
        complexity: 'silver'
      }
    };

    const openingEles = props.openingIds.map(id => (
      <tr key={id}>
        <td>
          <input type="checkbox" id={id} name="selected-openings" value={id} />
        </td>
        <td>
          {id}
        </td>
        <td>
          {openingComplexities[id].area}
        </td>
        <td>
          {openingComplexities[id].subcategory}
        </td>
        <td>
          {openingComplexities[id].complexity}
        </td>
      </tr>
    ));

    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-12">
            <select onChange={this.trySetOpening} value={props.openingId}>
              <option value="">-</option>
              {openingOptions}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-12 page-edge-shadow">
            <section className="Home--board">
              <section className="d-flex Home--board--files">
                {eles}
              </section>
              <section className="Home--board--pieces">
                {pieceEles}
              </section>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className={scoreClassName}>
              Progress: {score}
            </div>
            <button onClick={() => this.setOpening(props, props.openingId)}>reset</button>
            <button onClick={this.trySetRandomOpening}>next</button>
          </div>
          <div className="col-12">
            Moves:
            <ul>
              {movesListItems}
            </ul>
          </div>
          <div>
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Opening</th>
                    <th>Area</th>
                    <th>Subcategory</th>
                    <th>Complexity</th>
                  </tr>
                </thead>
                <tbody>
                  {openingEles}
                </tbody>
              </table>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  aiMoves: state.ai.moves,
  aiMovesPristine: state.ai.movesPristine,
  moves: state.board.moves,
  openingId: state.ai.openingId,
  openingIds: state.ai.openingIds,
  pieces: state.board.pieces,
  playerColour: state.player.colour,
  selectedPiece: state.board.selectedPiece
});

const mapDispatchToProps = (dispatch) => {
  return {
    addMove: move => dispatch(addMoves([move])),
    selectPiece: selectedPiece => dispatch(selectPiece(selectedPiece)),
    movePiece: (pieceId, file, rank) => dispatch(movePiece(pieceId, file, rank)),
    removePiece: id => dispatch(removePiece(id)),
    setOpening: id => dispatch(setOpening(id)),
    resetBoard: () => dispatch(resetBoard())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
