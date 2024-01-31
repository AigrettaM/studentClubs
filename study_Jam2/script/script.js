// // function contentShow(sectionId) {
// //     var sec = document.querySelectorAll('section');
// //     for(var i = 0; i < sec.length; i ++) {
// //         sec[i].style.display = 'none';
// //     }

// //     document.getElementById(sectionId).style.display = 'block';
// // }

// const content ={
//     'tentang': {
//         'title': 'tentang',
//         'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, excepturi, vel deserunt quidem corporis dolorem harum iure aut ut amet, suscipit voluptatum at consequatur cumque. Atque ratione necessitatibus omnis eveniet.'
//     },
//     'kontak': {
//         'title': 'kontak',
//         'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, excepturi, vel deserunt quidem corporis dolorem harum iure aut ut amet, suscipit voluptatum at consequatur cumque. Atque ratione necessitatibus omnis eveniet.'
//     },'pengalaman': {
//         'title': 'pengalaman',
//         'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, excepturi, vel deserunt quidem corporis dolorem harum iure aut ut amet, suscipit voluptatum at consequatur cumque. Atque ratione necessitatibus omnis eveniet.'
//     },'dokumentasi': {
//         'title': 'dokumentasi',
//         'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, excepturi, vel deserunt quidem corporis dolorem harum iure aut ut amet, suscipit voluptatum at consequatur cumque. Atque ratione necessitatibus omnis eveniet.'
//     },
// };

// const Click = document.querySelector(".button33");
// Click.forEach(button => {
//     const panggil = button.id;
//     buttonClick(button, content[id].title, content[id].description);
// });

// function add(buttons, title, desc) {
//     const title = document.getElementById('title');
//     const desc = document.getElementById('description');

//     buttons.AddEventListener('click', event => {
//         buttons.forEach(btn => btn.style = '');
//         title.innerText = title;
//         desc.innerHTML = desc;
//     });
// }


function loadContent(pageName) {

    var contentContainer = document.getElementById('content-container');

    switch (pageName) {
        case 'tentang':
            contentContainer.innerHTML = '<h2>Welcome to the Homepage</h2><p>This is the content of the homepage.</p>';
            break;

        case 'kontak':
            contentContainer.innerHTML = '<h2>Page 1</h2><p>This is the content of Page 1.</p>';
            break;

        case 'pengalaman':
            contentContainer.innerHTML = '<h2>Page 2</h2><p>This is the content of Page 2.</p>';
            break;

        case 'dokumentasi':
            contentContainer.innerHTML = '<h2>Page 3</h2><p>This is the content of Page 3.</p>';
            break;

        default:
            break;
    }
}
