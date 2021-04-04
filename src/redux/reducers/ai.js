import alekhinesDefense from './data/ai-openings/alekhines-defense';
import benkoGambit from './data/ai-openings/benko-gambit';
import benoniDefenseModernVariation from './data/ai-openings/benoni-defense-modern-variation';
import birdsOpening from './data/ai-openings/birds-opening';
import bogoIndianDefense from './data/ai-openings/bogo-indian-defense';
import caroKannDefense from './data/ai-openings/caro-kann-defense';
import catalanOpening from './data/ai-openings/catalan-opening';
import dutchDefense from './data/ai-openings/dutch-defense';
import englishOpening from './data/ai-openings/english-opening';
import frenchDefense from './data/ai-openings/french-defense';
import grobOpening from './data/ai-openings/grob-opening';
import grunfeldDefense from './data/ai-openings/grunfeld-defense';
import italianGame from './data/ai-openings/italian-game';
import kingsFianchettoOpening from './data/ai-openings/kings-fianchetto-opening';
import kingsGambit from './data/ai-openings/kings-gambit';
import kingsIndianAttack from './data/ai-openings/kings-indian-attack';
import kingsIndianDefense from './data/ai-openings/kings-indian-defense';
import londonSystem from './data/ai-openings/london-system';
import nimzoIndianDefense from './data/ai-openings/nimzo-indian-defense';
import nimzowitschLarsenAttack from './data/ai-openings/nimzowitsch-larsen-attack';
import polishOpening from './data/ai-openings/polish-opening';
import queensQambit from './data/ai-openings/queens-gambit';
import queensIndianDefense from './data/ai-openings/queens-indian-defense';
import retiOpening from './data/ai-openings/reti-opening';
import ruyLopez from './data/ai-openings/ruy-lopez';
import scotchGame from './data/ai-openings/scotch-game';
import sicilianDefenseClosed from './data/ai-openings/sicilian-defense-closed';
import sicilianDefense from './data/ai-openings/sicilian-defense';
import slavDefense from './data/ai-openings/slav-defense';
import trompowskyAttack from './data/ai-openings/trompowsky-attack';
import viennaGame from './data/ai-openings/vienna-game';

const map = {
    'alekhines-defense': alekhinesDefense,
    'benko-gambit': benkoGambit,
    'benoni-defense-modern-variation': benoniDefenseModernVariation,
    'birds-opening': birdsOpening,
    'bogo-indian-defense': bogoIndianDefense,
    'caro-kann-defense': caroKannDefense,
    'catalan-opening': catalanOpening,
    'dutch-defense': dutchDefense,
    'english-opening': englishOpening,
    'french-defense': frenchDefense,
    'grob-opening': grobOpening,
    'grunfeld-defense': grunfeldDefense,
    'italian-game': italianGame,
    'kings-fianchetto-opening': kingsFianchettoOpening,
    'kings-gambit': kingsGambit,
    'kings-indian-attack': kingsIndianAttack,
    'kings-indian-defense': kingsIndianDefense,
    'london-system': londonSystem,
    'nimzo-indian-defense': nimzoIndianDefense,
    'nimzowitsch-larsen-attack': nimzowitschLarsenAttack,
    'polish-opening': polishOpening,
    'queens-gambit': queensQambit,
    'queens-indian-defense': queensIndianDefense,
    'reti-opening': retiOpening,
    'ruy-lopez': ruyLopez,
    'scotch-game': scotchGame,
    'sicilian-defense-closed': sicilianDefenseClosed,
    'sicilian-defense': sicilianDefense,
    'slav-defense': slavDefense,
    'trompowsky-attack': trompowskyAttack,
    'vienna-game': viennaGame
};

const initialState = {
    moves: []
};

const getOpeningMoves = opening => {
    const moves = map[opening];
    if (!moves)
        throw new Error(`Unrecognized opening: ${opening}`);

    return moves;
};

const ai = (state = initialState, action) => {
    switch (action.type) {
        case 'OPENING_SET': {
            const moves = getOpeningMoves(action.opening);
            return {
                ...state,
                moves
            };
        }
        default:
            break;
    }
    return state;
};

export default ai;
