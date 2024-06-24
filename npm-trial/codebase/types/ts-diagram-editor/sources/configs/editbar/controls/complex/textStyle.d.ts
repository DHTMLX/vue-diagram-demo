declare const _default: (locale: any) => {
    label: any;
    rows: ({
        cols: ({
            type: string;
            key: string;
            width: string;
            padding: string;
            readOnly: boolean;
            options: {
                id: number;
                value: string;
            }[];
            inputType?: undefined;
            value?: undefined;
            min?: undefined;
            icon?: undefined;
        } | {
            type: string;
            key: string;
            inputType: string;
            value: number;
            min: number;
            icon: string;
            width: string;
            padding?: undefined;
            readOnly?: undefined;
            options?: undefined;
        })[];
    } | {
        cols: ({
            type: string;
            key: string;
            css: string;
            width: string;
            padding: string;
            value?: undefined;
            icon?: undefined;
        } | {
            type: string;
            key: string;
            value: string;
            icon: string;
            width: string;
            padding: string;
            css?: undefined;
        } | {
            type: string;
            key: string;
            value: string;
            icon: string;
            width: string;
            css?: undefined;
            padding?: undefined;
        })[];
    })[];
    type: string;
    compact: boolean;
    $layout: (config: any) => any;
};
export default _default;
