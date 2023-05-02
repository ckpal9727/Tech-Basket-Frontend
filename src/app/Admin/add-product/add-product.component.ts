import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserActionServiceService } from 'src/app/user-action-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private formBuilder: FormBuilder,private userActionService:UserActionServiceService) { }
  myForm = new FormGroup({
    productName: new FormControl('', ),
    productDescription: new FormControl('',),
    Price: new FormControl('', ),
    Quantity: new FormControl('', ),
    CategoryId: new FormControl('', ),
    Image: new FormControl('img', ),
  });
  AddProducts(){
    console.log(this.myForm.value);
    this.userActionService.addProductAdmin(this.myForm.value).subscribe(e=>{
      console.log(e);
     })
  }
}
