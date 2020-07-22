<template>
  <div class="dhx-container_inner">
    <div class="dhx_sample-controls">
			<label class="dhx_form-group dhx_radiobutton dhx_form-group--inline dhx_form-group--no-message-holder dhx_form-group dhx_sample-input__wrapper--pl-16">
				<input id="direct" type="radio" name="radio" value="direct" class="dhx_radiobutton__input" @change="runDirect()">
				<span class="dhx_radiobutton__visual-input"></span>
				<span class="dhx_label">Auto layout in direct mode</span>
			</label>
			<label class="dhx_form-group dhx_radiobutton dhx_form-group--inline dhx_form-group--no-message-holder dhx_sample-input__wrapper--pl-16">
				<input  id="edges" type="radio" name="radio" value="edges" class="dhx_radiobutton__input"  @change="runEdges()">
				<span class="dhx_radiobutton__visual-input"></span>
				<span class="dhx_label">Auto layout in edges mode</span>
			</label>
		</div>
		<div class="dhx_sample-container">
			<div class="dhx_sample-container__widget" ref="diagram"></div>
		</div>
  </div>
</template>

<script>
import fromCDN from "from-cdn";
export default {
  name: "AutoplacementCdn",
  data: () => ({
    diagram: null,
  }),
  mounted() {
    fromCDN(["https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.js", "https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.css"]).then(() => {
      // eslint-disable-next-line no-undef
      this.diagram = new dhx.Diagram(this.$refs.diagram);
      this.diagram.data.load("./static/autoplacement.json");
    });
  },
  methods: {
    runDirect() {
      this.diagram.autoPlace({
        mode: "direct"
      });
    },
    runEdges() {
      this.diagram.autoPlace({
        mode: "edges"
      });
    }
  },
  beforeDestroy() {
    if (this.diagram) {
      this.diagram.destructor();
    }
  },
};
</script>
