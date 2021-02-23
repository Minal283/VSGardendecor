import axios from 'axios'

export const ADD_GARDENDECOR = 'ADD_GARDENDECOR'
export const GET_ALL_GARDENDECORS = 'GET_ALL_GARDENDECORS'
export const DELETE_GARDENDECOR = 'DELETE_GARDENDECOR'
export const UPDATE_GARDENDECOR = 'UPDATE_GARDENDECOR'
export const GET_GARDENDECOR_BY_PRODUCT_NAME = 'GET_GARDENDECOR_BY_PRODUCT_NAME'
export const CLEAR_STATE = 'CLEAR_STATE'
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'
export const GET_GARDENDECOR_BY_ID = 'GET_GARDENDECOR_BY_ID'

const BASE_URL = 'http://localhost:9191/api/'

const getAllGardenDecorsAction = (data) => {
    return {
        type: GET_ALL_GARDENDECORS,
        data
    }
}

export const getAllGardenDecors = () => {
    return (dispatch) => {
        axios.get(BASE_URL)
            .then((response) => {
                dispatch(getAllGardenDecorsAction(response.data))
            })
    }
}

const addGardenDecorAction = (data) => {
    return {
        type: ADD_GARDENDECOR,
        data
    }
}

export const AddGardenDecor = (newGardenDecor) => {
    return (dispatch) => {
        axios.post(BASE_URL, newGardenDecor)
            .then((response) => {
                dispatch(addGardenDecorAction(response.data))
            })
    }
}


const deleteGardenDecorAction = (data) => {
    return {
        type: DELETE_GARDENDECOR,
        data
    }
}

export const deleteGardenDecor = (id) => {
    return (dispatch) => {
        axios.delete(BASE_URL + id)
            .then((response) => {
                dispatch(deleteGardenDecorAction(response.data))
            })
    }
}

const updateGardenDecorAction = (data) => {
    return {
        type: UPDATE_GARDENDECOR,
        data
    }
}

export const updateGardendecor = (productId, newGardenDecorDetails) => {
    return (dispatch) => {
        axios.put(BASE_URL + productId, newGardenDecorDetails)
            .then((response) => {
                dispatch(updateGardenDecorAction(response.data))
            })
    }
}

//search by names action
const getGardenDecorByProductNameAction = (data) => {
    return {
        type: GET_GARDENDECOR_BY_PRODUCT_NAME,
        data
    }
}

//search by names function
export const getGardenDecorByProductName = (productName) => {
    return (dispatch) => {

        let URL = `http://localhost:9191/api/search?productName=${productName}`

        axios.get(URL)
            .then((response) => {
                dispatch(getGardenDecorByProductNameAction(response.data))
            })
    }
}

//action to clear state
const clearStateAction = (data) => {
    return {
        type: CLEAR_STATE,
        data
    }
}

//clear state function
export const clearState = () => {
    return (dispatch) => {
        dispatch(clearStateAction())
    }
}

//action to get gardendecors by id
const getGardenDecorByIdAction = (data) => {
    return {
        type: GET_GARDENDECOR_BY_ID,
        data
    }
}
//function to get gardendecors by id
export const getGardenDecorById = (productId) => {
    return (dispatch) => {
        let URL = `http://localhost:9191/api/search?productId=${productId}`
        axios.get(URL)
            .then((response) => {
                dispatch(getGardenDecorByIdAction(response.data))
            })
    }
}