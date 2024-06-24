declare const _default: (locale: any) => {
    default: {
        $default: {
            type: string;
        }[];
        $shape: ({ item }: {
            item: any;
        }) => ({
            type: string;
            key?: undefined;
            label?: undefined;
            wrap?: undefined;
        } | {
            type: string;
            key: string;
            label: any;
            wrap: boolean;
        } | {
            type: string;
            label: any;
            wrap: boolean;
            key?: undefined;
        })[];
        $group: ({
            type: string;
            $properties: {
                angle: {
                    hidden: boolean;
                };
                stroke?: undefined;
                strokeType?: undefined;
                strokeWidth?: undefined;
            };
            key?: undefined;
            label?: undefined;
            wrap?: undefined;
        } | {
            type: string;
            $properties?: undefined;
            key?: undefined;
            label?: undefined;
            wrap?: undefined;
        } | {
            type: string;
            key: string[];
            label: any;
            wrap: boolean;
            $properties?: undefined;
        } | {
            type: string;
            $properties: {
                stroke: {
                    key: string[];
                };
                strokeType: {
                    key: string[];
                    options: string[];
                };
                strokeWidth: {
                    key: string[];
                };
                angle?: undefined;
            };
            key?: undefined;
            label?: undefined;
            wrap?: undefined;
        })[];
        $swimlane: ({
            type: string;
            $properties: {
                angle: {
                    hidden: boolean;
                };
                enable?: undefined;
                fill?: undefined;
                height?: undefined;
                stroke?: undefined;
                strokeType?: undefined;
                strokeWidth?: undefined;
            };
            label?: undefined;
            key?: undefined;
            wrap?: undefined;
        } | {
            type: string;
            $properties?: undefined;
            label?: undefined;
            key?: undefined;
            wrap?: undefined;
        } | {
            type: string;
            label: any;
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
                angle?: undefined;
                stroke?: undefined;
                strokeType?: undefined;
                strokeWidth?: undefined;
            };
            key?: undefined;
            wrap?: undefined;
        } | {
            type: string;
            key: string[];
            label: any;
            wrap: boolean;
            $properties?: undefined;
        } | {
            type: string;
            $properties: {
                stroke: {
                    key: string[];
                };
                strokeType: {
                    key: string[];
                    options: string[];
                };
                strokeWidth: {
                    key: string[];
                };
                angle?: undefined;
                enable?: undefined;
                fill?: undefined;
                height?: undefined;
            };
            label?: undefined;
            key?: undefined;
            wrap?: undefined;
        })[];
        $line: ({
            type: string;
            label: any;
        } | {
            type: string;
            label?: undefined;
        })[];
        $lineTitle: ({
            type: string;
            key: string;
            label: any;
            wrap: boolean;
            $properties?: undefined;
        } | {
            type: string;
            key?: undefined;
            label?: undefined;
            wrap?: undefined;
            $properties?: undefined;
        } | {
            type: string;
            $properties: {
                textVerticalAlign: {
                    hidden: boolean;
                };
            };
            key?: undefined;
            label?: undefined;
            wrap?: undefined;
        })[];
    };
    org: {
        $default: {
            type: string;
        }[];
        $shape: ({ item }: {
            item: any;
        }) => ({
            type: string;
            key?: undefined;
            label?: undefined;
            wrap?: undefined;
        } | {
            type: string;
            key: string;
            label: any;
            wrap: boolean;
        } | {
            type: string;
            label: any;
            wrap: boolean;
            key?: undefined;
        })[];
    };
    mindmap: {
        $default: {
            type: string;
        }[];
        $shape: ({ item }: {
            item: any;
        }) => ({
            type: string;
            key?: undefined;
            label?: undefined;
            wrap?: undefined;
        } | {
            type: string;
            key: string;
            label: any;
            wrap: boolean;
        } | {
            type: string;
            label: any;
            wrap: boolean;
            key?: undefined;
        })[];
    };
};
export default _default;
