"use strict";

document.addEventListener("DOMContentLoaded", function() {
    let overlays = document.getElementById("modal");
    let form = document.getElementById("form-contents");
    let body = document.querySelector("body"); 
    document.getElementById('confirm-modal').addEventListener("click", function() {

        // フォーム内容の取得・表示
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let category = document.getElementById("category");
        let contents = document.getElementById("contents");

        let textName = document.createTextNode(`名前：${name.value}`);
        let textEmail = document.createTextNode(`メールアドレス：${email.value}`);
        let textCategory = document.createTextNode(`件名：${category.value}`);
        let textContents = document.createTextNode(`内容：${contents.value}`);

        let pName = document.createElement("p");
        let pEmail = document.createElement("p");
        let pCategory = document.createElement("p");
        let pContents = document.createElement("p");

        pName.appendChild(textName);
        pEmail.appendChild(textEmail);
        pCategory.appendChild(textCategory);
        pContents.appendChild(textContents);
        // フォームで改行したところを改行
        pContents.style.whiteSpace = "pre-wrap";

        form.appendChild(pName);
        form.appendChild(pEmail);
        form.appendChild(pCategory);
        form.appendChild(pContents);
        // ここまでフォーム送信内容確認





        body.classList.add('scroll-forbid');
        overlays.classList.add("show");
    })

    // ボタンを押した時モーダルを閉じる
    let cancel = document.getElementById("form-confirm-cancel");
    closeModal(cancel);
    let submit = document.getElementById("submit-btn");
    closeModal(submit);

    function closeModal(elem) {
        elem.addEventListener("click", function() {
            form.innerHTML = ""
            overlays.classList.remove('show')
            body.classList.remove("scroll-forbid")
        })
    };
})