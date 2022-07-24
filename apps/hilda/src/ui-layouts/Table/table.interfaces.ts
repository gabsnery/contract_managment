export interface Column {
    internalName: string,
    label: string,
}
export interface Data {
    [key: string]: string;
}
export interface Table {
    columns: Column[],
    data: Data[],
    hasCheckBox?:boolean,
    onCheckBoxChange?:void,
    onDelete?:void,
    onEdit?:void,
}