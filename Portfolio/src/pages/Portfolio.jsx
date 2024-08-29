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

  const portfolioList = [
    {
        id: 1,
        title: 'Unreal Engine',
        description: 'Here is my projects using UE4 and their public status',
        pictureURL: 'src/assets/portfolioPictures/UnrealEngine.PNG'
    },
    {
        id: 2,
        title: 'Unreal Engine',
        description: 'Here is my projects using UE4 and their public status',
        pictureURL: 'src/assets/portfolioPictures/UnrealEngine.PNG'
    },
    {
        id: 3,
        title: 'Unreal Engine',
        description: 'Here is my projects using UE4 and their public status',
        pictureURL: 'src/assets/portfolioPictures/UnrealEngine.PNG'
    },
    {
        id: 4,
        title: 'Unreal Engine',
        description: 'Here is my projects using UE4 and their public status',
        pictureURL: 'src/assets/portfolioPictures/UnrealEngine.PNG'
    },
    {
        id: 5,
        title: 'Unreal Engine',
        description: 'Here is my projects using UE4 and their public status',
        pictureURL: 'src/assets/portfolioPictures/UnrealEngine.PNG'
    },
    {
        id: 6,
        title: 'Unreal Engine',
        description: 'Here is my projects using UE4 and their public status',
        pictureURL: 'src/assets/portfolioPictures/UnrealEngine.PNG'
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
    <Button>Read More</Button>
    </CardFooter>
</Card>)
})



    return(
        <>
<container className="grid grid-flow-row grid-cols-2 grid-rows-3 py-10  gap-10 px-20 justify-items-center">
    {portfolioCardList}
</container>
    

        </>
    )
}

export default Portfolio