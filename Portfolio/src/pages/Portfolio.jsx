// TODO
// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
const buttonStyling = "rounded-md bg-dark-gray py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
// TODO PERSONAL: Use Github api to display last commit, and last commit message
const portfolioList = [
    {
        id: 1,
        title: 'Unreal Engine',
        description: 'Here is my projects using UE4 and their public status',
        pictureURL: 'src/assets/portfolioPictures/UnrealEngine.PNG',
        deployedUrl: "" ,
        repoUrl: "https://github.com/Kalink52/FableClone",

    },
    {
        id: 2,
        title: 'Tech Blog',
        description: 'An attempt at making a tech blog application with authentication',
        pictureURL: 'src/assets/portfolioPictures/Dashboard.PNG',
        deployedUrl: "https://tech-blog-kisx.onrender.com/" ,
        repoUrl: "https://github.com/Kalink52/tech-blog",

    },
    {
        id: 3,
        title: 'Green Acres',
        description: 'TODO REDO ALL HTML AND CSS and Render from my account NOT WORKING AS DATABASE IS DEPRECATED',
        pictureURL: 'src/assets/portfolioPictures/GreenAcres.PNG',
        deployedUrl: "https://green-acres.onrender.com" ,
        repoUrl: "https://github.com/Kalink52/Green-Acres",
    },
    {
        id: 4,
        title: 'Tune Tracker',
        description: 'My first collaboration attempt just to  figure out gitflow, and introducing using Apis,',
        pictureURL: 'src/assets/portfolioPictures/TuneTracker.PNG',
        deployedUrl: "https://github.com/Kalink52/tune_tracker/deployments/github-pages" ,
        repoUrl: "https://github.com/Kalink52/tune_tracker",
    },
    {
        id: 5,
        title: 'Book Buddies',
        description: 'TODO: GET TO SHOW ON RENDER. A project a colleague was working on where they needed me to redo their SQL database. I had to work with them to figure out the type of relationships their database needed and assisted in incorporating it into the database using Postgres. ',
        pictureURL: 'src/assets/portfolioPictures/BookBuddies.PNG',
        deployedUrl: "https://book-buddies.onrender.com" ,
        repoUrl: "https://github.com/Kalink52/book-buddies/tree/main",
    },
    {
        id: 6,
        title: 'Unreal Engine',
        description: 'Here is my projects using UE4 and their public status',
        pictureURL: 'src/assets/portfolioPictures/UnrealEngine.PNG',
        deployedUrl: "" ,
        repoUrl: "",
    },
  ]

function Portfolio () {

const portfolioCardList = portfolioList.map((portfolio) => {
    return(
<Card key={portfolio.id} className="mt-5 w-96 ">
    <CardBody>
        <Typography color="blue-gray" className="relative h-56">
        <img
            src={portfolio.pictureURL}
            alt="card-image"
        />
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        {portfolio.title}
        </Typography>
        <Typography>
        {portfolio.description}
        </Typography>
    </CardBody>
    <CardFooter className="pt-0">
        <a href={portfolio.deployedUrl} className={`mr-2 ${buttonStyling}`}>Deployed</a>
        <a href={portfolio.repoUrl} className={`ml-2 ${buttonStyling}`}>GitHub</a>
    </CardFooter>
</Card>)
})



    return(
        <>
<div className="grid grid-flow-row grid-cols-2 grid-rows-3 py-10  gap-10 px-20 justify-items-center">
    {portfolioCardList}
</div>
    

        </>
    )
}

export default Portfolio