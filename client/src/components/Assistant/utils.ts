export const getCurrentDate = () => {
    let date = new Date();
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}