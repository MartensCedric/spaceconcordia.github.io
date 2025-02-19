/**
 * This script is meant to make the parent <li> tags in the navbar 
 * which are expandable, also behave as links
 */
document.addEventListener("DOMContentLoaded", function() {
	var lists = document.querySelectorAll('li.dropdown')
	lists[0].classList.add('about-btn-js');
	lists[1].classList.add('spacecraft-btn-js');
	lists[2].classList.add('rocketry-btn-js');
	lists[3].classList.add('projects-btn-js');
	lists[4].classList.add('contact-btn-js');

	// get nav buttons
	var aboutBtn 		= document.querySelectorAll('.about-btn-js')[0];
	var spaceCraftBtn 	= document.querySelectorAll('.spacecraft-btn-js')[0];
	var rocketryBtn 	= document.querySelectorAll('.rocketry-btn-js')[0];
	var projectsBtn 	= document.querySelectorAll('.projects-btn-js')[0];
	var contactBtn 		= document.querySelectorAll('.contact-btn-js')[0];

	// event handler functions for navigation
	var navigateToAbout = function () {
		// check if we are a page page that is 
		window.location.href = (Util.isCurrentPageIndex()) ? 'index.html' : '../../index.html';
	}

	var navigateToSpaceCraft = function() {
		window.location.href = (Util.isCurrentPageIndex()) ? 'src/html/spacecraft.html' : 'spacecraft.html';
	}

	var navigateToRocketry = function() {
		window.location.href = (Util.isCurrentPageIndex()) ? 'src/html/rocketry.html' : 'rocketry.html';
	}

	var navigateToProjects = function() {
		window.location.href = (Util.isCurrentPageIndex()) ? 'src/html/projects.html' : 'projects.html';
	}

	var navigateToContact = function() {
		window.location.href = (Util.isCurrentPageIndex()) ? 'src/html/contact.html' : 'contact.html';
	}

	// bind listeners to dropdown button hybrids
	aboutBtn.onclick 		= navigateToAbout;
	spaceCraftBtn.onclick 	= navigateToSpaceCraft;
	rocketryBtn.onclick 	= navigateToRocketry;
	projectsBtn.onclick 	= navigateToProjects;
	contactBtn.onclick 		= navigateToContact;
});
