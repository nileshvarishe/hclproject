import {takeLatest,put,call} from 'redux-saga/effects'
import {removeFromCart} from '../components/MyOrder'

function* addBooksSync(data){
    try {
        const cartAddData = data.bookObj
        yield put({type: "ADD_BOOK",cartAddData})

     } catch (error) {
        yield put({type: "FETCH_FAILED", error})
     }
}

function* removeBooksSync(data){
    try {
        const cartRemoveBooks = yield call(removeFromCart,data.id, data.myOrder)
        yield put({type: "REMOVE_BOOK", cartRemoveBooks})

     } catch (error) {
        yield put({type: "FETCH_FAILED", error})
     }
}

function* watchActions(){
    yield takeLatest('ADD', addBooksSync)
    yield takeLatest('REMOVE', removeBooksSync)
}

export default watchActions