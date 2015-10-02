var myImage = document.querySelector('img');

myImage.onclick = function() {
    // var mySrc = myImage.getAttribute('src');
    var mySrc = $("img").attr("src");
    if(mySrc == 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/a.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){

	var myName = prompt('Please enter your name.');
	localStorage.setItem('name',myName);
	myHeading.innerHTML = 'Xuan is cool,' + myName;
};

if (!localStorage.getItem('name')){

	setUserName();
}
else{

	var storedName = localStorage.getItem('name');
	myHeading.innerHTML = 'Xuan is cool,' + storedName;
}

myButton.onclick = function () {
	// if (storedName == 'xuan')
	// {	
	// $.get("test.html",function(data){$("p").html(data); alert("success")});
	// }
	// setUserName();
	// $("h1").html("hello world");
	// $("#content")
	// .find("h3")
	// .eq(2)
	// 	.html("new text for third h3")
	// 	.end()
	// .eq(0)
	// 	.html("lalalal for first");
	// $("#content h3:first").html("this one is the first!").clone().appendTo("#content");
	// $("#content h3:first").empty();
	// $("<p>This is a new p</p>").appendTo("#content");
	// $("<a/>",{
	// 	html:"This is link",
	// 	"class":"new",
	// 	href:"foo.html"
	// }).appendTo("#content");
	var myItems = [];
	var myList = $("#content");
	for (var i = 0; i < 100; i++)
	{
		myItems.push("<li>item" + i + "</li>");
	}
	myList.append(myItems.join(""));
	console.dir(myItems.join(""));
};

// window.onload = function(){

// 	alert("welcome");
// }
// $( document ).ready(function(){

	// $( "a" ).click(function(event){

	// 	event.preventDefault();
	// 	alert("no visiting");
	// });

// });

// $( document ).ready(function(){

// $( "a" ).addClass(" test ");

// });

$( "a" ).addClass(" test ");

$("p a").removeClass( "test" );

$("p a").click(function(event){

	event.preventDefault();
	$(this).hide(1200);
	// $.get("test.html",function(data){
	// 	console.dir($(this));
	// 	$(this)[0].html(data);
	// 	// alert("done");
	// });
	// var t = $.get("test.html");
	// console.dir(t);
	// console.dir(event);
	// console.dir($(this));
	// $(this).hide("slow");
	// $(this).html("DAM");
	// console.dir($(this));
});

// $.get("test.html",myCallBack);

// console.dir($("a").attr("href"));

$("a").attr({
	title: "all are same",
	href:"test.html"
});

$("#b1").one("click",function(){
	console.log("first time!");
	$(this).click(function(){console.log("you have clicked!")});
});

$("#b2").hover(function(){
	$(this).html("Magic happened");
},function(){
	$(this).html("b2");
});

$("#b2").on("click",function(e){
	e.preventDefault();
	console.log(e);
	console.log(e.originalEvent);
})

$( "p" ).on( "click", {
    foo: "bar"
}, function( event ) {
    console.log( "event data: " + event.data.foo + " (should be 'bar')" );
});












