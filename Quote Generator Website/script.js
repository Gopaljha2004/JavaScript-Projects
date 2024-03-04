const quote_url = "https://api.quotable.io/random"
const randomQuotes = document.querySelector(".quotes");
const author = document.querySelector(".author");


async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data)
    randomQuotes.innerText = data.content;
    author.innerText = data.author;
}
getQuote(quote_url)


// Twitter Sharing 
const tweetShare = () =>{
    window.open("https://twitter.com/intent/tweet?text=" + randomQuotes.innerText + " --- by " + author.innerText ,"Tweet Window" , "width=600 , height=400"  );

}








