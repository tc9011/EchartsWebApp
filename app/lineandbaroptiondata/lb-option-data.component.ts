import {Component, Input} from "@angular/core";
@Component({
    moduleId: module.id,
    selector: 'lb-option-data',
    templateUrl: 'lb-option-data.component.html',
    styleUrls: ['lb-option-data.component.css']
})

export class LbOptionDataComponent{
    option: any;
    constructor(private myechartsService: MyEchartsService){}

    getOption() {
        let option = {
            title: this.option.title,
        };
    }

}