import {connect} from 'react-redux';
import './Home.css';
import './PieceCoordinates.css';
import {selectPiece, movePiece, removePiece} from '../redux/actions/board';
import {addMoves} from '../redux/actions/moves';
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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.trySelectPiece = this.trySelectPiece.bind(this);
    this.tryMovePiece = this.tryMovePiece.bind(this);
  }

  trySelectPiece(event) {
    const colour = event.target.getAttribute('data-colour');
    const file = event.target.getAttribute('data-file');
    const rank = event.target.getAttribute('data-rank');

    if (colour !== this.props.playerColour) {
      this.tryMovePiece(this.props, file, rank);
      return;
    }

    const pieceId = event.target.getAttribute('id');
    const isReselectPiece = this.props.selectedPiece?.pieceId === pieceId;

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
        case 'horse':
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
        case 'horse':
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
        onClick={this.trySelectPiece}
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
        onClick={evt => this.tryMovePiece(props, file, rank)}
        id={`square-${file}${rank}`}
        className={className}>
        <span className="Home--board--files--file--rank--square-coordinate">{file}{rank}</span>
      </div>
    );
  };

  tryMovePiece = (props, file, rankStr) => {
    const rank = parseInt(rankStr);

    if (props.selectedPiece) {
      const attackedPiece = props.pieces.find(p => p.file === file
        && p.rank === rank
        && p.colour !== props.selectedPiece.colour);

      if (attackedPiece) {
        props.removePiece(attackedPiece.id);
      }

      props.movePiece(props.selectedPiece.pieceId, file, rank);
      props.selectPiece(null);
    }

    // dm
    /* const square = `${file}${rank}`;
    if (props.selectedPiece !== null) {
      const move = `${props.selectedPiece}${file}${rank}`;
      props.addMove(move);
      props.selectPieceAtSquare(null);
    } else {
      props.selectPieceAtSquare(square);
    }
    */
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
  
    return (
      <div className="App container-fluid">
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedPiece: state.board.selectedPiece,
  pieces: state.board.pieces,
  playerColour: state.player.colour
});

const mapDispatchToProps = (dispatch) => {
  return {
    addMove: move => dispatch(addMoves([move])),
    selectPiece: selectedPiece => dispatch(selectPiece(selectedPiece)),
    movePiece: (pieceId, file, rank) => dispatch(movePiece(pieceId, file, rank)),
    removePiece: id => dispatch(removePiece(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
