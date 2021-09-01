import codingQuizImg from "../assets/Coding-quiz2.png"
import recipeScraperImg from "../assets/recipe-scraper.png"
import budgetTrackerImg from "../assets/budget-tracker2.png"
import techBlogImg from "../assets/tech-blog2.png"
import perfPoochImg from "../assets/perfpooch3.png"
import workDaySchedulerImg from "../assets/work-day-scheduler.png"
import "../styles/project.css"

export default {

projects: [
    {
        title: "Flying Budget Tracker", 
        para:
            "Here I created a budget tracker that allows you to track your spending even offline",
        img: budgetTrackerImg,
        url: "https://emmattner.github.io/flying-budget-tracker/",
    },
    {
        title: "Tech Blog",
        para:
            "This is a tech blog that the user can use to post and edit their thoughts", 
        img: techBlogImg,
        url: "https://emmas-tech-blog.herokuapp.com/",
    },
    {
        title: "Perfect Pooch Finder",
        para:
            "The Perfect pooch finder allows the user to enter details about themselves to generate an appropriate breed match to the users lifestyle", 
        img: perfPoochImg,
            
        url: "https://perfect-pooch-finder.herokuapp.com/",
    },
    {
        title: "Recipe Scraper", 
        para:
            "The Recipe Scraper is used to scrape recipes from your favourite websites allowing the user to store them in their own personal online cookbook", 
        img: recipeScraperImg,
        
        url: "https://recipe-scraper-peg.herokuapp.com/",
    },
    {
        title: "Coding Quiz",
        para:
            "Here I created a Javascript fundamentals quiz that has a countdown clock",
    
        img: codingQuizImg,

        url: "https://emmattner.github.io/coding-quiz/",
    },
    {
        title: "Work Day Scheduler",
        para:
            "This work day scheduler allows the user to schedule their day to day lives with a 9-5pm online scheduler",
        img: workDaySchedulerImg,
    
        url: "https://emmattner.github.io/Work-Day-Scheduler/",
    },
]
}