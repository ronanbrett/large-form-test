import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

function generateField(id: number) {

  if(id % 5 == 0) {
    return {
      key: `id-${id}`,
      type: 'input',
      templateOptions: {
        label: 'Input',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
      },
      expressionProperties: {
        'templateOptions.disabled': (model: any, formState: any, field: FormlyFieldConfig) => {
          // access to the main model can be through `this.model` or `formState` or `model
          return !(model[`id-${id - 2}`] && model[`id-${id - 1}`])
        },
      }
    }; 
  }

  return {
    key: `id-${id}`,
    type: 'input',
    templateOptions: {
      label: 'Input',
      placeholder: 'Placeholder',
      description: 'Description',
      required: true,
    },
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  fields: FormlyFieldConfig[];
  form: FormGroup = new FormGroup({});
  title = 'form-test';

  model: any = {};

  constructor(){
    const arr = [];
    for (let index = 0; index < 150; index++) {
      arr.push(generateField(index)); 
    }

    this.fields = arr;
  }

  // fields: FormlyFieldConfig[] = [
  //   {
  //     key: 'Input',
  //     type: 'input',
  //     templateOptions: {
  //       label: 'Input',
  //       placeholder: 'Placeholder',
  //       description: 'Description',
  //       required: true,
  //     },
  //   },
  // ];


}
