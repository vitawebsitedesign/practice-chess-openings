import {connect} from 'react-redux';
import './Home.css';
import './PieceCoordinates.css';
import {selectPiece, movePiece, removePiece, resetBoard} from '../redux/actions/board';
import {addMoves} from '../redux/actions/moves';
import {setOpening} from '../redux/actions/ai';
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
      this.tryMovePiece(this.props, file, rank, selectedPiece?.colour, selectedPiece?.id, isPlayerMove);
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
        <span className="Home--board--files--file--rank--square-coordinate">{file}{rank}</span>
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
    if (props.aiMoves && props.aiMoves.length) {
      const mv = props.aiMoves.shift();
      const lastAiMove = props.aiMoves.length === 0;
      if (mv) {
        const piece = props.pieces.find(p => p.id === mv.pieceId);

        console.log(mv.pieceId);

        if (piece) {
          const colour = props.playerColour === 'white' ? 'black' : 'white';
          const file = piece.file;
          const rank = piece.rank;
          const pieceId = piece.id;
          const playerColour = colour;
          const isPlayerMove = false;
  
          this.trySelectPiece(colour, file, rank, pieceId, playerColour, isPlayerMove);
          this.tryMovePiece(props, mv.file, mv.rank, piece.colour, piece.id, isPlayerMove);
  
          if (lastAiMove) {
            setTimeout(() => alert('opening finished'), 500);
          }
        }
      } 
    }
  };

  trySetOpening = evt => {
    this.props.resetBoard();

    const openingId = evt.target.value;
    this.props.setOpening(openingId);
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
          <div className="col-12">
            <select onChange={this.trySetOpening} value="">
              <option value="">-</option>
              <option value="alekhines-defense">alekhines-defense</option>
              <option value="benko-gambit">benko-gambit</option>
              <option value="benoni-defense-modern-variation">benoni-defense-modern-variation</option>
              <option value="birds-opening">birds-opening</option>
              <option value="bogo-indian-defense">bogo-indian-defense</option>
              <option value="caro-kann-defense">caro-kann-defense</option>
              <option value="catalan-opening">catalan-opening</option>
              <option value="dutch-defense">dutch-defense</option>
              <option value="english-opening">english-opening</option>
              <option value="french-defense">french-defense</option>
              <option value="grob-opening">grob-opening</option>
              <option value="grunfeld-defense">grunfeld-defense</option>
              <option value="italian-game">italian-game</option>
              <option value="kings-fianchetto-opening">kings-fianchetto-opening</option>
              <option value="kings-gambit">kings-gambit</option>
              <option value="kings-indian-attack">kings-indian-attack</option>
              <option value="kings-indian-defense">kings-indian-defense</option>
              <option value="london-system">london-system</option>
              <option value="nimzo-indian-defense">nimzo-indian-defense</option>
              <option value="nimzowitsch-larsen-attack">nimzowitsch-larsen-attack</option>
              <option value="polish-opening">polish-opening</option>
              <option value="queens-gambit">queens-gambit</option>
              <option value="queens-indian-defense">queens-indian-defense</option>
              <option value="reti-opening">reti-opening</option>
              <option value="ruy-lopez">ruy-lopez</option>
              <option value="scotch-game">scotch-game</option>
              <option value="sicilian-defense-closed">sicilian-defense-closed</option>
              <option value="sicilian-defense">sicilian-defense</option>
              <option value="slav-defense">slav-defense</option>
              <option value="trompowsky-attack">trompowsky-attack</option>
              <option value="vienna-game">vienna-game</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            AI moves: {props.aiMoves.length}
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  aiMoves: state.ai.moves,
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
