import axios from "axios";

export function loadData() {
    return(dispatch) => {
        axios.get("http://localhost:8080/vote/").then((response) => {
            dispatch(setData(response.data.data));
        }).catch((error) => {
            return error;
        });
    }
}

//Search Function
export function loadDataByQuery(str) {
    // let queryStr = "";
    return(dispatch) => {
        axios.get(`http://localhost:8080/vote?subject=${str}`).then((response) => {
            dispatch(setSubject(response.data.data));
        }).catch((error) => {
            return error;
        });
    }
}

export function deleteData(id) {
    return(dispatch) => {
        axios.delete(`http://localhost:8080/vote/${id}`).then((response) => {
            dispatch(loadData())
        }).catch((error) => {
            return error;
        });
    }
}

export function addData(data) {
    return(dispatch) => {
        axios.post("http://localhost:8080/vote/", data).then((response) => {
            dispatch(loadData())
        }).catch((error) => {
            return error;
        });
    }
}

//Put
export function updateData(id, data) {
    return(dispatch) => {
        axios.put(`http://localhost:8080/vote/${id}`, data).then((response) => {
            dispatch(loadData())
        }).catch((error) => {
            return error;
        });
    }
}

//Votes
export function updateUp(id) {
    return(dispatch) => {
        axios.put(`http://localhost:8080/vote/upVote/${id}`).then((response) => {
            dispatch(loadData());
            dispatch(loadDataById(id));
        }).catch((error) => {
            return error;
        });
    }
}

export function updateDown(id) {
    return(dispatch) => {
        axios.put(`http://localhost:8080/vote/downVote/${id}`).then((response) => {
            dispatch(loadData());
            dispatch(loadDataById(id));
        }).catch((error) => {
            return error;
        });
    }
}

export function loadDataById(id) {
    return(dispatch) => {
        axios.get(`http://localhost:8080/vote/${id}`).then((response) => {
            dispatch(setCurrentPost(response.data.data))
        }).catch((error) => {
            return error;
        });
    }
}

//Comments
export function loadCommentsById(id) {
    return(dispatch) => {
        axios.get(`http://localhost:8080/comment/?voteId=${id}`).then((response) => {
            dispatch(setComments(response.data.data));
        }).catch((error) => {
            return error;
        });
    }
}

export function addComment(id, data) {
    return(dispatch) => {
        axios.post(`http://localhost:8080/comment/?voteId=${id}`, data).then((response) => {
            dispatch(loadCommentsById(id))
        }).catch((error) => {
            return error;
        });
    }
}

export function deleteCommentById(commentId, postId) {
    return(dispatch) => {
        axios.delete(`http://localhost:8080/comment/${commentId}`).then((response) => {
            dispatch(loadCommentsById(postId));
        }).catch((error) => {
            return error;
        });
    }
}

export function updateComment(postId, id, data) {
    return(dispatch) => {
        axios.put(`http://localhost:8080/comment/${id}`, data).then((response) => {
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

function setSubject (data) {
    return {
        type: "SET_SUBJECT",
        data
    }
}