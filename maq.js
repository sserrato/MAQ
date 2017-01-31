var array = [1,2,3,4,5]
var array = ["presed", "dismissed"]

var textArea =
["Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.\n" ,

"You have power over your mind - not outside events. Realize this, and you will find strength.\n" ,

"Very little is needed to make a happy life; it is all within yourself, in your way of thinking.\n" ,

"It is not death that a man should fear, but he should fear never beginning to live.\n" ,

"Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.\n" ,

"The universe is change; our life is what our thoughts make it.\n" ,

"When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love.\n" ,

"The soul becomes dyed with the color of its thoughts.\n" ,

"Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart.\n" ,

"If it is not right do not do it; if it is not true do not say it.\n", "The best revenge is to be unlike him who performed the injury.",
"If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.",
"Reject your sense of injury and the injury itself disappears.",
"The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are.",
"Today I shall be meeting with interference, ingratitude, insolence, disloyalty, ill-will, and selfishness – all of them due to the offenders’ ignorance of what is good or evil.",
"Perfection of character is this: to live each day as if it were your last, without frenzy, without apathy, without pretence.",
"Think of yourself as dead. You have lived your life. Now, take what's left and live it properly. What doesn't transmit light creates its own darkness.",
"Don't go on discussing what a good person should be. Just be one.",
"Life is neither good or evil, but only a place for good and evil.",
"The happiness of your life depends upon the quality of your thoughts: guard accordingly, and take care that you entertain no notions unsuitable to virtue and reasonable nature." ]

maq_ar = textArea[0].split("\n")

function selectQuote(textArea){
  console.log(textArea[Math.round(Math.random()*(textArea.length-1))])
}

window.onload = function(){
  var sourceLength = textArea.length;
  var randomNumber = Math.floor(Math.random()*sourceLength);
  var serveQuote = textArea[randomNumber];
  var timeAnimation = 500;

  var quoteContainer = $('#quoteContainer');
  quoteContainer.fadeOut(timeAnimation, function(){
    quoteContainer.html('');
    quoteContainer.append('<p>'+serveQuote+'</p>')
    quoteContainer.fadeIn(timeAnimation);
  });

}
