const modal=document.getElementById("membershipModal");
function openMembership(){modal.classList.add("show");document.getElementById("successMessage").textContent="";}
function closeModal(){modal.classList.remove("show");}
function activateMembership(){
  const name=document.getElementById("customerName").value.trim();
  const address=document.getElementById("customerAddress").value.trim();
  const msg=document.getElementById("successMessage");
  if(!name||!address){msg.textContent="Please enter your name and residential area.";msg.style.color="#b91c1c";return;}
  msg.textContent=`Membership activated for ${name}. Welcome to NeighbourDrop!`;
  msg.style.color="#15803d";
}
function selectStore(store){
  showToast(`${store} selected — demo order flow ready.`);
  document.getElementById("demo").scrollIntoView({behavior:"smooth"});
}
function showToast(message){
  const t=document.getElementById("toast");
  t.textContent=message;t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),2600);
}
function scrollToSection(id){document.getElementById(id).scrollIntoView({behavior:"smooth"});}
window.addEventListener("click",(e)=>{if(e.target===modal)closeModal();});
