
function add() {

    if (imp.value == "") {
        alert("Please enter the task");
    }
    else {
        let out = document.getElementById("imp").value;
        let node = document.createElement("li");
        node.innerHTML = `${out}  <i class="fa-solid fa-trash i1"></i> <i class="fa-solid fa-check"></i></i>`
        document.getElementById("myList").appendChild(node);
        document.getElementById("imp").value = "";
        node.querySelector(".fa-trash").addEventListener("click", remove);
        function remove() 
        {
            if (confirm("Are you sure You wants to Delete?") == true) {
                node.remove()
            }
        }
        node.querySelector(".fa-check").addEventListener("click", edit);
        function edit() {

            if (confirm("Are you sure You have Completed?") == true) {
                node.innerHTML = "Completed";
            }

        }

    }

}
