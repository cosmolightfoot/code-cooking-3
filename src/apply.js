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
    peanutRangeNode.value = 1;
});
noNode.addEventListener('change', function() {
    peanutRangeNode.value = 0;
});
peanutRangeNode.addEventListener('change', function() {
    allergicNumberNode.textContent = peanutRangeNode.value;
});

//alternatively can select nodes as formNode.elements.name.value where .name corresponds
// to an attribute in the nodes element name="name">

formNode.addEventListener('submit', function(event) {
    event.preventDefault();
    // if(yesNode)
    const applicant = {
        name: nameNode.value,
        zipCode: zipCodeNode.value,
        
    };
    console.log(applicant);

});