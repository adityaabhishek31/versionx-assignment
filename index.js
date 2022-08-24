// Set current address as permanent address
const addressFunction = (checkbox) => {
    if (checkbox.checked==true) {
        document.getElementById("secaddress1").value = document.getElementById("paddress1").value;

        document.getElementById("secaddress2").value = document.getElementById("paddress2").value;
        document.getElementById("seczip").value =document.getElementById("pzip").value;
    } else {
        document.getElementById("secaddress1").value = "";
        document.getElementById("secaddress2").value = "";
        document.getElementById("seczip").value = "";
    }
    };

    // To get the form data
    let form = document.getElementsByClassName("myform");
    form[0].addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form[0]);
    console.log([...formData]);       

    /*
    To make HTTP Request
    https://httpbin.org/post - POST Endpoint example
    */
    fetch('https://httpbin.org/post', {
        method : "POST",
        body : formData
     }
    )
    .then((res)=>{
        console.log(res.json());
    })
    .catch((err)=>{
        console.log(err);
    });
});