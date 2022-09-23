import axios from "axios";
import { searchAction } from "./search-slice";

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
}

export const searchListData = (postdata) => {
    return async (dispatch) => {
        const fetchData = async () => {
            dispatch(searchAction.setIsLoading())
            const response = await fetch('/cjs-search-api/search', {
                method: 'POST',
                headers,
                body: JSON.stringify(postdata)
            });

            if (!response.ok) {
                throw new Error('error ')
            }
            const data = await response.json();

            return data;
        };
        try {
            const searchData = await fetchData();
            dispatch(searchAction.searchItems({
                searchData: searchData.holidays || []
            }))
        } catch (error) {
            console.log(error)
        }finally{
            dispatch(searchAction.setIsLoading());
        }
    }
}