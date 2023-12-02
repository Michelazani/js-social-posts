const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// creo padre
const containerElement= document.getElementById('container');

// ciclo per ogni oggetto (membro) dell'array
for (let i = 0; i < posts.length; i++) {
    const informationPost = posts[i];

    // creo figlio
    const createDivEl = document.createElement ('div');
    // do classe
    createDivEl.classList.add('post')

    // faccio vedere nell'html
    containerElement.appendChild(createDivEl);

    // inserisco contenuti nell'html
    createDivEl.innerHTML = 
`
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${informationPost.author.image}" alt="Phil Mangione">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author"></div>
                <div class="post-meta__time">${informationPost.created}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${informationPost.content}</div>
    <div class="post__image">
        <img src="${informationPost.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="" data-postid="${informationPost.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <strong id="like-counter-1" class="js-likes-counter">${informationPost.likes}</strong> persone
            </div>
        </div> 
    </div>            
`

const buttonClick = document.querySelectorAll('a.like-button.js-like-button');
const counterList = document.querySelectorAll('strong.js-likes-counter');

    for (let i = 0; i < buttonClick.length; i++) {

        const currentLikeButton = buttonClick[i];
        currentLikeButton.addEventListener('click', function( event ){
            event.preventDefault();

            if (currentLikeButton.classList.contains('like-button--liked')){
                currentLikeButton.classList.remove('like-button--liked');
                counterList[i].innerHTML = parseInt(counterList[i].innerHTML, 10) - 1;
            } else {
                currentLikeButton.classList.add('like-button--liked');
                counterList[i].innerHTML = parseInt(counterList[i].innerHTML, 10) + 1;
            }
        });
    }
}

