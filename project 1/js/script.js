// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById("loadQuote").addEventListener("click", printQuote, false);



var quotes = [
    {quote:'You can do anything, but not everything.', source:'David Allen', citation: "litemind.com"},
    {quote:'Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.', source:'Antoine de Saint-Exupéry', citation: "litemind.com"},
    {quote:'The richest man is not he who has the most, but he who needs the least.', source:'Unknown Author', citation: "litemind.com"},
    {quote:' You miss 100 percent of the shots you never take.', source:'Wayne Gretzky', citation: "litemind.com"},
    {quote:'Courage is not the absence of fear, but rather the judgement that something else is more important than fear.', source:'Ambrose Redmoon', citation: "litemind.com"},
    {quote:'You must be the change you wish to see in the world.', source:'Gandhi', citation: "litemind.com"},
    {quote:'When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.', source:'Lin-Chi', citation: "litemind.com"},
    {quote:'What the world needs is more geniuses with humility, there are so few of us left.', source:'Oscar Levant', citation: "litemind.com"},
    {quote:'To the man who only has a hammer, everything he encounters begins to look like a nail.', source:'Abraham Maslow', citation: 'litemind.com'},
    {quote:'We are what we repeatedly do; excellence, then, is not an act but a habit.', source:'Aristotle', citation: "litemind.com"},
    {quote:'A wise man gets more use from his enemies than a fool from his friends.', source:'Baltasar Gracian', citation: 'litemind.com'},
    {quote:'Do not seek to follow in the footsteps of the men of old; seek what they sought.', source:'Basho', citation: 'litemind.com'},
    {quote:'Everyone is a genius at least once a year. The real geniuses simply have their bright ideas closer together.', source:'Georg Christoph Lichtenberg', citation: 'litemind.com'},
    



];
function getRandomQuote(){
return(Math.floor(Math.random()*(quotes.length)-1))
}
function printQuote(){
randomQuote=getRandomQuote();
 
var displayQuotes= "<p class='quote'>"+ quotes[randomQuote].quote+"</p>"+"<p class ='source'>"+quotes[randomQuote].source+"</p>"+"<span class='citation'>"+quotes[randomQuote].citation+"</span>";
    
document.getElementById("quote-box").innerHTML=displayQuotes;
}
