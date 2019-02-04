const formNode = document.getElementById('form-example');
const nameNode = document.getElementById('name');
const zipCodeNode = document.getElementById('zip-code');
const peanutRangeNode = document.getElementById('peanuts');
const allergicNumberNode = document.getElementById('allergic-number');
const yesNode = document.getElementById('yes');
const noNode = document.getElementById('no');

peanutRangeNode.addEventListener('change', function() {
    allergicNumberNode.textContent = peanutRangeNode.value;
    
});
yesNode.addEventListener('change', function() {
    console.log('yes', yesNode.checked)
});
noNode.addEventListener('change', function() {
    console.log('no', noNode.checked)
});

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