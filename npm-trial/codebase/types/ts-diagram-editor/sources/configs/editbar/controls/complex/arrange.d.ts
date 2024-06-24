declare const _default: (locale: any) => {
    label: any;
    css: string;
    rows: ({
        cols: ({
            type: string;
            key: string;
            inputType: string;
            value: number;
            width: string;
            padding: string;
            icon: string;
        } | {
            type: string;
            key: string;
            inputType: string;
            value: number;
            width: string;
            icon: string;
            padding?: undefined;
        })[];
        type?: undefined;
        key?: undefined;
        inputType?: undefined;
        value?: undefined;
        min?: undefined;
        max?: undefined;
        icon?: undefined;
    } | {
        cols: ({
            type: string;
            key: string;
            inputType: string;
            value: number;
            min: number;
            width: string;
            padding: string;
            icon: string;
        } | {
            type: string;
            key: string;
            inputType: string;
            value: number;
            min: number;
            width: string;
            icon: string;
            padding?: undefined;
        })[];
        type?: undefined;
        key?: undefined;
        inputType?: undefined;
        value?: undefined;
        min?: undefined;
        max?: undefined;
        icon?: undefined;
    } | {
        type: string;
        key: string;
        inputType: string;
        value: number;
        min: number;
        max: number;
        icon: string;
        cols?: undefined;
    })[];
    type: string;
    compact: boolean;
    $layout: (config: any) => any;
};
export default _default;
