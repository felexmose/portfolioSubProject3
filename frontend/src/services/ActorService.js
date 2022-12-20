

export async function getAllActors() {
    try{
        const response = await fetch('http://localhost:5001/api/actors');
        return await response.json();
    } catch(error){
        return [];
    }
}