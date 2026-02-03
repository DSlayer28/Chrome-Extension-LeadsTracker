const saveBtn = document.getElementById("input-btn")
const delBtn = document.getElementById("del-btn")
const saveTab = document.getElementById("save-tab")
let myLeads = []
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
// const tabs = [
//     {url: "https://www.google.com"}
// ] noo need for hardcoded variable here


// localStorage.clear()
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
function renderLeads(leads){

    // let listItems = "<li><a target='_blank' href='" + inputEl.value + "'>" +inputEl.value+ "</a></li>"

    let listItems = ""
    for(let i =0; i<leads.length;i++){
        listItems += `<li>
                        <a target='_blank' href='${leads[i]}'>
                            ${leads[i]} 
                        </a>
                    </li>`
    }
    //`hello
    //                  there` Template strings or literals
    // const email = `Hey ${recipient}! How is it going? Cheers Per`


    ulEl.innerHTML = listItems //DOM manipulation always comes with a cost... so it should not be used inside the loop.
    
    
    // for(const i of myLeads){
    // const li = document.createElement("li")
    // li.textContent = i
    // ulEl.appendChild(li)
    // }
}

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}


saveTab.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        //active describes the current open tab
        //currentWindow describes the the currently open/active window if multiple windows of chrome browser are open

        //since only one tab should be active aand in the current window at once
        //the return variable should only have one entry
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads(myLeads)
    })
 
})

saveBtn.addEventListener("click", function () {
    const val = inputEl.value.trim()
    if (!val) return

    myLeads.push(val)
    // console.log(myLeads)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderLeads(myLeads)
    // localStorage.clear()
})

delBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})

console.log(leadsFromLocalStorage)

// localStorage.setItem(key, val)
// localStorage.getItem(key)
// localStorage.clear()
// PS: Both the key and val needs to be String

// localStorage data has no expiration time, sessionStorage data gets cleared when the page session ends — that is, when the page is closed.
// localStorage data is specific to the protocol of the document. In particular, for a site loaded over HTTP (e.g., http://example.com),
    //  localStorage returns a different object than localStorage for the corresponding site loaded over HTTPS (e.g., https://example.com).

    // NOTE: The keys and the values stored with localStorage are in the UTF-16 string format. BUT we need to store ARRAY!
    // SO we use JSON.stringify() and JSON.parse()
    
    
    //let myLeads = `["www.google.com"]`
    // myLeads = JSON.parse(myLeads) ---------------->converts JSON string into OBJECT for JS
    // myLeads = JSON.stringify(myLeads) ------------>converts JS object into JSON string for storing in localStorage
    // myLeads.push("www.yahoo.com")
    // console.log(myLeads)

    //truthy or falsy values
    //0, -1, "", null, undefined, NaN are falsy values

    //.toFixed(2) --------------->rounds off to two decimal places