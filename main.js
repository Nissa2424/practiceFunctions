class formValidator {
	constructor(form, fields) {         
	this.form = form;  //initalize the methods so I have access to them in our class 
	this.fields = fields; //initalize the methods so I have access to them in our class 
}      //in another method I can just say this.form & it will be associate to this formValidator 

initalize() {
	//
	console.log('form', this.form)
	console.log('fields', this.field)
}

//To access our form & fields from the DOM, that's just a Query 
//Outside the class 
const form = document.querySelector('.form')



}



