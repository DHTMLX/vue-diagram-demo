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
import { groupData } from "../../public/static/data";
export default {
  name: "DefaultEditorGroup",
  data: () => ({
    diagram: null,
    editor: null,
    collapsed: true,
    expanded: false,
    defaults: {
      template: {
        width: 115,
        height: 120,
        text: "description",
      },
    },
  }),
  mounted() {
    fromCDN([
      "https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.js",
      "https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.css",
    ]).then(() => {
      const path = "./common/img/it/";
      const extension = ".png";

      const it_01 = { type: "template", img: path + "it_01" + extension, ...this.defaults.template };
      const it_02 = { type: "template", img: path + "it_02" + extension, ...this.defaults.template };
      const it_03 = { type: "template", img: path + "it_03" + extension, ...this.defaults.template };
      const it_04 = { type: "template", img: path + "it_04" + extension, ...this.defaults.template };
      const it_05 = { type: "template", img: path + "it_05" + extension, ...this.defaults.template };
      const it_06 = { type: "template", img: path + "it_06" + extension, ...this.defaults.template };
      const it_07 = { type: "template", img: path + "it_07" + extension, ...this.defaults.template };
      const it_08 = { type: "template", img: path + "it_08" + extension, ...this.defaults.template };
      const it_09 = { type: "template", img: path + "it_09" + extension, ...this.defaults.template };
      const it_10 = { type: "template", img: path + "it_10" + extension, ...this.defaults.template };
      const it_11 = { type: "template", img: path + "it_11" + extension, ...this.defaults.template };
      const it_12 = { type: "template", img: path + "it_12" + extension, ...this.defaults.template };
      const it_13 = { type: "template", img: path + "it_13" + extension, ...this.defaults.template };
      const it_14 = { type: "template", img: path + "it_14" + extension, ...this.defaults.template };

      const generalGroup = {
        type: "$group",
        width: 390,
        height: 350,
        header: {
          text: "General group",
          closable: true,
          fontColor: "#FFF",
          iconColor: "#FFF",
          fill: "#333",
        },
      };

      const regularGroup = {
        type: "$group",
        width: 390,
        height: 350,
        header: {
          text: "Regular group",
          closable: true,
        },
      };

      // eslint-disable-next-line no-undef
      this.diagram = new dhx.Diagram(this.$refs.diagram, {
        type: "default",
      });

      // eslint-disable-next-line no-undef
      this.editor = new dhx.DiagramEditor(this.$refs.editor, {
        type: "default",
        shapeBarWidth: 330,
        scalePreview: 0.7,
        shapeSections: {
          "Architecture items": [
            it_01, it_02, it_03,
            it_04, it_05, it_06,
            it_07, it_08, it_09,
            it_10, it_11, it_12,
            it_13, it_14,
          ],
          "Groups": [
            generalGroup,
            regularGroup
          ],
        },
      });

      this.diagram.addShape("template", {
        template: this.template,
        defaults: this.defaults,
      });

      this.editor.diagram.addShape("template", {
        template: this.template,
        defaults: this.defaults,
        properties: [
          { type: "arrange" },
          { type: "text" },
        ]
      });

      this.editor.events.on("ApplyButton", () => {
        this.applyButton();
      });

      this.editor.events.on("ResetButton", () => {
        this.resetButton();
      });

      this.diagram.data.parse(groupData);
    });
  },
  methods: {
    template({ img, text }) {
      return `
        <div class="dhx-diagram-demo_group">
          <div class="dhx-diagram-demo_group__image" style="background-image:url(${img});"></div>
          <div class="dhx-diagram-demo_group__text">${text}</div>
        </div>
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
  .dhx-diagram-demo_group {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: hidden;
  }
  .dhx-diagram-demo_group__image {
    height: 64px;
    width: 64px;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .dhx-diagram-demo_group__text {
    overflow: hidden;
    padding-top: 10px;
    text-align: center;
    word-wrap: break-word;
    white-space: pre-wrap;

    font-weight: 500;
    line-height: 20px;
    min-height: 50px;
    width: 100%;
  }
</style>
