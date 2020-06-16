export interface Weather{
    name?:string;
    cod?:number;
    icon?:string;
    description?:string;
    temp?:string;
    main?:string;
    minMaxTemp?:MinMaxInterdace;
    date?:string;
}

interface MinMaxInterdace{
    date?:number;
    day?:number;
    month?:number;
    min?:number;
    max?:number;
}