declare const _default: (locale: any) => {
    avatar: {
        type: string;
        key: string;
        icon: string;
        $handler: ({ id, value, editor, key }: {
            id: any;
            value: any;
            editor: any;
            key: any;
        }) => void;
        $setValue: ({ control, value }: {
            control: any;
            value: any;
        }) => void;
        $layout: (config: any) => any;
    };
    button: {
        type: string;
        $layout: (config: any) => any;
    };
    colorpicker: {
        type: string;
        key: string;
        $layout: (config: any) => any;
        $handler: ({ id, value, editor, key, control }: {
            id: any;
            value: any;
            editor: any;
            key: any;
            control: any;
        }) => void;
        $setValue: ({ control, value }: {
            control: any;
            value: any;
        }) => void;
    };
    combo: {
        type: string;
        options: any[];
        $layout: (config: any) => any;
        key: string;
        $handler: ({ id, value, editor, key, control }: {
            id: any;
            value: any;
            editor: any;
            key: any;
            control: any;
        }) => void;
        $setValue: ({ control, value }: {
            control: any;
            value: any;
        }) => void;
    };
    checkbox: {
        type: string;
        $setValue: ({ control, value }: {
            control: any;
            value: any;
        }) => void;
        $layout: (config: any) => any;
        $handler: ({ id, value, editor, key }: {
            id: any;
            value: any;
            editor: any;
            key: any;
        }) => void;
        key: string;
    };
    checkboxGroup: {
        type: string;
        $layout: (config: any) => any;
        key: string;
        $handler: ({ id, value, editor, key, control }: {
            id: any;
            value: any;
            editor: any;
            key: any;
            control: any;
        }) => void;
        $setValue: ({ control, value }: {
            control: any;
            value: any;
        }) => void;
    };
    container: {
        type: string;
        $layout: (config: any) => any;
    };
    datepicker: {
        type: string;
        key: string;
        $layout: (config: any) => any;
        $handler: ({ id, value, editor, key, control }: {
            id: any;
            value: any;
            editor: any;
            key: any;
            control: any;
        }) => void;
        $setValue: ({ control, value }: {
            control: any;
            value: any;
        }) => void;
    };
    fieldset: {
        type: string;
        compact: boolean;
        $layout: (config: any) => any;
    };
    input: {
        type: string;
        key: string;
        $handler: ({ id, value, editor, key, control }: {
            id: any;
            value: any;
            editor: any;
            key: any;
            control: any;
        }) => void;
        $setValue: ({ control, value }: {
            control: any;
            value: any;
        }) => void;
        $layout: (config: any) => any;
    };
    radioGroup: {
        type: string;
        $layout: (config: any) => any;
        key: string;
        $handler: ({ id, value, editor, key, control }: {
            id: any;
            value: any;
            editor: any;
            key: any;
            control: any;
        }) => void;
        $setValue: ({ control, value }: {
            control: any;
            value: any;
        }) => void;
    };
    select: {
        type: string;
        options: any[];
        $layout: (config: any) => any;
        key: string;
        $handler: ({ id, value, editor, key, control }: {
            id: any;
            value: any;
            editor: any;
            key: any;
            control: any;
        }) => void;
        $setValue: ({ control, value }: {
            control: any;
            value: any;
        }) => void;
    };
    slider: {
        type: string;
        $layout: (config: any) => any;
        key: string;
        $handler: ({ id, value, editor, key, control }: {
            id: any;
            value: any;
            editor: any;
            key: any;
            control: any;
        }) => void;
        $setValue: ({ control, value }: {
            control: any;
            value: any;
        }) => void;
    };
    spacer: {
        type: string;
        $layout: () => {
            type: string;
        };
    };
    textarea: {
        type: string;
        height: number;
        $layout: (config: any) => any;
        key: string;
        $handler: ({ id, value, editor, key, control }: {
            id: any;
            value: any;
            editor: any;
            key: any;
            control: any;
        }) => void;
        $setValue: ({ control, value }: {
            control: any;
            value: any;
        }) => void;
    };
    timepicker: {
        type: string;
        key: string;
        $layout: (config: any) => any;
        $handler: ({ id, value, editor, key, control }: {
            id: any;
            value: any;
            editor: any;
            key: any;
            control: any;
        }) => void;
        $setValue: ({ control, value }: {
            control: any;
            value: any;
        }) => void;
    };
    toggle: {
        type: string;
        $handler: ({ id, value, editor, key }: {
            id: any;
            value: any;
            editor: any;
            key: any;
        }) => void;
        $setValue: ({ control, value }: {
            control: any;
            value: any;
        }) => void;
        $layout: (config: any) => any;
        key: string;
    };
    toggleGroup: {
        type: string;
        $setValue: ({ control, value }: {
            control: any;
            value: any;
        }) => void;
        $handler: ({ id, value, editor, key }: {
            id: any;
            value: any;
            editor: any;
            key: any;
        }) => void;
        $layout: (config: any) => any;
        key: string;
    };
    arrange: {
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
    border: {
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
    position: {
        label: any;
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
        type: string;
        compact: boolean;
        $layout: (config: any) => any;
    };
    size: {
        label: any;
        cols: ({
            type: string;
            key: string;
            inputType: string;
            min: number;
            value: number;
            width: string;
            padding: string;
            icon: string;
        } | {
            type: string;
            key: string;
            inputType: string;
            min: number;
            value: number;
            width: string;
            icon: string;
            padding?: undefined;
        })[];
        type: string;
        compact: boolean;
        $layout: (config: any) => any;
    };
    gridStep: {
        label: any;
        inputType: string;
        icon: string;
        min: number;
        wrap: boolean;
        key: any;
        $handler: ({ editor, value, control }: {
            editor: any;
            value: any;
            control: any;
        }) => void;
        $setValue: ({ control, editor }: {
            control: any;
            editor: any;
        }) => void;
        type: string;
        $layout: (config: any) => any;
    };
    textStyle: {
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
    textAlign: {
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
    pointerView: {
        label: any;
        align: string;
        cols: ({
            type: string;
            key: string;
            padding: string;
            readOnly: boolean;
            itemHeight: number;
            width: string;
            options: string[];
            template: ({ id }: {
                id: any;
            }) => "\n\t\t\t\t\t\t<div style=\"display:flex; align-items:center; height:100%; width:100%;\">\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\t\twidth: 0;\n\t\t\t\t\t\t\t\t\theight: 0;\n\t\t\t\t\t\t\t\t\tborder: 0 solid transparent;\n\t\t\t\t\t\t\t\t\tborder-top-width: 6px;\n\t\t\t\t\t\t\t\t\tborder-bottom-width: 6px;\n\t\t\t\t\t\t\t\t\tborder-right: 6px solid var(--dhx-font-color-secondary);\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div style=\"border:1px solid var(--dhx-font-color-secondary); height:0; width:100%;\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t" | "\n\t<div style=\"display:flex; align-items:center; height:100%; width:100%;\">\n\t\t<div style=\"border:1px solid var(--dhx-font-color-secondary); height:0; width:100%;\"></div>\n\t</div>\n";
        } | {
            type: string;
            key: string;
            readOnly: boolean;
            itemHeight: number;
            width: string;
            options: string[];
            template: ({ id }: {
                id: any;
            }) => "\n\t<div style=\"display:flex; align-items:center; height:100%; width:100%;\">\n\t\t<div style=\"border:1px solid var(--dhx-font-color-secondary); height:0; width:100%;\"></div>\n\t</div>\n" | "\n\t\t\t\t\t\t<div style=\"display:flex; align-items:center; height:100%; width:100%;\">\n\t\t\t\t\t\t\t<div style=\"border:1px solid var(--dhx-font-color-secondary); height:0; width:100%;\"></div>\n\t\t\t\t\t\t\t<div\n\t\t\t\t\t\t\t\tstyle=\"\n\t\t\t\t\t\t\t\t\twidth: 0;\n\t\t\t\t\t\t\t\t\theight: 0;\n\t\t\t\t\t\t\t\t\tborder: 0 solid transparent;\n\t\t\t\t\t\t\t\t\tborder-bottom-width: 6px;\n\t\t\t\t\t\t\t\t\tborder-top-width: 6px;\n\t\t\t\t\t\t\t\t\tborder-left: 6px solid var(--dhx-font-color-secondary);\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t";
            padding?: undefined;
        })[];
        type: string;
        compact: boolean;
        $layout: (config: any) => any;
    };
    lineShape: {
        label: any;
        align: string;
        rows: {
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
        }[];
        type: string;
        compact: boolean;
        $layout: (config: any) => any;
    };
    header: {
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
    headerPosition: {
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
    headerCommon: {
        align: string;
        cols: ({
            type: string;
            key: string;
            padding: string;
            icon: string;
            offIcon: string;
            text: string;
            offText: string;
            full: boolean;
            width: number;
            css?: undefined;
            inputType?: undefined;
            value?: undefined;
            min?: undefined;
        } | {
            type: string;
            key: string;
            css: string;
            padding: string;
            width: string;
            icon?: undefined;
            offIcon?: undefined;
            text?: undefined;
            offText?: undefined;
            full?: undefined;
            inputType?: undefined;
            value?: undefined;
            min?: undefined;
        } | {
            type: string;
            key: string;
            inputType: string;
            icon: string;
            value: number;
            min: number;
            width: number;
            padding?: undefined;
            offIcon?: undefined;
            text?: undefined;
            offText?: undefined;
            full?: undefined;
            css?: undefined;
        })[];
        type: string;
        compact: boolean;
        $layout: (config: any) => any;
    };
};
export default _default;
