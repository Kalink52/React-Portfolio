// TODO
// WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
const buttonStyling =
  "rounded-md bg-dark-gray py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none";
// TODO PERSONAL: Use Github api to display last commit, and last commit message
const portfolioList = [
  {
    title: "Isabelles bead shop",
    description: "Here is an e-commerce site I assisted in making for a client",
    pictureURL: "/assets/portfolioPictures/Isabelle's Bead Shop.PNG",
    deployedUrl: "https://isabellesbeadshop.onrender.com/",
    repoUrl: "https://github.com/hannahschwen/isabelles-bead-shop",
  },
  {
    title: "Destiny Maker",
    description:
      "An to make a baulders gate character Creator. This is a work in progress the characters were more complicated than I thought. ",
    pictureURL: "/assets/portfolioPictures/DestinyMaker.PNG",
    // deployedUrl: "https://isabellesbeadshop.onrender.com/",
    repoUrl: "https://github.com/Kalink52/DestinyMaker",
  },
  {
    title: "Tech Blog",
    description: "A tech blog application with authentication",
    pictureURL: "/assets/portfolioPictures/Dashboard.PNG",
    deployedUrl: "https://tech-blog-kisx.onrender.com/",
    repoUrl: "https://github.com/Kalink52/tech-blog",
  },
  {
    title: "Green Acres",
    description:
      "An application using sequelize SQL and handlebars, TODO REDO ALL HTML AND CSS and Render from my account NOT WORKING AS DATABASE IS DEPRECATED",
    pictureURL: "/assets/portfolioPictures/GreenAcres.PNG",
    repoUrl: "https://github.com/Kalink52/Green-Acres",
  },
  {
    title: "Tune Tracker",
    description:
      "My first collaboration attempt just to figure out gitflow, and introducing using APIs.",
    pictureURL: "/assets/portfolioPictures/TuneTracker.PNG",
    deployedUrl:
      "https://github.com/Kalink52/tune_tracker/deployments/github-pages",
    repoUrl: "https://github.com/Kalink52/tune_tracker",
  },
  {
    title: "Book Buddies",
    description:
      "A project a colleague was working on where they needed me to redo their SQL database. I had to work with them to figure out the type of relationships their database needed and assisted in incorporating it into the database using Postgres. TODO: GET TO SHOW ON RENDER, and waiting for them to finish the front end. Most likely an abandoned project",
    pictureURL: "/assets/portfolioPictures/BookBuddies.PNG",
    repoUrl: "https://github.com/Kalink52/book-buddies/tree/main",
  },
];

function Portfolio() {
  const portfolioCardList = portfolioList.map((portfolio, index) => {
    return (
      <Card key={index} className="mt-5 w-96 ">
        <CardBody>
          <Typography
            color="blue-gray"
            className="flex justify-center relative h-56"
          >
            <img
              className="object-cover h-56 justify-center"
              src={portfolio.pictureURL}
              alt="card-image"
            />
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {portfolio.title}
          </Typography>
          <Typography>{portfolio.description}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          {portfolio.deployedUrl && (
            <a href={portfolio.deployedUrl} className={`mr-2 ${buttonStyling}`}>
              Deployed
            </a>
          )}
          <a href={portfolio.repoUrl} className={`ml-2 ${buttonStyling}`}>
            GitHub
          </a>
        </CardFooter>
      </Card>
    );
  });

  return (
    <>
      <h1 className="flex justify-center text-2xl ">
        Note Deployed links are using render which takes about a few minutes to
        load.
      </h1>
      <div className="grid grid-flow-row grid-cols-1 auto-rows-auto py-10 gap-10 mx-5 justify-items-center lg:grid-cols-2 lg:mx-28 2xl:grid-cols-3 2xl:mx-16">
        {portfolioCardList}
      </div>
    </>
  );
}

export default Portfolio;
