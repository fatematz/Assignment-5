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

let allIssues=[];

const LoadIssues=() => {
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
        .then(Response => Response.json())
        .then(json => {
            allIssues=json.data;
        displayIssue( json.data )
    })
}


const filterIssues=(status) => {
    const btnId=status==='all'? 'AllBtn':status==='open'? 'openBtn':'closeBtn';

    toggleStyle(btnId);

    if(status==='all') {
        displayIssue(allIssues);
    } else {
        const filterd=allIssues.filter(issue => issue.status===status);
        displayIssue(filterd)
    }
}

const displayIssue=(issues) => {
    // console.log( issues )

    document.getElementById("issue-count").innerText = `${issues.length} Issues`;

    const getId=document.getElementById("issue-container")
    getId.innerHTML="";

    for(let issue of issues) {
       
        const addElement=document.createElement("div")
        addElement.innerHTML=`
             <div class=" shadow-[0px_0px_15px_rgba(0,0,0,0.5)] py-[20px] px-[10px] space-y-3 h-[417px] rounded-xl">
             <div class="">
             <button class="w-[70px] h-[30px] rounded-full bg-red-200 text-red-700   ml-[190px] hover:bg-gray-500 hover:text-white hover:border-none">${issue.priority}</button>
             </div>
             <div class="">
           <h2 class="text-[20px] font-bold">${issue.title}</h2>
           </div>
           <div class="">
        <h3 class="text-[18px] text-[##64748B]" >${issue.description}</h3>
        </div>
        <div class="border-b-1 flex gap-[20px] py-[20px]">
            <button class="w-[120px] h-[30px] rounded-full bg-red-200 text-red-700 border border-red-500 hover:bg-blue-500 hover:text-white hover:border-none">${issue.labels[0]}</button>
            <button class="w-[120px] h-[30px] rounded-full bg-[#eed77b] text-red-700 border border-[#cfa90e] hover:bg-blue-500 hover:text-white hover:border-none">${issue.labels[1]}</button>
        </div>
       
        <div class="">
            <p class="text-[20px]">${issue.author}</p>
            <p class="text-[20px]">${issue.createdAt}</p>
        </div>
         </div>
        
        `

         getId.append(addElement)
    }

   
    
}

LoadIssues()

