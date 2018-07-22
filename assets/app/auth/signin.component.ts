import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})

export class SigninComponent {
    myform: FormGroup;
    
    ngOnInit(){
        this.myform = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }

    onSubmit(){
        if (this.myform.valid) {
            console.log(this.myform.value);
            this.myform.reset();    
        }
        
    }
}