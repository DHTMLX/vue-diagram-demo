<template>
  <div class="dhx-container_inner">
    <div id="control" class="dhx_sample-controls" v-show="collapsed">
      <button class="dhx_sample-btn dhx_sample-btn--flat" @click="runEditor()">Edit</button>
    </div>
    <div v-bind:class="classObject">
      <div class="dhx_sample-container__widget" ref="diagram" v-show="collapsed"></div>
      <div class="dhx_sample-widget" ref="editor" v-show="expanded"></div>
    </div>
  </div>
</template>

<script>
  import fromCDN from "from-cdn";
  export default {
    name: "LifeCycleDiagramWithStickyNotesCdn",
    data: () => ({
      diagram: null,
      editor: null,
      collapsed: true,
      expanded: false,
      defaultYellow: {
				width: 160,
				height: 160,
				text: "Sticky yellow",
				background: "../common/img/other_image/yellow.svg",
      },
      defaultBlue: {
				width: 160,
				height: 160,
				text: "Sticky blue",
				background: "../common/img/other_image/blue.svg",
			}
    }),
    mounted() {
      fromCDN(["https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.js", "https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.css"]).then(() => {
        // eslint-disable-next-line no-undef
        this.diagram = new dhx.Diagram(this.$refs.diagram);

        // eslint-disable-next-line no-undef
        this.editor = new dhx.DiagramEditor(this.$refs.editor, {
          controls: { autoLayout: false },
          shapeSections: {
            "sticky notes": ["blue", "yellow"],
            "flowchart shapes": [true],
          }
        });

        this.diagram.addShape("yellow", {
          template: this.template,
          defaults: this.defaultYellow
        });

        this.diagram.addShape("blue", {
          template: this.template,
          defaults: this.defaultBlue
        });

        this.editor.diagram.addShape("yellow", {
          template: this.template,
          defaults: this.defaultYellow
        });

        this.editor.diagram.addShape("blue", {
          template: this.template,
          defaults: this.defaultBlue
        });

        this.editor.events.on("ApplyButton", () => {
          this.applyButton();
        });
        this.editor.events.on("ResetButton", () => {
          this.resetButton();
        });
        this.diagram.data.load("./static/stickyNote.json");
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
          <section class="template" style="background-image: url('${config.background}')">
            <span>${config.text}</span>
          </section>
          `
        ;
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

<style scoped>
  /deep/ .template {
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    overflow: hidden;
  }
  /deep/ .template span {
    text-align: center;
    word-wrap: break-word;
    white-space: pre-wrap;
  }
</style>
