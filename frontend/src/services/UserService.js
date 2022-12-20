

export async function createUser(data) {
    const response = await fetch('http://localhost:5001/api/users/register', {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user:data})
    })
    return await response.json();
}

export async function login(data) {
    console.log(data);
    const response = await fetch('http://localhost:5001/api/users/login', {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
    })
    return await response.json();
}

