document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.collapsible');
var instances = M.Collapsible.init(elems, {});


const addUserButton = Document.getElementById('add-user-button')
addUserButton.addEventListener('click', ()=>{
    document.querySelector('.add-user-modal').classList.add('show')
    document.querySelector('.add-user-modal-back') .classList.remove('dis-none')
})

});