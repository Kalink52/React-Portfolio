// TODO
// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
const buttonStyling = "rounded-md bg-dark-gray py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 

const portfolioList = [
    {
        id: 1,
        title: 'Unreal Engine',
        description: 'Here is my projects using UE4 and their public status',
        pictureURL: 'src/assets/portfolioPictures/UnrealEngine.PNG',
        deployedUrl: "" ,
        repoUrl: "",

    },
    {
        id: 2,
        title: 'Tech Blog',
        description: 'TODO',
        pictureURL: 'src/assets/portfolioPictures/Dashboard.PNG',
        deployedUrl: "https://tech-blog-kisx.onrender.com/" ,
        repoUrl: "https://github.com/Kalink52/tech-blog",

    },
    {
        id: 3,
        title: 'Green Acres',
        description: 'Here is my projects using UE4 and their public status',
        pictureURL: 'src/assets/portfolioPictures/GreenAcres.PNG',
        deployedUrl: "https://project2-hivl.onrender.com/" ,
        repoUrl: "https://github.com/Kalink52/Green-Acres",
    },
    {
        id: 4,
        title: 'Unreal Engine',
        description: 'Here is my projects using UE4 and their public status',
        pictureURL: 'src/assets/portfolioPictures/UnrealEngine.PNG',
        deployedUrl: "" ,
        repoUrl: "",
    },
    {
        id: 5,
        title: 'Unreal Engine',
        description: 'Here is my projects using UE4 and their public status',
        pictureURL: 'src/assets/portfolioPictures/UnrealEngine.PNG',
        deployedUrl: "" ,
        repoUrl: "",
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