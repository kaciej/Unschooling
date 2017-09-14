import axios from "axios";

//GET
export function loadData() {
    return(dispatch) => {
        axios.get("http://localhost:8080/vote").then((response) => {
             console.log(response.data.data);
            dispatch(setData(response.data.data));
        }).catch((error) => {
            return error;
        });
    }
}

//Search Function
export function loadDataByQuery(queryObj) {
    let queryStr = "";
    for(let key in queryObj) {
        queryStr += key;
        queryStr += "=";
        queryStr += queryObj[key];
        queryStr += "&"
    }
    return(dispatch) => {
        axios.get(`/vote/${queryStr}`).then((response) => {
            dispatch(loadData(response.data.data))
        }).catch((error) => {
            throw error;
        });
    }
}

//DELETE
export function deleteData(id) {
    return(dispatch) => {
        axios.delete(`/vote/${id}`).then((response) => {
            dispatch(loadData())
        }).catch((error) => {
            return error;
        });
    }
}

export function addData(data) {
    return(dispatch) => {
        axios.post("/vote/", data).then((response) => {
            dispatch(loadData())
        }).catch((error) => {
            return error;
        });
    }
}

//Put
export function updateData(id, data) {
    return(dispatch) => {
        axios.put(`/vote/${id}`, data).then((response) => {
            dispatch(loadData())
        }).catch((error) => {
            return error;
        });
    }
}

//VOTES
export function updateUp(id) {
    return(dispatch) => {
        axios.put(`/vote/upVote/${id}`).then((response) => {
            dispatch(loadData());
            dispatch(loadDataById(id));
        }).catch((error) => {
            return error;
        });
    }
}

export function updateDown(id) {
    return(dispatch) => {
        axios.put(`/vote/downVote/${id}`).then((response) => {
            dispatch(loadData());
            dispatch(loadDataById(id));
        }).catch((error) => {
            return error;
        });
    }
}

export function loadDataById(id) {
    return(dispatch) => {
        axios.get(`/vote/${id}`).then((response) => {
            dispatch(setCurrentPost(response.data.data))
        }).catch((error) => {
            return error;
        });
    }
}

//Comments
export function loadCommentsById(id) {
    return(dispatch) => {
        axios.get(`/comment/?voteId=${id}`).then((response) => {
            dispatch(setComments(response.data.data));
        }).catch((error) => {
            return error;
        });
    }
}

export function addComment(id, data) {
    return(dispatch) => {
        axios.post(`/comment/?voteId=${id}`, data).then((response) => {
            dispatch(loadCommentsById(id))
        }).catch((error) => {
            return error;
        });
    }
}

export function deleteCommentById(commentId, postId) {
    return(dispatch) => {
        axios.delete(`/comment/${commentId}`).then((response) => {
            dispatch(loadCommentsById(postId));
        }).catch((error) => {
            return error;
        });
    }
}

export function updateComment(postId, id, data) {
    return(dispatch) => {
        axios.put(`/comment/${id}`, data).then((response) => {
            dispatch(loadCommentsById(postId));
        }).catch((error) => {
            return error;
        });
    }
}



//To Reducer
function setData (data) {
    return {
        type: "SET_DATA",
        data
    }
}

function setCurrentPost (data) {
    return {
        type: "CURRENT_POST",
        data
    }
}

function setComments (data) {
    return {
        type: "SET_COMMENT",
        data
    }
}