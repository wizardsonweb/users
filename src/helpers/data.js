export const fetchData = async (url) => {
    try {
        const getData = await fetch(url);
        const resData = await getData.json();
    
        return resData;

    } catch (error) {
        console.log(error);
    }
}

export const clearUrl = (url) => {
    const queryUrl = url.indexOf('?');

    return queryUrl !== -1 ? url.substring(0, queryUrl) : url;
}