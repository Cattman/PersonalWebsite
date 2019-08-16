import {SelectItem} from 'primeng/primeng';

export class TopbarSelectItem implements SelectItem {

    public label: string;
    public value: string;
    public icon: string;

    constructor(label: string, value: string, icon: string) {
        this.label = label;
        this.value = value;
        this.icon = icon;
    }

}
