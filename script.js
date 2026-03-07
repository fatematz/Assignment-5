const allBtn = document.getElementById('AllBtn')
const openBtn = document.getElementById('openBtn')
const closeBtn=document.getElementById('closeBtn')

// const buttons = [allBtn, openBtn, closeBtn];

// function toggleStyle (id) {

//         buttons.forEach(btn => {
//         btn.classList.remove('bg-blue-600', 'text-white');
//         btn.classList.add('bg-gray-200', 'text-black');
//     });

//     let selected=document.getElementById(id)
//     selected.classList.remove('bg-gray-200', 'text-black');
//     selected.classList.add('bg-blue-600', 'text-white');
// }

function toggleStyle(id) {
    // adding bg day for all
    allBtn.classList.add('bg-base-200', 'text-black')
    openBtn.classList.add('bg-base-200', 'text-black')
    closeBtn.classList.add('bg-base-200', 'text-black')

    // if any button has black then remove
    allBtn.classList.remove('bg-blue-700', 'text-white')
    openBtn.classList.remove('bg-blue-700', 'text-white')
    closeBtn.classList.remove('bg-blue-700', 'text-white')

    // console.log( id )

    let selected = document.getElementById(id)
    // console.log(selected, "id select")

    //  previous style remove
    selected.classList.remove('bg-base-200', 'text-black')

    // adding black for the current button / adding new style
    selected.classList.add('bg-blue-700', 'text-white')
}