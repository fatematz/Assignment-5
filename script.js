const allBtn = document.getElementById('AllBtn')
const openBtn = document.getElementById('openBtn')
const closeBtn = document.getElementById('closeBtn')

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

let allIssues = []

const loadingSpinner = document.getElementById('loadingSpinner')

const LoadIssues = () => {
    loadingSpinner.classList.remove('hidden')
    loadingSpinner.classList.add('flex')

    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
        .then((Response) => Response.json())
        .then((json) => {
            allIssues = json.data
            displayIssue(json.data)
            loadingSpinner.classList.add('hidden')
        })
}

const filterIssues = (status) => {
    const btnId =
        status === 'all' ? 'AllBtn' : status === 'open' ? 'openBtn' : 'closeBtn'

    toggleStyle(btnId)

    if (status === 'all') {
        displayIssue(allIssues)
    } else {
        const filterd = allIssues.filter((issue) => issue.status === status)
        displayIssue(filterd)
    }
}

const displayIssue = (issues) => {
    // console.log( issues )

    document.getElementById('issue-count').innerText = `${issues.length} Issues`

    const getId = document.getElementById('issue-container')
    getId.innerHTML = ''

    for(let issue of issues) {
        
        const statusIcon = issue.status === 'open' 
        ? 'assets/Open-Status.png' 
        : 'assets/Closed- Status .png'; 

        const borderClass =
            issue.status==='open'? 'border-[#00A96E]':'border-[#A855F7]'
        

        const addElement=document.createElement('div')
        
        addElement.onclick=() => cardDetail(issue.id)
        
        addElement.innerHTML = `
             <div class=" shadow-[0px_0px_15px_rgba(0,0,0,0.2)] py-[20px] px-[10px] space-y-3 h-[417px] rounded-xl      border-t-4 ${borderClass}">
             <div class=" flex justify-between items-center">
                    <div class=" ">
                    <img src="${statusIcon}" alt="${issue.status}" class="w-6 h-6">
                    </div>
                    <div class="">
                  <button onclick="cardDetail(${issue.id})" class="w-[70px] h-[30px] rounded-full bg-red-200 text-red-700  hover:bg-gray-500 hover:text-white hover:border-none">${issue.priority}</button>
                 </div>
             </div>
             <div class="">
           <h2 class="text-[20px] font-bold">${issue.title}</h2>
           </div>
           <div class="">
        <h3 class="text-[18px] text-[#64748B]" >${issue.description}</h3>
        </div>
        <div class="flex gap-[20px] py-[20px]">
            <button class="w-[120px] h-[30px] rounded-full bg-red-200 text-red-700 border border-red-500 hover:bg-blue-500 hover:text-white hover:border-none">${issue.labels[0]}</button>
            <button class="w-[120px] h-[30px] rounded-full bg-[#eed77b] text-red-700 border border-[#cfa90e] hover:bg-blue-500 hover:text-white hover:border-none">${issue.labels[1]}</button>

            
        </div>


      <hr class=" border-gray-300  -mx-2">


        <div class="">
            <p class="text-[18px] text-[#64748B]">${issue.author}</p>
            <p class="text-[18px] text-[#64748B]">${issue.createdAt}</p>
        </div>
         </div>
        
        `

        getId.append(addElement)
    }
}

const cardDetail = (id) => {
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`

    fetch(url)
        .then((Response) => Response.json())
        .then((json) => displayCard(json.data))
}

const displayCard = (cardView) => {
    // console.log(cardView)

    const detailsCard = document.getElementById('details-card')
    detailsCard.innerHTML = `
    
    <div class="space-y-[30px]">
                        <div class="">
                            <h1 class="text-[32px] font-bold text-[#1E293B] leading-tight">${cardView.title}</h1>
                        </div>

                        <div class="flex items-center gap-3">
                            <span
                                class="bg-[#10B981] text-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-blue-500 hover:text-white hover:border-none">${cardView.status}</span>
                            <div class="flex items-center gap-2 text-[#64748B] text-md">
                                <span>•</span>
                                <p>Opened by <span class="font-medium">${cardView.author}</span></p>
                                <span>•</span>
                                <p>${cardView.createdAt}</p>
                            </div>
                        </div>

                        <div class="">
                            <button
                                class="w-[120px] h-[30px] rounded-full bg-red-200 text-red-700 border border-red-500 hover:bg-blue-500 hover:text-white hover:border-none">${cardView.labels[0]}</button>
                            <button
                                class="w-[120px] h-[30px] rounded-full bg-[#eed77b] text-red-700 border border-[#cfa90e] hover:bg-blue-500 hover:text-white hover:border-none">${cardView.labels[1]}</button>
                        </div>

                        <div className="">
                        <p class="text-[#64748B] text-lg leading-relaxed">
                          ${cardView.description}
                        </p>
                        </div>

                        <div class="flex gap-[50px]">
                            <div class="">
                                <p class="text-[#94A3B8] text-sm font-medium ">Assignee:</p>
                                <p class="text-[#1E293B] text-xl font-bold ">${cardView.assignee}</p>
                            </div>

                            <div class="">
                                <p class="text-[#94A3B8] text-sm font-medium  ">Priority:</p>
                                <span
                                    class="inline-block bg-[#EF4444] text-white px-5 py-1 rounded-full text-sm font-extrabold shadow-sm hover:bg-blue-500 hover:text-white hover:border-none">${cardView.priority}</span>
                            </div>
                        </div>

                        
                    </div>
    
    `
    document.getElementById('my_modal_5').showModal()
}

LoadIssues()

document.getElementById('btn-search').addEventListener('click', () => {
    const input = document.getElementById('input-search')
    const searchValue = input.value.trim().toLowerCase()
    console.log(searchValue)

    fetch(
        `https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchValue}`,
    )
        .then((Response) => Response.json())
        .then((json) => {
            // console.log(json)

            const allCards = json.data

            // console.log(allCards)
            const filterCards = allCards.filter((card) =>
                card.title.toLowerCase().includes(searchValue),
            )
            displayIssue(filterCards)
            console.log(filterCards)
        })
})

document.getElementById('input-search').addEventListener('input', (event) => {
    if (event.target.value.trim() === '') {
        LoadIssues()
    }
})
