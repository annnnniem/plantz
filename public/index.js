$( document ).ready(function() {

var $app_id;
var date = new Date();
var time = Math.round(date.getTime() / 1000);
console.log(date, time)

var ayyy = function(){
	alert("ayyyyyyy");
};

$("#idForm").submit(function(event){
	event.preventDefault();
	$app_id = $('#appId').val();
	console.log($app_id);
});

$("#idDropdown").change(function(){
	event.preventDefault();
	$app_id = $(this).val();
	console.log($app_id);
});

$("#boot_lead").click(function(){
	Intercom('boot', {app_id: $app_id});
	console.log("lead booted")
});

$('#shutdown').click(function(){
	Intercom('shutdown');
	if ($("body").hasClass('snakeplant'))
		$("body").removeClass('snakeplant');
	if ($("body").hasClass('tradescantia'))
		$("body").removeClass('tradescantia');
	if ($("body").hasClass('ficuselastica'))
		$("body").removeClass('ficuselastica');
});

// can i DRY this out? 
$('#sansevieria_button').click(function(){
	var settings = {
		app_id: $app_id,
		email: "sansevieria@example.com",
		name: "Sansevieria Plant",
		user_id: "plant1"
	}
	$("body").addClass('snakeplant');
	Intercom('boot', settings);
});

$('#tradescantia_button').click(function(){
	var settings = {
		app_id: $app_id,
		email: "tradescantia@example.com",
		name: "Tradescantia Plant",
		user_id: "plant2"
	}
	$("body").addClass('tradescantia')
	Intercom('boot', settings);
});

$('#ficus_elastica_button').click(function(){
	var settings = {
		app_id: $app_id,
		email: "ficus_elastica@example.com",
		name: "Ficus Elastica Plant",
		user_id: "plant3"
	}
	$("body").addClass('ficuselastica')
	Intercom('boot', settings);
});

$('#boot_random_user').click(function(){
	if ($app_id == null) {
		alert("put in an app id");
	}
	else {
	var settings = {
		app_id: $app_id,
		email: faker.internet.exampleEmail(),
		name: faker.name.findName(),
		user_id: faker.random.alphaNumeric()
	}
	Intercom('boot', settings);
}
});

$('#segment_identify_user').click(function(){
	   !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
  		analytics.load("jdqeEX1rsEsl5UmjSVbVjILjGf1f7TeK");
  		analytics.page();
 }}();

	analytics.identify(faker.random.alphaNumeric, {
	  name: 'Hi segment',
	  email: 'segment@example.com'
});

});


$('#update_button').click(function(){
	Intercom('update');
});

$('#updateWithTime_button').click(function(){
	Intercom('update', {"current_time_at": time});
});

$('#invited_friend_button').click(function(){
	Intercom('trackEvent', 'invited-friend');
});

$('#track_custom_event_button').click(function(){
	event.preventDefault();
	var event_name = $("#customEventField").val();
	Intercom('trackEvent', event_name);
	console.log(event_name);
});

$('#hide_messenger').click(function(){
	Intercom('hide');
	console.log("hidden");
	Intercom('hide');
});

$('#show_messenger').click(function(){
	Intercom('show');
	console.log("shown");
});

$('#show_messages').click(function(){
	Intercom('showMessages');
});

$('#show_new_message').click(function(){
	Intercom('showNewMessage');
});

$('#show_new_message_with_content').click(function(){
	Intercom('showNewMessage', "I put this content in already for you!");
});

// Ask joel about these 2

Intercom('onHide', function(){
	ayyy();
});

Intercom('onShow', function (){
	ayyy();
});

// api stuff
$('#apibutton').click(function(){
	var request = new XMLHttpRequest();

	request.open('GET', 'https://api.intercom.io/conversations/16234821419', true);
	request.setRequestHeader('Authorization', 'Bearer ' + 'dG9rOmI3NTFjMjE1X2NhMThfNGEwOF9iNGEwXzgzZDMzMTQ3YTU0YzoxOjA=')
	request.setRequestHeader('Access-Control-Allow-Origin', '*');
	request.onload = function() {
		var data = JSON.parse(this.response);
		data.forEach(movie => {
			console.log(movie.title);
		});
	}
	request.send();
})
	
});



