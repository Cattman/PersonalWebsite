export class SidebarSelectItem {
    public label: string;
    public value: string;
    public sidebarSelectItems: SidebarSelectItem[];

    constructor(label: string, value: string, sidebarSelectItems: SidebarSelectItem[]) {
        this.label = label;
        this.value = value;
        this.sidebarSelectItems = sidebarSelectItems;
    }
}
