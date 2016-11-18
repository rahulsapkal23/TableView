var items = [{
    "label": {
        text: "born on 14 March 1965 is an Indian film actor, director and producer. Through his career in "
    },
    "image": {
        image: "http://www.showbizbites.com/wp-content/uploads/2013/07/Aamir-Khan-Showbiz-Bites.jpg",
        url: "https://en.wikipedia.org/wiki/Aamir_Khan"
    },

    "template": "image_title"
}, {
    "label": {
        text: "born 28 September 1982 is an Indian actor and producer"
    },
    "image": {
        image: "http://customerkart.com/wp-content/uploads/2016/01/ranbir-kapoor-wallpapers-300x215.jpg",

        url: "https://en.wikipedia.org/wiki/Ranbir_Kapoor"
    },

    "template": "image_title"
}, {
    "label": {
        text: "born on 14 March 1965 is an Indian film actor, director and producer. Through his career in "
    },
    "image": {
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Salmanrampwalk.png/220px-Salmanrampwalk.png",
        url: "https://en.wikipedia.org/wiki/Salman_Khan"
    },

    "template": "image_title"

}];
$.dynamicListView.sections[0].setItems(items, {
    animated: "false"
});



//$.aamir.image = data.image[0];

function openWebViewUrl(url) {
    var webview = Titanium.UI.createWebView({
        top: 70,
        "url": url
    });

    var button = Titanium.UI.createButton({
        title: 'Back',
        top: 10,
        width: 100,
        height: 50
    });
    button.addEventListener('click', function(e) {
        window.close();
    });

    var window = Titanium.UI.createWindow({
        backgroundColor: "white",
        top: 10
    });

    window.add(webview);
    window.add(button);

    window.open({
        modal: true
    });
}

function WebView(e) {
    var url;

    if (Ti.Platform.osname == "android") {
        url = e.section.items[e.itemIndex].image.url;
    } else {
        url = e.source.url;
    }

    openWebViewUrl(url);
}
$.win.open();
