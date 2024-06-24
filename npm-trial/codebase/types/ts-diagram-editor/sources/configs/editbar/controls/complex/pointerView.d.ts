declare const _default: (locale: any) => {
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
export default _default;
