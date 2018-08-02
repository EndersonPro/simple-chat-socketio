const socket = io();

let message = document.getElementById("message");
let username = document.getElementById("username");
let btn = document.getElementById("send");
let output = document.getElementById("output");
let actions = document.getElementById("actions");

btn.addEventListener("click", e => {

  socket.emit("chat:message", {
    username: username.value,
    message: message.value
  });

});

message.addEventListener('keypress', e=>{
    socket.emit('chat:typing', username.value)
})


socket.on('chat:messageServe', data =>{
    actions.innerHTML = '';
    message.value = '';
    
    output.innerHTML += `
    <p>
        <strong>${data.username}</strong>: <span>${data.message}</span>
    </p>`;
})

socket.on('chat:typing', data =>{
    actions.innerHTML = `<p><em>${data} esta escribiendo... </em></p>`
})