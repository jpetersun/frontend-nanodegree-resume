var name = "James T Peterson";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["HTML", "CSS", "JavaScript"];

var bio = {
	"name": "James Thomas Michael Peterson",
	"role": "Front-End Developer",
	"contacts": {
		"cellPhone": "951 - 972 - 6767",
		"email": "boondami@gmail.com",
		"address": "43031 Camino Caruna",
	},
	"pictureURL": "images/me.jpg",
	"welcomeMessage": "Hello I am James and I am a web developer.",
	"skills": skills
};

$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts);
$("#main").append(bio.pictureURL);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.skills);

bio.city = "Temecula";
bio["email"] = "boondami@gmail.com";

$("#main").append(bio.city);
$("#main").append(bio.email);

var work = {};
work.employer = "Vince's Spaghetti Express";
work.position = "Kitchen member";
work.years = "0.5";
work.location = "Temecula";

var education = {};
education["name"] = "Palomar College";
education["years"] = "2014-2015";
education["location"] = "San Marcos";

$("#main").append(work["position"]);
$("#main").append(education.name);

var education = {
	"schools": [
		{
			"name": "Palomar College",
			"city": "San Marcos",
			"degree": "General Education"
		},
		{
			"name": "Udacity",
			"city": "Mountain View",
			"degree": "Front-End Developer"
		}
	]
}