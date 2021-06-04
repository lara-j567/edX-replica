const express = require("express");

const app = express();

const PORT = 8000;

const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({
    extended: true
}));


app.use(express.urlencoded());

app.use(express.json());

const user = [

    {

        name:"",
        username:"",
        email:"",
        password:""
    }
]

app.get('/api/Programs' , (req ,res)=>{

     const programArray = [
        {
            img1: "../resources/programs/program_img_1",
            img2: "../resources/programs/program_img_over__1",
            name: "Computer Science for Web Programming",
            institute: "HarvardX",
            type: "Professional Certificate (2 courses)"
        },
        {
            img1: "../resources/programs/program_img_2",
            img2: "../resources/programs/program_img_over__2",
            name: "Computer Science for Artificial Intelligence",
            institute: "HarvardX",
            type: "Professional Certificate (2 courses)"
        },
        {
            img1: "../resources/programs/program_img_3",
            img2: "../resources/programs/program_img_over__3",
            name: "../Computer Science for Game Development",
            institute: "HarvardX",
            type: "Professional Certificate (2 courses)"
        },
        {
            img1: "../resources/programs/program_img_4",
            img2: "../resources/programs/program_img_over__4",
            name: "../Computer Science for Mobile Apps",
            institute: "HarvardX",
            type: "Professional Certificate (2 courses)"
        },
        {
            img1: "../resources/programs/program_img_5",
            img2: "../resources/programs/program_img_over__5",
            name: "CS50's AP Computer Science Principles",
            institute: "HarvardX",
            type: "XSeries (2 courses)"
        },
        {
            img1: "../resources/programs/program_img_6",
            img2: "../resources/programs/program_img_over__6",
            name: "Computer Science Fundamentals",
            institute: "NYUx",
            type: "MicroBachelors (3 courses)"
        },
        {
            img1: "../resources/programs/program_img_7",
            img2: "../resources/programs/program_img_over__7",
            name: "Computer Science Essentials for Software Development",
            institute: "PennX",
            type: "Professional Certificate (4 courses)"
        },
        {
            img1: "../resources/programs/program_img_8",
            img2: "../resources/programs/program_img_over__8",
            name: "Fundamentals Computer Science",
            institute: "IITBombayX",
            type: "XSeries (5 courses)"
        },
        {
            img1: "../resources/programs/program_img_9",
            img2: "../resources/programs/program_img_over__9",
            name: "Master's Degree in Computer Science ",
            institute: "UTAustinX",
            type: "Master's Degree Program"
        },
        {
            img1: "../resources/programs/program_img_10",
            img2: "../resources/programs/program_img_over__10",
            name: "Computational Thinking using Python",
            institute: "MITx",
            type: "XSeries (2 courses)"
        },
        {
            img1: "../resources/programs/program_img_11",
            img2: "../resources/programs/program_img_over__11",
            name: "Introduction to Python Programming",
            institute: "GTx",
            type: "Professional Certificate (4 courses)"
        },
        {
            img1: "../resources/programs/program_img_12",
            img2: "../resources/programs/program_img_over__12",
            name: "Introduction to Java Programming",
            institute: "UC3Mx",
            type: "Professional Certificate (3 courses)"
        },
    
    ]

    res.json(programArray);

})


