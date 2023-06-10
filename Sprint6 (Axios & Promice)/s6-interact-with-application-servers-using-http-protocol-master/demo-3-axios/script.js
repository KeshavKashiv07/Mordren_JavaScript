const url = "http://localhost:3000/posts";

function fetchPosts(url) {
    const getPromise = axios.get(url);
    getPromise.then((response) => {
        response.data.forEach(post => {
            document.body.innerHTML += `${post.title} - ${post.author} <br/>`;
        })
    })
}

function savePost(event) {
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const postPromise = axios.post(url,formProps);
    postPromise.then(response=>{
        event.preventDefault();
        console.log(response);
    });
}

fetchPosts(url);