declare const _default: (locale: any) => {
    label: any;
    align: string;
    cols: ({
        type: string;
        key: string;
        gap: number;
        $on: {
            beforeChange: (_obj: any, values: any) => boolean;
        };
        options: {
            icon: string;
            value: string;
        }[];
        padding: string;
    } | {
        type: string;
        key: string;
        gap: number;
        $on: {
            beforeChange: (_obj: any, values: any) => boolean;
        };
        options: {
            icon: string;
            value: string;
        }[];
        padding?: undefined;
    })[];
    type: string;
    compact: boolean;
    $layout: (config: any) => any;
};
export default _default;
