

export async function getMoviesBySubstring(substring) {
    try{
        const response = await fetch('http://localhost:5001/api/movies/substring/'+ substring);
        return await response.json();
    } catch(error){
        return [];
    }
}

