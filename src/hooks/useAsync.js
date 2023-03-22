import { useReducer, useEffect } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "LOADING":
            return {
                loading: true,
                data: null,
                error: null
            };
        case "SUCCESS":
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case "ERROR":
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default:
            throw new Error(`Unknown Action: ${action}`);
    }
}

export default function useAsync(callback, deps=[]) {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: false
    });
    const run = async () => {
        dispatch({
            type: "LOADING"
        });
        try {
            const data = await callback();
            dispatch({
                type: "SUCCESS",
                data
            });
        }
        catch (error) {
            dispatch({
                type: "ERROR",
                error
            });
        }
    };
    useEffect(() => {
        run();
    }, deps);
    return [state, run];
}