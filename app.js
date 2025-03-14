// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friend = [];

function addFriend(){
    let inputFriend = document.getElementById("friend");
    let newFriend = inputFriend.value;

    if(!newFriend){
        alert("Agrega al menos un nombre")
        return;
    }
    friend.push(newFriend);
    inputFriend.value = "";
    inputFriend.focus();
    renderFriends();
}

function renderFriends(){
    let listFriends = document.getElementById("listFriends");
    listFriends.innerHTML = "";

    for (let i = 0; i < friend.length; i++) {
        let item = document.createElement("li");
        item.textContent = friend[i];
        listFriends.appendChild(item);
        
    }
}

function sortFriend(){
    if(friend.length == 0){
        alert("No hay amigos para sortear");
        return;
    }
    let sortedFriend = friend[Math.floor(Math.random() * friend.length)];
    let result = document.getElementById("result")
    result.innerHTML = `El amigo sorteado es: ${sortedFriend}`;

    let cleanList = document.getElementById("listFriends");
    cleanList.innerHTML = "";

}