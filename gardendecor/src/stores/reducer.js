import * as actionCreators from '../actions/actions'

const initialState = {
    returnedMessage: 'empty msg - welcome',
    gardendecorsList: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionCreators.GET_ALL_GARDENDECORS:
            let listOfGardenDecors = action.data
            console.log('List of GardenDecors')
            console.log(listOfGardenDecors)
            return {
                //  returnedMessage: 'Received all GardenDecor Details !! ',
                gardendecorsList: listOfGardenDecors
            }

        case actionCreators.DELETE_GARDENDECOR:
            let messageAfterDeletion = action.data.message
            let listAfterDeletion = action.data.gardendecorList
            console.log('Deletion of gardendecor')
            console.log(listAfterDeletion)
            console.log(messageAfterDeletion)
            return {
                returnedMessage: messageAfterDeletion,
                gardendecorsList: listAfterDeletion
            }

        case actionCreators.ADD_GARDENDECOR:
            let messageAfterAddition = action.data.message
            let listAfterAddition = action.data.gardendecorList
            console.log('Addition of gardendecor')
            console.log(listAfterAddition)
            console.log(messageAfterAddition)
            return {
                returnedMessage: messageAfterAddition,
                gardendecorsList: listAfterAddition
            }

        case actionCreators.UPDATE_GARDENDECOR:
            let messageAfterUpdation = action.data.message
            let listAfterUpdation = action.data.gardendecorList
            console.log('Updating gardendecor')
            console.log(listAfterUpdation)
            console.log(messageAfterUpdation)
            return {
                returnedMessage: messageAfterUpdation,
                gardendecorsList: listAfterUpdation
            }

        case actionCreators.GET_GARDENDECOR_BY_PRODUCT_NAME:
            console.log(action)
            let listOfGardenDecorByProductName = action.data.gardenDecors
            console.log('List of gardendecor by product name')
            console.log(listOfGardenDecorByProductName)
            return {

                gardendecorsList: listOfGardenDecorByProductName
            }

        case actionCreators.CLEAR_STATE:
            return {
                returnedMessage: '',
                gardendecorsList: []
            }

        case actionCreators.GET_GARDENDECOR_BY_ID:
            let listOfGardenDecorById = action.data.gardendecors
            console.log('List of gardendecors By Product Id')
            console.log(listOfGardenDecorById)
            return {
                gardendecorsList: listOfGardenDecorById
            }

        default:
            return state
    }
}

export default reducer;