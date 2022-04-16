const posts = [
        {title:'Post One', body:'This is post one'},
        {title: 'Post Two', body:'This is post two'}
];

function getPosts() {
        setTimeout(() => {
                let output = "";
                posts.forEach((post, index) =>{
                        output +=`<li>${post.title}</li>`;
                });
                document.body.innerHTML = output;
        }, 1000)
        
}
getPosts()

function createPost(post){
        setTimeout(() =>{
                posts.push(post)
                createdAt = new Date().getTime()
                getPosts();
                updateLastUserActivityTime().catch(err => console.log(err))
        }, 1000);
}


function deletePost(){
        return new Promise((resolve, reject) => {
                setTimeout(()=> {  
                                posts.pop(posts);
                        
                        let dpost = false;
                        if(!dpost){
                                resolve();
                        } else {
                                reject("Error : Something went wrong")
                        }
                
                }, 2000)
        })
}

function updateLastUserActivityTime(){
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        console.log(`New post created at ${(new Date().getTime() - this.createdAt)/1000} seconds ago`);

                        let postcreated = true;
                        if(postcreated){
                                resolve();
                        } else {
                                reject("Error : Something went wrong while creating post");
                        }
                }, 1000)
        })
        
}

createPost({ title: 'Post Three', body: 'This is post three'}, getPosts());


Promise.all([posts]).then(values => console.log(values));

deletePost();
deletePost();
deletePost();
