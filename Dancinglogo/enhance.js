const enhance = id => {

    const element = document.getElementById(id),

        text = element.innerText.split("");

    element.innerText = "";
    
    text.forEach(letter => {

        const span = document.createElement("span");

        span.className = "letter";

        span.innerText = letter;

        element.appendChild(span);
        
    });

}

enhance("channel-link1")
enhance("channel-link2")
enhance("channel-link3")
enhance("channel-link4")
enhance("channel-link5")
enhance("channel-link6")
enhance("channel-link7")
enhance("channel-link8")
enhance("channel-link9")