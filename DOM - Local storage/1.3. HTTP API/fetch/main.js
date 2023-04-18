fetch('https://jsonplaceholder.typicode.com/posts', options1).then(res => {
    // console.log('bbbbbbbbbbbbbbbbbbb', res);
    res.json().then(_res => {
        console.log('aaa', _res);

    });
}).catch(err => {
    console.log('zzz', err);
})
fetch('https://jsonplaceholder.typicode.com/comments', options2).then(res => {
    // console.log('bbbbbbbbbbbbbbbbbbb', res);
    res.json().then(_res => {
        console.log('bbb', _res);

    });
}).catch(err => {
    console.log('zzz', err);
})
fetch('https://jsonplaceholder.typicode.com/albums', options3).then(res => {
    // console.log('bbbbbbbbbbbbbbbbbbb', res);
    res.json().then(_res => {
        console.log('ccc', _res);

    });
}).catch(err => {
    console.log('zzz', err);
})
fetch('https://jsonplaceholder.typicode.com/photos', options4).then(res => {
    // console.log('bbbbbbbbbbbbbbbbbbb', res);
    res.json().then(_res => {
        console.log('ddd', _res);

    });
}).catch(err => {
    console.log('zzz', err);
})
fetch('https://jsonplaceholder.typicode.com/todos', options5).then(res => {
    // console.log('bbbbbbbbbbbbbbbbbbb', res);
    res.json().then(_res => {
        console.log('zzz', _res);

    });
}).catch(err => {
    console.log('fff', err);
})
fetch('https://jsonplaceholder.typicode.com/users', options6).then(res => {
    // console.log('bbbbbbbbbbbbbbbbbbb', res);
    res.json().then(_res => {
        console.log('eee', _res);

    });
}).catch(err => {
    console.log('zzz', err);
})
Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts', options1),
    fetch('https://jsonplaceholder.typicode.com/comments', options2),
    fetch('https://jsonplaceholder.typicode.com/albums', options3),
    fetch('https://jsonplaceholder.typicode.com/photos', options4),
    fetch('https://jsonplaceholder.typicode.com/todos', options5),
    fetch('https://jsonplaceholder.typicode.com/users', options6)
]).then(res => {
    console.log('aaaaaaaaaaaaaaaaaa', res);
    Promise.all([res[0].json(), res[1].json(),res[2].json(),res[3].json(),res[4].json(),res[5].json()]).then(_res => {

    console.log('xxx', _res);
    })
}).catch(err => {

})
//F8
// var postApi = 'https://jsonplaceholder.typicode.com/posts';
// fetch(postApi)
// .then(function(reponse){
//     return reponse.json();
// })
// .then(function(posts){
//     var htmls = posts.map(function(post){
//         return `
//        <li>
//         <h2>${post.title}</h2>
//         <p>${post.body}</p>
//         </li>`;
//     });
//     var html = htmls.join('');
//     document.getElementById('post-block').innerHTML = html;
// })
// .catch(function(err){
//     console.log('co loi');
// })
