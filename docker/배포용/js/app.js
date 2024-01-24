const btn = document.querySelector('button');
const img = document.querySelector('img');

btn.onclick = () => {
    btn.innerText = "ㅎㅎ";
    btn.style.backgroundColor = "skyblue";
    img.style.display = "inline-block";
}

