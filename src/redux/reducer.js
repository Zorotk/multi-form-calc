import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    requiredForm2: true,
    currentStep: 1,
    step2: '',
    loading: true,
    modalActive: false,
    results: [],
    films: [],
    showDescription: false,
    filmsComments: [],
    login: '',
    password: '',
    search: '',
    auth: false
}

const server = process.env.REACT_APP_API_URL;

export const fetchData = createAsyncThunk("fetchData",
    async (url, {dispatch}) => {
        const {data} = await axios(server + url)
        dispatch(toolkitSlice.actions.setResults(data.message))
    }
);
// export const fetchComments = createAsyncThunk("getComments",
//     async (url, {dispatch}) => {
//         const {data} = await axios(`${server}comments`)
//         dispatch(toolkitSlice.actions.setComments(data))
//         dispatch(toolkitSlice.actions.setLoading(false))
//     }
// );
//
// export const fetchDeletedComment = createAsyncThunk("fetchDeletedComment",
//     async (id, {dispatch}) => {
//         await axios.delete(`${server}comments/${id}`)
//         dispatch(toolkitSlice.actions.deleteComments(id))
//     }
// );
//
// export const addComment = createAsyncThunk("addComment",
//     async (comment, {dispatch}) => {
//         const {data} = await axios.post(`${server}comments`, comment)
//         dispatch(toolkitSlice.actions.addComments(data))
//     }
// );


const toolkitSlice = createSlice({
    name: 'film', initialState
    , reducers: {
        requiredForm(state, {payload}) {
            state.requiredForm2 = payload
        },
        setStep(state, {payload}) {
            state.currentStep = payload
        },
        setStep2(state, {payload}) {
            state.step2 = payload
        },
        // setmodalActive(state, {payload}) {
        //     state.modalActive = payload
        // },
        // setResults(state, action) {
        //     state.results = action.payload
        // },
        // setFilms(state, action) {
        //     state.films = action.payload
        // },
        // toggleDescription(state, {payload}) {
        //     state.showDescription = payload
        // },
        // addComments(state, {payload}) {
        //     state.filmsComments.unshift(payload)
        // },
        // deleteComments(state, {payload}) {
        //     state.filmsComments = state.filmsComments.filter(el => el.id !== payload)
        // },
        // setComments(state, {payload}) {
        //     state.filmsComments = payload.reverse()
        // },
        // setLogin(state, action) {
        //     state.login = action.payload
        // },
        // setSearch(state, action) {
        //     state.search = action.payload
        // },
        // setPassword(state, {payload}) {
        //     state.password = payload
        // },
        // setLoading(state, {payload}) {
        //     state.loading = payload
        // },
        // setAuth(state, {payload}) {
        //     state.auth = payload
        // }
    }
})

export default toolkitSlice.reducer
export const {setStep2, requiredForm, setStep, setAuth, setSearch, setmodalActive, setLogin, setPassword, toggleDescription} = toolkitSlice.actions
