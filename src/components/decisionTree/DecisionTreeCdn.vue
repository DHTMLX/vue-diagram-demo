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
  name: "DecisionTreeCdn",
  data: () => ({
    diagram: null,
    editor: null,
    collapsed: true,
    expanded: false,
    defaults: {
      rectangle: {
        fill: "#44B3FC",
        stroke: "#44B3FC"
      },
      circle: {
        fill: "#3DA0E3",
        stroke: "#3DA0E3"
      },
      endpoint: {
        fill: "#307DB0",
        stroke: "#307DB0"
      }
    }
  }),
  mounted() {
    fromCDN(["https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.js", "https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.css"]).then(() => {
      // eslint-disable-next-line no-undef
      this.diagram = new dhx.Diagram(this.$refs.diagram, {
				lineGap: 40,
				defaults: this.defaults
      });
      this.diagram.data.load("./static/decisionTree.json");

			// eslint-disable-next-line no-undef
			this.editor = new dhx.DiagramEditor(this.$refs.editor, {
				controls: { autoLayout: false },
			});
      this.editor.events.on("ApplyButton", () => {
				this.applyButton();
			});
			this.editor.events.on("ResetButton", () => {
				this.resetButton();
			});
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
    }
  },
  computed: {
    classObject: function () {
      return {
        'dhx_sample-container__with-editor': this.expanded && !this.collapsed,
        'dhx_sample-container__without-editor': this.collapsed && !this.expanded
      }
    }
  },
  beforeDestroy() {
    if (this.diagram) {
      this.diagram.destructor();
    }
  },
};
</script>
