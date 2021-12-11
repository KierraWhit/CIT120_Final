var responseDiv = document.body.querySelector(".items");
document.body.querySelector(".butt").addEventListener("click", function () {
    var textValue = document.body.querySelector(".input").value;
    var textValuePass = document.body.querySelector(".inputPass").value;
    if (textValue!=="cool" ){
        responseDiv.innerHTML="Wrong Username"
    }else if (textValuePass !== "password"){
        responseDiv.innerHTML = "Wrong Password"
    }else if(textValue !=="cool" && textValuePass !== "password") {
        responseDiv.innerHTML = "Wrong Password and Wrong Username"
    }else{
        createNav();
        createWrapper();
        navigate("Grade View");
        document.getElementById("inputText").style.display="none";
    }
})
var pages = ['Grade View', 'Add Grade'];
var listPage = [{Name: "", Grade: ""}]
var grades = document.createElement("h4");

function renderList() {
    grades.innerHTML = "";
    for (var i = 0; i < listPage.length; i++) {
        var ele = document.createElement("div");
        ele.innerHTML = listPage[i].Name +" " + listPage [i].Grade;
        grades.appendChild(ele);
    }
}

function createNav() {
    var nav = document.createElement("nav");
    createButton(pages[0]);
    createButton(pages[1]);
    document.body.appendChild(nav);
    function createButton(pg) {
        var butt = document.createElement("button");
        butt.innerHTML = pg;
        butt.addEventListener("click", function () {
            navigate(pg);
            });
            nav.appendChild(butt);
        }
    }

function createWrapper() {
    var wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);
}

function navigate(pg) {
    if (pg === "Grade View") {
        GradeView();
    } else if (pg === "Add Grade") {
        AddGrade();
    }}
function GradeView() {
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "Grades";
    wrapper.appendChild(header);
    wrapper.appendChild(grades);
    renderList();

}
function AddGrade() {
    var wrapper = document.body.querySelector(".wrapper");
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "Add Grade";
    wrapper.appendChild(header);
    var typeText = document.createElement('h3');
    wrapper.appendChild(typeText);
    var importance = document.createElement("input");
    importance.setAttribute('type', 'text');
    importance.setAttribute('placeholder', 'Name')
    var importance1 = document.createElement("input");
    importance1.setAttribute('type', 'text');
    importance1.setAttribute('placeholder', 'Grade')
    wrapper.appendChild(importance);
    wrapper.appendChild(importance1);
    var button = document.createElement("button");
    button.innerHTML = "Enter";
    button.addEventListener("click", function (){
        if ((/^[A-Za-z]+$/.test(importance.value)) === true){
            if (isNaN(Number(importance1.value)) === false && importance1.value >=0 && importance1.value <=100){
                listPage.push({Name: "Student: " + importance.value, Grade: "Grades: " + importance1.value})
                renderList();
                navigate("Grade View");}
            else if(isNaN(Number(importance1.value))===true){
                typeText.innerHTML ="Enter a number in the Grade Box"}
            else if(importance1.value < 0 || importance1.value > 100){
                typeText.innerHTML = "The number must be between 0 and 100"}
            else{
                typeText.innerHTML = "Type only letters in students box"
            }
        }
    })
    wrapper.appendChild(button);
}
