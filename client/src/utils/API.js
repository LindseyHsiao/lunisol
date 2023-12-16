
export const createUser = (data) => {
    return fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}


// check this!!!
export const updateUser = (data) => {
    return fetch(`/api/user/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}


export const getOneUser = (id) => {
    return fetch(`/api/user/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const getAllUsers = () => {
    return fetch('/api/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const loginUser = (data) => {
    return fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const getProducts = ()=> {
    return fetch('/api/products', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
}

export const getOneProduct = (id)=> {
    return fetch(`/api/products/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
}

export const createProduct = (data) => {
    return fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

// export const getCheckout = ();
