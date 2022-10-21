import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'actLabelAvatar'
})
export class actLabelAvatarPipe implements PipeTransform {

    constructor() { }

    transform(label: string): any {
        var avatarArr= label.split(" ");
        var resultLabel: string = ""; 

        if(avatarArr.length > 0){
            avatarArr.forEach(element => {
                resultLabel = resultLabel + element.substring(0,1);
            });
        }
        else if(avatarArr.length == 0){
            resultLabel = label.substring(0,1);
        }
        return resultLabel.toUpperCase();
    }
}