const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const app = express();

app.use(
    cors({
        origin: "*",
        exposedHeaders: 'Authorization'
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.get("/user", (req, res) => {

    res.send({
        
        name: "Jassi",
        Student_ID_Number:'S987654',
        Grade:'11th Grade',
        Contact_Number:'8766263593',
        Email_Address:'jaswant2111058@akgec.ac.in',
        Guardian:'Virendra Kushwaha',
        Parent_Contact:'7898454xcv',
        Address:'Ghaziabad',

    })
})
app.get("/notification", (req, res) => {

    const data = ["Attention parents! The end-of-term exams are approaching. Ensure your child is prepared and review the exam schedule available on the app.",
                    "As the seasons change, please ensure your child is dressed appropriately and carries necessary items like water bottles. Health is wealth!",
                "A friendly reminder about upcoming fee payments. Access the app for convenient online payment options and ensure a hassle-free transaction.",
                "We're planning a fun and educational class outing. Kindly check the app for the permission slip and details. We look forward to an enjoyable day!",
                "Your child's safety is our priority. We will be conducting emergency drills this 02/01/2024. Familiarize yourself with the safety procedures through the app."]
    res.send(data)
})

app.get("/reports",(req,res)=>{
    res.download("./JASWANT-RESUME.pdf")
})



app.listen(process.env.PORT || '5000', () => {
    console.log(`Server started at port ${process.env.PORT || '5000'}`);
});