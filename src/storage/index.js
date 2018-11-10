const STORAGE_KEY = 'students-vuejs'

export default {
    fetch () {
        return window.JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },
    save (items) {
        window.localStorage.setItem(STORAGE_KEY, window.JSON.stringify(items))
    }
}