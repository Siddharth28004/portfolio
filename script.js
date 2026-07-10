let tablinks=document.getElementsByClassName("tab-links");
let tabcontents=document.getElementsByClassName("tab-contents");
let sidemenu=document.getElementById("sidemenu");


function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
    
}

function openmenu(){
    sidemenu.style.right="0";

}
function closemenu(){
    sidemenu.style.right="-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbzhbj47Nrm7J-F7coZsUx6cOmkhE3ugoBm1LJPrwufzIKL1ydIgS1IH8wuEDddMCeTE/exec'
	const form = document.forms['portfolio_contact'];
    const msg=document.getElementById("msg");

	form.addEventListener('submit', e => {
		e.preventDefault()
		fetch(scriptURL, { method: 'POST', body: new FormData(form) })
			.then(response => response.json())
			.then(response => {
                msg.innerHTML="Thank You! Your message has been sent successfully!"
                setTimeout(function(){
                    msg.innerHTML=""
                },3000)
                form.reset();
            })
			.catch(error => console.error('Error!', error.message))
	})
