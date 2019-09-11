const getFotoGithub = function (username) {
    var url = 'https://api.github.com/users/' + username;
    var avatar = document.querySelector("buscar-avatar");
    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let ajax = JSON.parse(this.responseText);  
            const buscAvatar = ajax.avatar_url;
            document.getElementById("github-avatar").src = buscAvatar;
        }
    };

    ajax.open('GET', url, false);
    ajax.send();

    var data = ajax.responseText;
};