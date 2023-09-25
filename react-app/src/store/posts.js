const CREATE_APPLAUSE_POST='posts/CREATE_APPLAUSE_POST'

const createApplausePost = (post) => ({
    type: CREATE_APPLAUSE_POST,
    payload: post
})


export const createApplausePostThunk = (post) => async (dispatch) => {
    const { userId, postTitle, postContent, imageSrc, musicSrc } = post;
    const response = await fetch(`/api/posts/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({
            userId,
            postTitle,
            postContent,
            imageSrc,
            musicSrc
        })
    })

    if(response.ok){
        const data = await response.json()
        dispatch(createApplausePost(data));
        return null
    }
}

const initialState = {posts: null};

export default function postsReducer(state=initialState, action) {
    let newState;
    switch(action.type) {
        case CREATE_APPLAUSE_POST:
            newState = Object.assign({}, state)
            newState.posts[action.payload.id] = action.payload;
            return newState;
        default:
            return state;
    }
}
