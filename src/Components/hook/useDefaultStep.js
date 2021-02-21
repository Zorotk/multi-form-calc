import {setDefault} from "../../redux/reducer";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

export default function useDefaultStep() {
    const dispatch = useDispatch()
    const history = useHistory()
    return () => {
        history.push(`/step/${Number(1)}`)
        dispatch(setDefault())
    }
}