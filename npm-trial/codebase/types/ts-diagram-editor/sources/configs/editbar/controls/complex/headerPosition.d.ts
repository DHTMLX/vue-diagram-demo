declare const _default: (locale: any) => {
    label: any;
    rows: {
        type: string;
        key: string;
        $on: {
            beforeChange: (_obj: any, values: any) => boolean;
        };
        gap: number;
        options: {
            icon: string;
            value: string;
        }[];
    }[];
    type: string;
    compact: boolean;
    $layout: (config: any) => any;
};
export default _default;
