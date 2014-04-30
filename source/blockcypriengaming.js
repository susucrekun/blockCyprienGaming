var youtubeID = "UCWMYFDuCcvkmPiOf1RP_IKQ";
var youtubeName = "cypriengaming";

function muteStuff() {
var relatedVideos = document.querySelectorAll(".stat.attribution > [data-ytid='"+youtubeID+"']")
for (var i = relatedVideos.length - 1; i >= 0; i--) {
relatedVideos[i].parentNode.parentNode.parentNode.remove();
};

var shelfStuff = document.querySelectorAll("h2 > a[data-ytid='"+youtubeID+"']");
for (var i = shelfStuff.length - 1; i >= 0; i--) {
shelfStuff[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
};

var shelfGridItems = document.querySelectorAll(".yt-shelf-grid-item a[data-ytid='"+youtubeID+"']");
for (var i = shelfGridItems.length - 1; i >= 0; i--) {
shelfGridItems[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
};

var thumbnailList = document.querySelectorAll("ul.yt-lockup-meta-info a[data-ytid='"+youtubeID+"']");
for (var i = thumbnailList.length - 1; i >= 0; i--) {
thumbnailList[i].parentNode.parentNode.parentNode.parentNode.parentNode.remove();
};

var videosLinks = document.querySelectorAll("a[href*='/watch?v=']");
for (var i = videosLinks.length - 1; i >= 0; i--) {
if(videosLinks[i].title.toLowerCase().match(youtubeName) != null) {
videosLinks[i].parentNode.parentNode.parentNode.remove();
}
};
}

document.body.addEventListener("DOMNodeInserted", muteStuff);
muteStuff();