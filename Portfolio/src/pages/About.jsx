// TODO
// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default
// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them

const paragraphWithPictureList = [ 
    {
    id: 1,
    imageUrl: "src/assets/aboutPictures/selfieP.jpg",
    paragraph: "In the digital cosmos where algorithms dance and virtual worlds thrive, Micah Cox emerges as a titan of the code, a master of the joystick, and a virtuoso of melodies. With a keyboard as their wand, Micah crafts intricate digital realms where lines of code orchestrate symphonies of logic and innovation. They navigate gaming landscapes with the finesse of a seasoned strategist, conquering quests and challenges with unwavering determination."
    },
    {
    id: 2,
    imageUrl: "src/assets/aboutPictures/selfieP2.png",
    paragraph: "Beyond the pixels and polygons, Micah finds solace in the harmonies of music, where strings and keys become their playground. From soaring guitar riffs to delicate piano melodies, they wield music as a canvas for expression, creating compositions that resonate deeply with their soul."
    },
    {
    id: 3,
    imageUrl: "src/assets/aboutPictures/selfieP3.png",
    paragraph: "In the epic saga of Micah Cox, the worlds of coding, gaming, and music converge, forming a tapestry of creativity and passion that knows no bounds. With each line of code, each gaming triumph, and each musical masterpiece, Micah leaves an indelible mark on the digital landscape, inspiring all who encounter their legendary exploits."
    },
]


function About () {
    const contentList = paragraphWithPictureList.map((content)=> {
        if (content.id % 2) {
        return(
            <>
    <img
      className="h-96 w-96 rounded-full object-cover object-center"
      src={content.imageUrl}
      alt=""
    />
    <p className="col-span-2">
   {content.paragraph}
    </p>
            </>
                )
    }else {
        return(
        <>
<p className="col-span-2">
{content.paragraph}
</p>
<img
  className="h-96 w-96 rounded-full object-cover object-center"
  src={content.imageUrl}
  alt=""
/>
        </>
        )
    }
})

    return(
        <>
        <container className="grid grid-flow-row grid-cols-3 grid-rows-3 py-10 gap-10 px-20 justify-items-center items-center">
            {contentList}
       </container>
        </>
    )
}

export default About