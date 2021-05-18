let curr_value = 0;
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

value.addEventListener("click" , function(){
    alert("hi");
});
btns.forEach(function(btn){
    btn.addEventListener("click" , function(e){
        const curr = e.currentTarget.classList;
        console.log(curr);

        if(curr.contains("increase")){
            curr_value++;
        }
        else if(curr.contains("decrease")){
            curr_value--;
        }
        else if (curr.contains("reset")){
            curr_value = 0;
        }
        // value.innerHTML = curr_value;
        value.textContent = curr_value;
        if(curr_value>0){
            value.style.color = "green";
        }
        if(curr_value<0){
            value.style.color = "red";
        }
        if(curr_value == 0){
            value.style.color = "black";
        }
    })
});