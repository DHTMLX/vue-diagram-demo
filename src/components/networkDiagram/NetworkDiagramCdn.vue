<template>
  <div class="dhx-container_inner">
    <div id="control" class="dhx_sample-controls" v-show="collapsed">
      <button class="dhx_sample-btn dhx_sample-btn--flat" @click="runEditor()">Edit</button>
    </div>
    <div v-bind:class="classObject">
      <div class="dhx_sample-container__widget overflow_hidden" ref="diagram" v-show="collapsed"></div>
      <div class="dhx_sample-widget" ref="editor" v-show="expanded"></div>
    </div>
  </div>
</template>

<script>
  import fromCDN from "from-cdn";
  export default {
    name: "NetworkDiagramCdn",
    data: () => ({
      diagram: null,
      editor: null,
      collapsed: true,
      expanded: false,
      defaults: {
				width: 160,
				height: 160,
				img: "../common/img/network_image/desktop.svg",
				text: "Network Card",
				ip: "138.68.41.78",
				preview: {
					scale: 0.8
				}
			}
    }),
    mounted() {
      fromCDN(["https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.js", "https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.css"]).then(() => {
        // eslint-disable-next-line no-undef
        this.diagram = new dhx.Diagram(this.$refs.diagram, {
          lineGap: 20
        });

        // eslint-disable-next-line no-undef
        this.editor = new dhx.DiagramEditor(this.$refs.editor, {
          controls: { autoLayout: false },
          shapeSections: {
            "network shape": ["networkCard"],
            "flowchart shapes": [true],
          },
          lineGap: 20
        });

        this.diagram.addShape("networkCard", {
          template: this.template,
          defaults: this.defaults
        });

        this.editor.diagram.addShape("networkCard", {
          template: this.template,
          defaults: this.defaults,
          properties: [
            { type: "arrange" },
            { type: "img", label: "photo" },
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
        this.diagram.data.load("./static/networkDiagram.json");
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
          <section class="template">
            <img src="${config.img}" alt="${config.text}"></img>
            <span>${config.text}</span>
            <span>${config.ip}</span>
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #F7F7F7;
    width: 100%;
    height: 100%;
    border: 1px solid #DFDFDF;
    overflow: hidden;
  }
  /deep/ .template span {
    font-weight: 300;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    text-align: center;
  }
  /deep/ .template span:not(:last-child) {
    font-weight: 500;
    margin-top: 16px;
  }
  /deep/ .template img {
    width: 64px;
    height: 64px;
    pointer-events: none;
    border-radius: 50%;
  }
</style>
