const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)


checkBoxes();

function checkBoxes(){
    const triggerBottom = window.innerHeight ;
    // console.log(triggerBottom)

    boxes.forEach(box => {
    // swipes in next box when user gets to the top of a box
        const boxTop = box.getBoundingClientRect().top;
        // console.log(boxTop)
        for(i=0; i<boxes.length; i++){
            // console.log(i)
        // console.log(`The top of box ${i} starts at ${boxTop}px of the vh`)

        }
        // console.log(`This is the box height: ${boxTop}`)

    // add 'show' class if top of box is less than window height / box top appears within window height
        if( boxTop < triggerBottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
}