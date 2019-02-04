const formNode = document.getElementById('form-example');
const nameNode = document.getElementById('name');
const zipCodeNode = document.getElementById('zip-code');
//alternatively can select nodes as formNode.elements.name.value where .name corresponds
// to an attribute in the nodes element name="name">

formNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const applicant = {
        name: nameNode.value,
        zipCode: zipCodeNode.value,
        
    };
    console.log(applicant);

});