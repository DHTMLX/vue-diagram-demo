declare const _default: (locale: any) => {
    label: any;
    rows: ({
        type: string;
        compact: boolean;
        $properties: {
            enable: {
                key: string[];
            };
            fill: {
                key: string[];
            };
            height: {
                key: string[];
            };
            position?: undefined;
            fontSize?: undefined;
            lineHeight?: undefined;
            fontColor?: undefined;
            fontWeight?: undefined;
            fontStyle?: undefined;
            textAlign?: undefined;
            textVerticalAlign?: undefined;
        };
    } | {
        type: string;
        compact: boolean;
        $properties: {
            position: {
                key: string[];
            };
            enable?: undefined;
            fill?: undefined;
            height?: undefined;
            fontSize?: undefined;
            lineHeight?: undefined;
            fontColor?: undefined;
            fontWeight?: undefined;
            fontStyle?: undefined;
            textAlign?: undefined;
            textVerticalAlign?: undefined;
        };
    } | {
        type: string;
        compact: boolean;
        $properties: {
            fontSize: {
                key: string[];
            };
            lineHeight: {
                key: string[];
            };
            fontColor: {
                key: string[];
            };
            fontWeight: {
                key: string[];
            };
            fontStyle: {
                key: string[];
            };
            enable?: undefined;
            fill?: undefined;
            height?: undefined;
            position?: undefined;
            textAlign?: undefined;
            textVerticalAlign?: undefined;
        };
    } | {
        type: string;
        compact: boolean;
        $properties: {
            textAlign: {
                key: string[];
            };
            textVerticalAlign: {
                key: string[];
            };
            enable?: undefined;
            fill?: undefined;
            height?: undefined;
            position?: undefined;
            fontSize?: undefined;
            lineHeight?: undefined;
            fontColor?: undefined;
            fontWeight?: undefined;
            fontStyle?: undefined;
        };
    })[];
    type: string;
    compact: boolean;
    $layout: (config: any) => any;
};
export default _default;
