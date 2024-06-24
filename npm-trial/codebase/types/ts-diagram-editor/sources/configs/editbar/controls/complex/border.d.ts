declare const _default: (locale: any) => {
    label: any;
    align: string;
    cols: ({
        type: string;
        key: string;
        css: string;
        padding: string;
        width: string;
        readOnly?: undefined;
        itemHeight?: undefined;
        options?: undefined;
        template?: undefined;
        inputType?: undefined;
        value?: undefined;
        min?: undefined;
    } | {
        type: string;
        key: string;
        padding: string;
        readOnly: boolean;
        itemHeight: number;
        options: string[];
        template: ({ id }: {
            id: any;
        }) => string;
        css?: undefined;
        width?: undefined;
        inputType?: undefined;
        value?: undefined;
        min?: undefined;
    } | {
        type: string;
        key: string;
        inputType: string;
        value: number;
        min: number;
        width: number;
        css?: undefined;
        padding?: undefined;
        readOnly?: undefined;
        itemHeight?: undefined;
        options?: undefined;
        template?: undefined;
    })[];
    type: string;
    compact: boolean;
    $layout: (config: any) => any;
};
export default _default;
