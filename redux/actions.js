import axios from 'axios'

export function allCategories(){
    return {
        type: "ALL_CATEGORIES",
        payload: axios.get('http://192.168.0.17:3000/categories')
    }
}