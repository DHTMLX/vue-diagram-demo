<template>
  <div class="dhx-container_inner">
    <div id="control" class="dhx_sample-controls" v-show="collapsed">
      <button class="dhx_sample-btn dhx_sample-btn--flat" @click="runEditor()">Edit</button>
    </div>
    <div v-bind:class="classObject">
      <div class="dhx_sample-widget" ref="diagram" v-show="collapsed"></div>
      <div class="dhx_sample-widget" ref="editor" v-show="expanded"></div>
    </div>
  </div>
</template>

<script>
import fromCDN from "from-cdn";
export default {
  name: "UmlClassDiagramCdn",
  data: () => ({
    diagram: null,
    editor: null,
    collapsed: true,
    expanded: false,
    defaults: {
      title: "Title",
      text: ["Text"],
      height: 90,
      width: 140,
      fill: "#CEEFE1",
      stroke: "#0AB169",
      strokeWidth: 2,
    },
  }),
  mounted() {
    fromCDN([
      "https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.js",
      "https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.css",
    ]).then(() => {
      // eslint-disable-next-line no-undef
      this.diagram = new dhx.Diagram(this.$refs.diagram);

      // eslint-disable-next-line no-undef
      this.editor = new dhx.DiagramEditor(this.$refs.editor, {
        controls: { autoLayout: false },
        shapeSections: {
          "custom shapes": ["template"],
          "flowchart shapes": [true],
        },
      });

      this.diagram.addShape("template", {
        template: this.template,
        defaults: this.defaults,
      });

      this.editor.diagram.addShape("template", {
        template: this.template,
        defaults: this.defaults,
      });

      this.editor.events.on("ApplyButton", () => {
        this.applyButton();
      });
      this.editor.events.on("ResetButton", () => {
        this.resetButton();
      });
      this.diagram.data.load("./static/fullHtmlData.json");
    });
  },
  methods: {
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
    template(config) {
      return `
          <section class="template" style="background: ${config.fill}; border: ${config.strokeWidth}px solid ${config.stroke}">
            <h3 style="border-bottom: ${config.strokeWidth}px solid ${config.stroke}">${config.title}</h3>
            <ul><li>${config.text.join("</li><li>")}"</li></ul>
					</section>
        `;
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

<style scoped>
/deep/ .template {
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
}
/deep/ .template h3 {
  text-align: center;
  height: 40px;
  line-height: 40px;
}
/deep/ .template ul {
  padding: 8px 5px 5px 5px;
}
/deep/ .template li {
  text-align: left;
  list-style-type: circle;
  margin: 5px 0 0 20px;
  white-space: nowrap;
}
</style>
