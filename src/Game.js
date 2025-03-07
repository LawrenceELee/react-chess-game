import { Chess } from 'chess.js'
import { BehaviorSubject } from 'rxjs'

const chess = new Chess();

const subjectGame = new BehaviorSubject({
    chess: chess.board()
})

export default subjectGame


