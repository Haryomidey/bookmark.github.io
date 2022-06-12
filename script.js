
const button = document.querySelector("button");

button.addEventListener("click", render);

function render(e) {

    var siteName = document.getElementById("site-name").value;
    var siteURL = document.getElementById("site-url").value

    var bookmark = {
        name: siteName,
        url: siteURL
    }


    /*
    localStorage.setItem("test", "Hello World");
    console.log(localStorage.getItem("test"));

    */

    if (localStorage.getItem("bookmark") == null) {
        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
    } else {
        var bookmarks = JSON.parse(localStorage.getItem("bookmarks"))
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
    }
    e.preventDefault();
}

function fetchBookmark() {
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"))
    console.log(bookmarks)
}
