<template>
  <div class="dhx-container_inner" v-bind:class="classObject">
    <div class="dhx_sample-controls" v-show="collapsed">
      <button class="dhx_sample-btn dhx_sample-btn--flat" @click="runEditor()">Edit</button>
    </div>
    <div class="dhx_sample-widget overflow_hidden" ref="diagram" v-show="collapsed"></div>
    <div class="dhx_sample-widget" ref="editor" v-show="expanded"></div>
  </div>
</template>

<script>
import fromCDN from "from-cdn";
import { networkData } from "../../public/static/data";
export default {
  name: "DefaultEditorCustomShape",
  data: () => ({
    diagram: null,
    editor: null,
    collapsed: true,
    expanded: false,
    path: "./common/img/network/",
    defaults: {
      width: 160,
      height: 160,
      img: "./common/img/network/desktop.svg",
      text: "Network Card",
      ip: "138.68.41.78",
      preview: {
        scale: 0.8,
      },
    },
  }),
  mounted() {
    fromCDN([
      "https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.js",
      "https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.css",
    ]).then(() => {
      const core = { type: "networkCard", img: this.path + "core.svg" };
      const server = { type: "networkCard", img: this.path + "server.svg" };
      const cloud = { type: "networkCard", img: this.path + "cloud.svg" };
      const user = { type: "networkCard", img: this.path + "fieldworker.svg" };
      const desktop = { type: "networkCard", img: this.path + "desktop.svg" };

      // eslint-disable-next-line no-undef
      this.diagram = new dhx.Diagram(this.$refs.diagram, {
        type: "default",
        lineGap: 20,
      });

      // eslint-disable-next-line no-undef
      this.editor = new dhx.DiagramEditor(this.$refs.editor, {
        type: "default",
        controls: { autoLayout: false },
        shapeSections: {
          "Network Shapes": [core, server, cloud, user, desktop],
        },
        shapeBarWidth: 320,
        lineGap: 20,
      });

      this.diagram.addShape("networkCard", {
        template: this.template,
        defaults: this.defaults,
      });

      this.editor.diagram.addShape("networkCard", {
        template: this.template,
        defaults: this.defaults,
        properties: [
          { type: "arrange" },
          { type: "img", label: "Photo" },
          { type: "text" },
          { type: "text", label: "IP", property: "ip" }
        ]
      });

      this.editor.events.on("ApplyButton", () => {
        this.applyButton();
      });

      this.editor.events.on("ResetButton", () => {
        this.resetButton();
      });

      this.diagram.data.parse(networkData);
    });
  },
  methods: {
    template({ img, text, ip }) {
      return `
        <section class="dhx-diagram-demo_network-card">
          <img src="${img}" alt="${text}"></img>
          <span>${text}</span>
          <span>${ip}</span>
        </section>
      `;
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

<style>
  .dhx-diagram-demo_network-card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #f7f7f7;
    width: 100%;
    height: 100%;
    border: 1px solid #dfdfdf;
    overflow: hidden;
  }
  .dhx-diagram-demo_network-card span {
    font-weight: 300;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    text-align: center;
  }
  .dhx-diagram-demo_network-card span:not(:last-child) {
    font-weight: 500;
    margin-top: 16px;
  }
  .dhx-diagram-demo_network-card img {
    width: 64px;
    height: 64px;
    pointer-events: none;
    border-radius: 50%;
  }
</style>
