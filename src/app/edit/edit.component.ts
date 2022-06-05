import { Component, OnInit } from '@angular/core';

import {FormBuilder,FormControl ,FormGroup ,Validators} from '@angular/forms'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})





export class EditComponent implements OnInit {
   
  productUpdateForm: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.productUpdateForm = this.fb.group({
      product_name: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(30),Validators.pattern('[a-zA-Z ]*')]],
      product_category:  ['',[Validators.required,Validators.minLength(4),Validators.maxLength(30),Validators.pattern('[a-zA-Z ]*')]],
      mfd: [''],
      exp: [''],
      mrp: ['',[Validators.required,Validators.minLength(1),Validators.maxLength(6),Validators.pattern('[0-9]*')]]


    })

  }


 productUpdated(){
   console.log(this.productUpdateForm.value)
   alert("Product is edited succesfully")
 }




  
 get pname(){
  
  return this.productUpdateForm.get('product_name')
  
}

get mrp(){
  
  return this.productUpdateForm.get('mrp')
  
}

get exp(){
  
  return this.productUpdateForm.get('exp')
  
}

get mfd(){
  
  return this.productUpdateForm.get('mfd')
  
}



get pcat(){
  
  return this.productUpdateForm.get('product_category')
  
}

}


