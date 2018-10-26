//Fakestagram
const IMAGES = [
    "https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=362a7baf8e58eab5f477b13befc0e62a&auto=format&fit=crop&w=1401&q=80",
    "https://images.unsplash.com/photo-1488015795646-7e22a773d72a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=85f3d3ca03eab737cc448726428d19d0&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1503844281047-cf42eade5ca5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ec224d4e2d53871f65b3a3ee1bae0638&auto=format&fit=crop&w=1355&q=80",
    "https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=99a036a823f65958ab245848f5091dd7&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1452873867668-7325bd9f4438?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjF9&s=cbdc4c2ec1e345307b7729f1e2b7a3af&auto=format&fit=crop&w=675&q=80",
    "https://images.unsplash.com/photo-1517213849290-bbbfffdc6da3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=943dfad4aa75252116f83032204a5608&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517429481096-5bc77134f77c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6bf8664a40a24b1d4ef439b380d7696e&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1491485880348-85d48a9e5312?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d1594d1e3fac86753a5e25b4e43da6f9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1500259571355-332da5cb07aa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=124d6dd6db2065958f8f5c6f414d7940&auto=format&fit=crop&w=634&q=80"
];

//Output variable
let output = document.querySelector('[data-output]');


//function that generates an img element

function createImage(imageURL){
    const theImage = document.createElement('img');
    
    //theImage.src = imageURL;
    theImage.setAttribute('src', imageURL);

    //add an event listener to the image
    theImage.addEventListener('click', function(e){
        //the element that got clicked is accessible as `event.target`
        output.style.display = 'block';
        closeit.style.display = 'block';
        let zimage = e.target.getAttribute('src');
        output.setAttribute('src', zimage);
        //and I can read the `src` attribute
    });
    return theImage;
}

//function that generates the thumbnail div
function createThumbnail(url){
    const theContainer = document.createElement('div');
    theContainer.classList.add('thumbnail-item');
    theContainer.appendChild(createImage(url));
    return theContainer;

}

//Generates images out
for(let i=0; i<IMAGES.length; i++){
    let thumbnails = createThumbnail(IMAGES[i]);
    document.querySelector('[data-container]').appendChild(thumbnails);
}

//Closing the pictures
let closeit = document.querySelector('[data-close]');
closeit.addEventListener('click', function(){
    output.style.display = 'none';
    closeit.style.display = 'none';
})

//Closing pictures on escape key
window.addEventListener('keydown', (event) => {
    if(this.event.keyCode === 27){
        output.style.display = 'none';
        closeit.style.display = 'none';
    }
})

window.addEventListener('keydown', (event) => {
    
    if(event.keyCode === 37){//Left
        let curr = output.getAttribute('src');
        let prev = getPrevImage(curr);
        output.setAttribute('src', prev);
    }else if(event.keyCode === 39){//Right
        let curr = output.getAttribute('src');
        let next = getNextImage(curr);
        output.setAttribute('src', next);
    }
})

function getNextImage(currentURL){
    //find the currentURL's index in the IMAGES array
    let index = IMAGES.indexOf(currentURL);
    //TODO: check if index is -1 at this point.
    //show an error or do something nice.
    //increment the index
    index++;
    //check if it's within bounds, reset if necessary
    if(index === IMAGES.length){
        index = 0;
    }
    // then return the image URL at the new index
    return IMAGES[index];

}

function getPrevImage(currentURL){
    //find the currentURL's index in the IMAGES array
    let index = IMAGES.indexOf(currentURL);
    //TODO: check if index is -1 at this point.
    //show an error or do something nice.
    //decrement the index
    index--;
    //check if it's within bounds, reset if necessary
    if(index < 0){
        index = IMAGES.length-1;
    }
    // then return the image URL at the new index
    return IMAGES[index];
}

