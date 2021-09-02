<template>
  <div class="dhx-container_inner" v-bind:class="classObject">
    <div class="dhx_sample-controls" v-show="collapsed">
      <button class="dhx_sample-btn dhx_sample-btn--flat" @click="runEditor()">Edit</button>
      <button class="dhx_sample-btn dhx_sample-btn--flat" @click="exportPng()">Export PNG</button>
			<button class="dhx_sample-btn dhx_sample-btn--flat" @click="exportPdf()">Export PDF</button>
    </div>
    <div class="dhx_sample-widget overflow_hidden" ref="diagram" v-show="collapsed"></div>
    <div class="dhx_sample-widget" ref="editor" v-show="expanded"></div>
  </div>
</template>

<script>
import fromCDN from "from-cdn";
import { simlaneExport } from "../../public/static/data";
export default {
  name: "DefaultEditorSwimlane",
  data: () => ({
    diagram: null,
    editor: null,
    collapsed: true,
    expanded: false,
    defaults: {
      start: {
        fill: "#F35A4F",
        stroke: "#F35A4F",
        fontColor: "#FFFFFF",
        strokeWidth: 2,
      },
      circle: {
        fill: "#F35A4F",
        stroke: "#F35A4F",
        fontColor: "#FFFFFF",
        strokeWidth: 2,
      },
      rectangle: {
        fill: "#FFFFFF",
        stroke: "#F35A4F",
        fontColor: "#4C4C4C",
        strokeWidth: 2,
      },
    }
  }),
  mounted() {
    fromCDN([
      "https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.js",
      "https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.css",
    ]).then(() => {
      // eslint-disable-next-line no-undef
      this.diagram = new dhx.Diagram(this.$refs.diagram, {
				type: "default",
				defaults: this.defaults,
      });

      // eslint-disable-next-line no-undef
      this.editor = new dhx.DiagramEditor(this.$refs.editor, {
        type: "default",
      });

      this.editor.events.on("ApplyButton", () => {
        this.applyButton();
      });

      this.editor.events.on("ResetButton", () => {
        this.resetButton();
      });

      this.diagram.data.parse(simlaneExport);
    });
  },
  methods: {
    exportPdf() {
      this.diagram.export.pdf();
    },
    exportPng() {
      this.diagram.export.png();
    },
    runEditor() {
      this.expanded = true;
      this.collapsed = false;
      this.editor.import(this.diagram);
    },
    applyButton() {
      this.collapsed = true;
      this.expanded = false;
      this.diagram.data.parse(this.editor.serialize());
    },
    resetButton() {
      this.collapsed = true;
      this.expanded = false;
    },
  },
  computed: {
    classObject: function () {
      return {
        "dhx_sample-container__with-editor": this.expanded && !this.collapsed,
        "dhx_sample-container__without-editor": this.collapsed && !this.expanded,
      };
    },
  },
  beforeDestroy() {
    if (this.diagram) {
      this.diagram.destructor();
    }
  },
};
</script>
