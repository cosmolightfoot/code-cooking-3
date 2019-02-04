const formNode = document.getElementById('form-example');
const nameNode = document.getElementById('name');
const zipCodeNode = document.getElementById('zip-code');
const peanutRangeNode = document.getElementById('peanuts');
const allergicNumberNode = document.getElementById('allergic-number');
const yesNode = document.getElementById('yes');
const noNode = document.getElementById('no');
const peanutNodeTwo = document.getElementById('peanuts-two');
console.log('test', peanutNodeTwo);
peanutRangeNode.addEventListener('change', function() {
    allergicNumberNode.textContent = peanutRangeNode.value;
});
yesNode.addEventListener('change', function() {
    allergicNumberNode.textContent = '1';
    peanutRangeNode.value = 1;
    peanutRangeNode.min = 1;
    peanutRangeNode.disabled = false;
    peanutNodeTwo.required = yesNode.checked;
    console.log('yes', yesNode);
});
noNode.addEventListener('change', function() {
    allergicNumberNode.textContent = 0;
    peanutRangeNode.value = 0;
    peanutRangeNode.value = 0;
    peanutRangeNode.disabled = true;
    console.log('no', noNode);
    peanutNodeTwo.required = noNode.checked;
});
peanutRangeNode.addEventListener('change', function() {
    allergicNumberNode.textContent = peanutRangeNode.value;
});

//alternatively can select nodes as formNode.elements.name.value where .name corresponds
// to an attribute in the nodes element name="name">

formNode.addEventListener('submit', function(event) {
    event.preventDefault();
    const applicant = {
        name: nameNode.value,
        zipCode: zipCodeNode.value,
        peanuts: 
    };
    console.log(applicant);

});