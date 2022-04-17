//promise.then example
//little difficult to read compare to async await
const Posts = [
        { title : 'Post One', body : 'This is post one'},
        { title : 'Post Two', body : 'This is post two'}
];

function getPosts(){
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        let output = "";
                        Posts.forEach((post, index) =>{
                                output +=`<li>${post.title}</li>`;
                        });
                        document.body.innerHTML = output;
                        resolve()
                }, 1000)
        })
}

function createPost(post){
        return new Promise((resolve, reject) => {
                setTimeout(() =>{
                        Posts.push(post);
                        resolve();

                }, 2000);
        })    
}

createPost({ title : 'Post three', body : 'This is post three'})
.then(() =>{
        getPosts().then(() =>{
                createPost({ title : 'Post four', body : 'This is post four'})
                .then(() =>{
                        getPosts().then(() =>{
                                createPost({ title : 'Post five', body : 'This is post five'})
                                .then(() =>{
                                        getPosts();
                                })

                        })

                })
        })
})
.catch(err => console.log(err))


//async await example
//easy to read compare to promise.then

const Posts = [
        { title : 'Post One', body : 'This is post one'},
        { title : 'Post Two', body : 'This is post two'}
];

function getPosts(){
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        let output = "";
                        Posts.forEach((post, index) =>{
                                output +=`<li>${post.title}</li>`;
                        });
                        document.body.innerHTML = output;
                        resolve()
                }, 1000)
        })
}

function createPost(post){
        return new Promise((resolve, reject) => {
                setTimeout(() =>{
                        Posts.push(post);
                        resolve();

                }, 2000);
        })    
}

async function printPosts(){

        await createPost({ title : 'Post three', body : 'This is post three'})
        await getPosts();
        await createPost({ title : 'Post four', body : 'This is post four'})
        await getPosts();
        await createPost({ title : 'Post five', body : 'This is post five'})
        await getPosts();
}
printPosts();
