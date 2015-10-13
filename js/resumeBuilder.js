var work = {
	"jobs": [
		{
			"employer": "Millennium Financial Management",
			"title": "Tax preparer Assistant",
			"location": "Temecula, CA, US",
			"years": "2010-2013",
			"description": "Preperation of personal and corporate taxes."
		},
		{
			"employer": "McDonald's",
			"title": "Kitchen Crew member, Maintenance",
			"location": "Temecula, CA, US",
			"years": "2013-2015",
			"description": "Preparation of food and keeping facility clean and orderly."
		},
		{
			"employer": "Vince's Spaghetti Express",
			"title": "Food preparer",
			"location": "Temecula, CA, US",
			"years": "2015-Present",
			"description": "Prepartion of food and keeping facility clean and orderly."
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Portfolio Site",
			"dates": "8/17/15-9/6/15",
			"description": "Built a website using HTML, CSS, and the Bootstrap framework.",
			"images": [
					"images/portfolio_site.jpg"
			]
		},
		{
			"title": "Game",
			"dates": "9/10/15-9/25/15",
			"description": "Made this sweet game.",
			"images": [
					"images/game.jpg"
			]
		}
	]
}

var bio = {
	"name": "James Peterson",
	"role": "Front-End Developer",
	"contacts": {
		"mobile": "(123) 456 - 7890",
		"email": "jpeterson903@yahoo.com",
		"github": "github.com/jpetersun",
		"twitter": "https://twitter.com/JPetersonDev",
		"location": "Temecula, CA, US"
	},
	"welcomeMessage": "I am James and I am a Web Developer",
	"bioPic": "images/me.jpg",
	"skills": [
		"HTML", "CSS", "JavaScript"
	]
}

var education = {
	"schools": [
		{
			"name": "Palomar College",
			"location": "San Marcos, CA, US",
			"degree": "GE",
			"majors": "CS",
			"dates": "2015",
			"url": "http://www2.palomar.edu/"
		}
	],
	"onlineCourses": [
		{
			"title": "Responsive Web Design Fundamentals",
			"school": "Udacity",
			"dates": "2015",
			"url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
		},
		{
			"title": "Calculus One",
			"school": "Coursera",
			"dates": "2015",
			"url": "https://www.coursera.org/learn/calculus1"
		}
	]
}

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

work.display();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);


		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedName, formattedDegree, formattedDates, formattedLocation, formattedMajor);
	}
	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedTitle, formattedSchool, formattedDates, formattedURL);
	}
}

education.display();

bio.display = function() {
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	//$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	//$("#topContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	//$("#topContacts").append(formattedGithub);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").prepend(formattedImage);
	$("#topContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
	$("#footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

	var name = "James Peterson";
	var role = "Web Developer";

	var formattedName = HTMLheaderName.replace("%data%", name);
	var formattedRole = HTMLheaderRole.replace("%data%", role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

		if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
	}
}

bio.display();

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
    name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}

$("#mapDiv").append(googleMap);

//$("#main").append(internationalizeButton);



