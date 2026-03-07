const allBtn = document.getElementById('AllBtn')
const openBtn = document.getElementById('openBtn')
const closeBtn=document.getElementById('closeBtn')

function toggleStyle(id) {
   
    allBtn.classList.add('bg-base-200', 'text-black')
    openBtn.classList.add('bg-base-200', 'text-black')
    closeBtn.classList.add('bg-base-200', 'text-black')

    allBtn.classList.remove('bg-blue-700', 'text-white')
    openBtn.classList.remove('bg-blue-700', 'text-white')
    closeBtn.classList.remove('bg-blue-700', 'text-white')

    let selected = document.getElementById(id)
    selected.classList.remove('bg-base-200', 'text-black')
    selected.classList.add('bg-blue-700', 'text-white')
}

const LoadIssues=() => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(Response => Response.json())
    .then(json => displayIssue( json.data ))
}

const displayIssue=(issues) => {
    console.log( issues )
    const getId=document.getElementById("issue-container")
    getId.innerHTML="";

    for(let issue of issues) {
       
        const addElement=document.createElement("div")
        addElement.innerHTML=`
             <div class="">
           <h2>${issue.title}</h2>
        <h3>${issue.description}</h3>
        <div class="">
            <span>${issue.labels[0]}</span>
            <span>${issue.labels[1]}</span>
        </div>
        <div class="">
            <p>${issue.author}</p>
            <p>${issue.createdAt}</p>
        </div>
        </div>
        
        `

         getId.append(addElement)
    }

   
    
}

LoadIssues()

