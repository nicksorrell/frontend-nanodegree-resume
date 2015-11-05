var bio = {
      "name" : "Nick Sorrell",
      "role" : "Front-end Developer",
      "contacts" : {
        "mobile": "123-456-7891",
        "email": "nicksorrell@gmail.com",
        "github": "https://github.com/nicksorrell",
        "twitter": "@nicksorrell",
        "location": "Newport News, VA"
      },
      "welcomeMessage": "Front-end dev, multimedia dev, and so much more!",
      "skills": [
        ["HTML", 15], ["CSS", 15], ["JavaScript", 10], ["Git", 5], ["Photoshop", 5], ["Flash", 5], ["SCORM 2004", 5], ["Node", 3], ["Express", 3], ["Socket.io", 2]
      ],
      "biopic": "img/me.jpg",
      "display" : function(){
        $('#header').prepend(HTMLheaderName.replace("%data%", this.name));
        $('#name').after(HTMLheaderRole.replace("%data%", this.role));
        $('#topContacts').append(HTMLmobile.replace("%data%", this.contacts.mobile));
        $('#topContacts').append(HTMLemail.replace("%data%", this.contacts.email));
        $('#topContacts').append(HTMLgithub.replace("%data%", this.contacts.github));
        $('#topContacts').append(HTMLtwitter.replace("%data%", this.contacts.twitter));
        $('#topContacts').append(HTMLlocation.replace("%data%", this.contacts.location));
        $('#footerContacts').append(HTMLmobile.replace("%data%", this.contacts.mobile));
        $('#footerContacts').append(HTMLemail.replace("%data%", this.contacts.email));
        $('#footerContacts').append(HTMLgithub.replace("%data%", this.contacts.github));
        $('#footerContacts').append(HTMLtwitter.replace("%data%", this.contacts.twitter));
        $('#footerContacts').append(HTMLlocation.replace("%data%", this.contacts.location));
        $('#header').append(HTMLbioPic.replace("%data%", this.biopic));
        $('#header').append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));
        if(this.skills.length > 0){
            $('#header').append(HTMLskillsStart);
            for(var skill in this.skills){
              var skillEntry = HTMLskills.replace('%data%', this.skills[skill][0]);
              skillEntry = skillEntry.replace('%data2%', this.skills[skill][1] + "+ yrs. exp.")
              $('#skills').append(skillEntry);
            }
        }
      }
    },

    work = {
      "jobs" : [
          {
            "employer" : "JANUS Research Group",
            "title" : "Senior Software Architect",
            "location" : "Newport News, VA",
            "dates": "2015-Present",
            "description": "See below, except now with sweet promotion!"
          },
          {
            "employer" : "JANUS Research Group",
            "title" : "Managed Systems Engineer",
            "location" : "Newport News, VA",
            "dates": "2013-2015",
            "description": "Ongoing work performed on location at Joint Base Langley-Eustis in support of U.S. Army TRADOC Capabilities Manager - The Army Distributed Learning Program (TCM-TADLP). Responsibilities include provision of diagnostic, advisement, research, and technical support services for various U.S. Army distance learning products to address technical concerns and ensure optimal end-user experiences."
          },
          {
            "employer" : "Planning and Learning Technologies, Inc.",
            "title" : "Development Lead",
            "location" : "Newport News, VA",
            "dates": "2011-2013",
            "description": "Work performed across multiple projects under the DLETP and CAPDL contract vehicles; clients include U.S. Army Judge Advocate General Corps, and Defense Language Institute. Responsibilities include management of development staff efforts; multimedia development, SCORM programming, web programming, and job aid development; and collaboration with project manager, instructional systems designers and subject matter experts to develop SCORM® and Section 508-compliant interactive multimedia training and simulation solutions."
          }
        ],
      "display" : function(){
        for(var job in this.jobs){
          var _job = $(HTMLworkStart);
          _job.append(HTMLworkEmployer.replace('%data%', this.jobs[job].employer) + HTMLworkTitle.replace('%data%', this.jobs[job].title));
          _job.append(HTMLworkDates.replace('%data%', this.jobs[job].location));
          _job.append(HTMLworkLocation.replace('%data%', this.jobs[job].dates));
          _job.append(HTMLworkDescription.replace('%data%', this.jobs[job].description));
          $('#workExperience').append(_job);
        }
      }
    },

    projects = {
      "projects" : [
        {
          "title" : "Interactive Resume",
          "dates" : "2015",
          "description" : "Interactive Resume for my Udacity FED Nanodegree",
          "images" : [
            "img/resume.jpg"
          ]
        },
        {
          "title" : "Portfolio Mockup",
          "dates" : "2015",
          "description" : "Mockup of my portfolio for P1 of my Udacity FED Nanodegree",
          "images" : [
            "img/portfolio.jpg"
          ]
        },
        {
          "title" : "About Me",
          "dates" : "2015",
          "description" : "About me page for P0 of my Udacity FED Nanodegree",
          "images" : [
            "img/about.jpg"
          ]
        },
      ],
      "display" : function(){
        for(var project in this.projects){
          var _project = $(HTMLprojectStart);
          _project.append(HTMLprojectTitle.replace("%data%", this.projects[project].title));
          _project.append(HTMLprojectDates.replace("%data%", this.projects[project].dates));
          _project.append(HTMLprojectDescription.replace("%data%", this.projects[project].description));
          for(var img in this.projects[project].images){
            _project.append(HTMLprojectImage.replace("%data%", this.projects[project].images[img]));
          }
          $('#projectsContainer').append(_project);
        }
      }
    },

    education = {
      "schools": [
        {
          "name" : "Virginia Commonwealth University",
          "location" : "Richmond, VA",
          "degree" : "MS",
          "majors" : ["Mass Communications"],
          "dates" : 2011,
          "url" : "http://vcu.edu"
        },
        {
          "name" : "Christoper Newport University",
          "location" : "Newport News, VA",
          "degree" : "BS",
          "majors" : ["Business Administration"],
          "dates" : 2008,
          "url" : "http://cnu.edu"
        },
        {
          "name" : "George C. Marshall High School",
          "location" : "Falls Church, VA",
          "degree" : "HS",
          "majors" : ["N/A"],
          "dates" : 2004,
          "url" : "http://www.fcps.edu/marshallhs"
        }
      ],
      "onlineCourses" : [
        {
          "title" : "Front-end Development Nanodegree",
          "school" : "Udacity",
          "date" : 2016,
          "url" : "http://udacity.com"
        }
      ],
      "display" : function(){
        for(var school in this.schools){
          var _school = $(HTMLschoolStart);
          _school.append(HTMLschoolName.replace("%data%", this.schools[school].name) + HTMLschoolDegree.replace("%data%", this.schools[school].degree));
          _school.append(HTMLschoolDates.replace("%data%", this.schools[school].dates));
          _school.append(HTMLschoolLocation.replace("%data%", this.schools[school].location));
          for(var major in this.schools[school].majors){
              _school.append(HTMLschoolMajor.replace("%data%", this.schools[school].majors[major]));
          }
          $('#education').append(_school);
        }

        if(this.onlineCourses.length > 0){
          $('#education').append(HTMLonlineClasses);
          for(var course in this.onlineCourses){
            var _course = $(HTMLschoolStart);
            _course.append(HTMLonlineTitle.replace("%data%", this.onlineCourses[course].title) + HTMLonlineSchool.replace("%data%", this.onlineCourses[course].school));
            _course.append(HTMLonlineDates.replace("%data%", this.onlineCourses[course].date));
            _course.append(HTMLonlineURL.replace("%data%", this.onlineCourses[course].url));
            $('#education').append(_course);
          }
        }
      }
    };

function inName(){
  var name = $('#name').html().trim().split(" ");
  name[0] = name[0][0].toUpperCase() + name[0].slice(1).toLowerCase();
  name[1] = name[1].toUpperCase();
  return name[0] + " " + name[1];
}

bio.display();
work.display();
projects.display();
education.display();

/*
* Don't need the internationalize button from the course for the project
$('#main').append(internationalizeButton);
*/

$('#mapDiv').append(googleMap);