app.get('/api/Courses' , (req ,res)=>{

     const Coursearray = [
        {
            img1: "../resources/courses/courses_img1.png",
            img2: "resources/courses/courses_img_over_1",
            name: "CS50's Introduction to Computer Science",
            institute: "HavardX",
            type: "Course",
            language: "English"
            
        },
        {
            img1: "../resources/logos/logo.png",
            img2: "../resources/courses/courses_img_over_2",
            name: "Computer Science 101",
            institute: "StanfordOnline",
            type: "Course",
            language: "English"
        },
        {
            img1: "../resources/courses/courses_img3",
            img2: "../resources/courses/courses_img_over_3",
            name: "CS50's Computer Science for Business Professionals",
            institute: "HavardX",
            type: "Course",
            language: "English"
        },
        {
            img1: "../resources/courses/courses_img4",
            img2: "../resources/courses/courses_img_over_4",
            name: "Introduction to Computer Science and Programming",
            institute: "TokyoTechX",
            type: "Course",
            language: "English"
            
        },
        {
            img1: "../resources/courses/courses_img5",
            img2: "../resources/courses/courses_img_over_5",
            name: "プログラミング...",
            institute: "TokyoTechX",
            type: "Course",
            language: "Japanese"
        },
        {
            img1: "../resources/courses/courses_img7",
            img2: "../resources/courses/courses_img_over_7",
            name: "Introduction to Computer Science and Programming",
            institute: "MITx",
            type: "Course",
            language: "English"
        },
        {
            img1: "../resources/courses/courses_img6",
            img2: "../resources/courses/courses_img_over_6",
            name: "AP Computer Science A:Java Programming",
            institute: "PurdueX",
            type: "Course",
            language: "English"
        },
        {
            img1: "../resources/courses/courses_img8",
            img2: "../resources/courses/courses_img_over_8",
            name: "CS for all:Introduction to Computer Science and Python Programm... ",
            institute: "HarveyMuddX",
            type: "Course",
            language: "English"
        },
        {
            img1: "../resources/courses/courses_img9",
            img2: "../resources/courses/courses_img_over_9",
            name: "AP Computer Science A:Java Programming Classes and Objects",
            institute: "PurdueX",
            type: "Course",
            language: "English"
        },
        {
            img1: "../resources/courses/courses_img10",
            img2: "../resources/courses/courses_img_over_10",
            name: "AP Computer Science A:Java Programming Polymorphism and Ad...",
            institute: "PurdueX",
            type: "Course",
            language: "English"
        },
        {
            img1: "../resources/courses/courses_img11",
            img2: "../resources/courses/courses_img_over_11",
            name: "AP Computer Science A:Java Programming Classes Loops and Data Structs...",
            institute: "PurdueX",
            type: "Course",
            language: "English"
        },
        {
            img1: "../resources/courses/courses_img12",
            img2: "../resources/courses/courses_img_over_12",
            name: "理论计算机科学基础 | Introduction to Theoretical Compute...",
            institute: "PekingX",
            type: "Course",
            language: "English"
        },
        {
            img1: "../resources/courses/courses_img13",
            img2: "../resources/courses/courses_img_over_13",
            name: "CS50's AP® Computer Science Principles",
            institute: "HavardX",
            type: "Course",
            language: "English"
            
        },
        {
            img1: "../resources/courses/courses_img14",
            img2: "../resources/courses/courses_img_over_14",
            name: "Preparing for the AP* Computer Science A Exam — Part 2",
            institute: "CooperUnion",
            type: "Course",
            language: "English"
        },
        {
            img1: "../resources/courses/courses_img15",
            img2: "../resources/courses/courses_img_over_15",
            name: "Preparing for the AP* Computer Science A Exam — Part 1",
            institute: "CooperUnion",
            type: "Course",
            language: "English"
        },
        {
            img1: "../resources/courses/courses_img16",
            img2: "../resources/courses/courses_img_over_16",
            name: "MyCS: Computer Science for Beginners",
            institute: "HarveyMuddX",
            type: "Course",
            language: "English"
        },
        {
            img1: "../resources/courses/courses_img17",
            img2: "../resources/courses/courses_img_over_17",
            name: "CS50 for Lawyers",
            institute: "HavardX",
            type: "Course",
            language: "English"
        },
        {
            img1: "../resources/courses/courses_img18",
            img2: "../resources/courses/courses_img_over_18",
            name: "Algorithms: Design and Analysis, Part 1",
            institute: "StanfordOnline",
            type: "Course",
            language: "English"
        },
        {
            img1: "../resources/courses/courses_im19",
            img2: "../resources/courses/courses_img_over_19",
            name: "Introduction to Java Programming: Writing Good Code",
            institute: "UC3Mx",
            type: "Course",
            language: "English"
        },
        {
            img1: "../resources/courses/courses_img20",
            img2: "../resources/courses/courses_img_over_20",
            name: "Algorithm Design and Analysis",
            institute: "PennX",
            type: "Course",
            language: "English"
        },
    ]

    res.json(Coursearray);

})

app.post ('/signIn' , (request , response)=>{

    

    console.log(request.body.data);
   // request.body.data.push(user);
    user.push(request.body.data)
    console.log(user)


})
app.listen(PORT , ()=> console.log(`Server started on port ${PORT}`));
