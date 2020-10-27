function save()
{
    var surname = document.getElementById("surname").value;
    var name = document.getElementById("name").value;
    var id = document.getElementById("studentId").value;
    var email = document.getElementById("contactEmail").value;
    var note = document.getElementById("note").value;

    var object = {surname,name,id,email,note};
    console.log(object)

    localStorage.setItem('contactInfo', JSON.stringify(object));
}