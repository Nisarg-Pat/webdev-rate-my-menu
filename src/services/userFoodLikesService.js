const SERVER_API = process.env.NODE_ENV === 'development'
                   ? "http://localhost:4000/api"
                   : "";

export const addFoodLike = (foodLike) => {
    return fetch(`${SERVER_API}/foodLike`, {
        method: "POST",
        body : JSON.stringify(foodLike),
        credentials : "include",
        headers: {
            "content-type": "application/json"
        }
    });
}

export const getLikesOfFoodItem = (item) => {
    return fetch(`${SERVER_API}/foodLikesOfFood`, {
        method: "POST",
        body : JSON.stringify({foodItem: item}),
        credentials : "include",
        headers: {
            "content-type": "application/json"
        }
    }).then((response) => response.json());
}

export const getFoodLikesByUser = (user) => {
    return fetch(`${SERVER_API}/foodLikesOfUser`, {
        method: "POST",
        body : JSON.stringify({user}),
        credentials : "include",
        headers: {
            "content-type": "application/json"
        }
    }).then((response) => response.json());
}

export const deleteFoodLike = (foodLike) => {
    return fetch(`${SERVER_API}/foodLike`, {
        method: "DELETE",
        body : JSON.stringify(foodLike),
        credentials : "include",
        headers: {
            "content-type": "application/json"
        }
    });
}