angular.module('portfolio', [])
    .controller("ProjectsController", ProjectsController);

// ProjectsController.$inject = ["$http"];
function ProjectsController() {
    let vm = this;
    vm.projects = [{
        name: "KAIZEN",
        html_url: "https://github.com/vladyslavkuliani/kaizen",
        description: 'Staff manipulation application for project managers and team leads that tells the most efficient way of assigning people to tasks within the project. (Ruby on Rails, additional gems for email notifications and gitHub login).' +
            '\nCompleted algorithmic part of the project, data base structure, creative ways to send binding arrays of data to server.',
        heroku_url: "https://radiant-springs-91429.herokuapp.com/"
    }, {
        name: "SF-Nights",
        html_url: "https://github.com/vladyslavkuliani/SF-Nights",
        description: "Application that allows you to browse night dance clubs around you and let you comment and rate places just for tonight only. New day - new rating - new comments. (MERN Stack, Google API, Yelp API)",
        heroku_url: "https://sfnights-demo.herokuapp.com/"
    }, {
        name: "Vagabond",
        html_url: "https://github.com/vladyslavkuliani/vagabond-team1",
        description: 'Social network where people can explore and share their impressions about different cities around the world(Ruby on Rails).',
        heroku_url: "https://pacific-sands-22246.herokuapp.com"
    }, {
        name: "What To DO",
        html_url: "https://github.com/vladyslavkuliani/what-to-do",
        description: 'Social network where users post different "what to dos", asking their friends(followers) for an advice of what to do in specific city at specific time. (MEN stack app)',
        heroku_url: "https://ancient-caverns-49115.herokuapp.com/"
    }, {
        name: "Racing Game",
        html_url: "https://github.com/vladyslavkuliani/Racing-Game",
        description: "2D Racing game for two players. The first player to collect 5 flags of his own color is a winner! (canvas manipulations using JavaScript)",
        heroku_url: "https://gentle-ravine-24957.herokuapp.com/"
    }, {
        name: "Tic-Tac-Toe",
        html_url: "https://github.com/vladyslavkuliani/tic-tac-toe",
        description: "Basic Tic-Tac-Toe game using JavaScript and jQuery library.",
        heroku_url: "https://mysterious-gorge-83717.herokuapp.com/"
    }];
}