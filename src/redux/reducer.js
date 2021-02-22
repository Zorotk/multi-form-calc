import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    currentStep: 1,
    step1: '1',
    step2: '',
    step3: '1',
    step4: {width: '', height: ''},
    loading: true,
    results: [],
    fetchResult: ''
}

const server = process.env.REACT_APP_API_URL;

export const fetchData = createAsyncThunk("fetchData",

    async (url, {dispatch}) => {
        try {
            const {data} = await axios(server + url)
            dispatch(toolkitSlice.actions.setResults(data.message))
            dispatch(toolkitSlice.actions.fetchResult(data.result))
        } catch (e) {
            console.log(e)
        }
    }
);


const toolkitSlice = createSlice({
    name: 'film', initialState
    , reducers: {
        fetchResult(state, {payload}) {
            state.fetchResult = payload
        },
        setCurrentStep(state, {payload}) {
            state.currentStep = payload
        },
        setStep1(state, {payload}) {
            state.step1 = payload
        },
        setStep2(state, {payload}) {
            state.step2 = payload
        },
        setStep3(state, {payload}) {
            state.step3 = payload
        },
        setStep4(state, {payload}) {
            state.step4 = payload
        },
        setResults(state, action) {
            state.results = action.payload
        },
        setDefault(state) {
            state.currentStep = 1
            state.step1 = '1'
            state.step2 = ''
            state.step3 = '1'
            state.step4 = {width: '', height: ''}
        }
    }
})

export default toolkitSlice.reducer
export const {setDefault, setStep4, setStep3, setStep2, setStep1, setCurrentStep} = toolkitSlice.actions
