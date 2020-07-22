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
import "@mdi/font/css/materialdesignicons.min.css";
export default {
  name: "HospitalOrgChartCdn",
  data: () => ({
    diagram: null,
    editor: null,
    collapsed: true,
    expanded: false,
  }),
  mounted() {
    fromCDN([
      "https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.js",
      "https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.css",
    ]).then(() => {
      // eslint-disable-next-line no-undef
      this.diagram = new dhx.Diagram(this.$refs.diagram, {
        type: "org",
        defaultShapeType: "template",
      });

      this.diagram.addShape("template", {
        template: this.template,
        defaults: {
          height: 115,
          width: 330,
        },
      });

      // eslint-disable-next-line no-undef
      this.editor = new dhx.DiagramEditor(this.$refs.editor, {
        type: "org",
        shapeType: "template",
      });

      this.editor.diagram.addShape("template", {
        template: this.template,
        defaults: {
          name: "Name and First name",
          post: "Position held",
          phone: "(405) 000-00-00",
          mail: "some@mail.com",
          photo: "../common/big_img/big-avatar-1.jpg",
          height: 115,
          width: 330,
        },
        properties: [
          { type: "position" },
          { type: "size" },
          { type: "text", label: "name", property: "name" },
          { type: "text", label: "post", property: "post" },
          { type: "text", label: "phone", property: "phone" },
          { type: "text", label: "email", property: "mail" },
          { type: "img", label: "photo", property: "photo" },
        ],
      });

      this.editor.events.on("ApplyButton", () => {
        this.applyButton();
      });

      this.editor.events.on("ResetButton", () => {
        this.resetButton();
      });

      this.diagram.data.load("./static/medCardShape.json");
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
    template({ photo, name, post, phone, mail }) {
      return `
        <div class="dhx-diagram-demo_personal-card">
          <div class="dhx-diagram-demo_personal-card__container dhx-diagram-demo_personal-card__img-container">
            <img src="${photo}" alt="${name}-${post}"></img>
          </div>
          <div class="dhx-diagram-demo_personal-card__container">
            <h3>${name}</h3>
            <p>${post}</p>
            <span class="dhx-diagram-demo_personal-card__info">
              <i class="mdi mdi-cellphone-android"></i>
              <p>${phone}</p>
            </span>
            <span class="dhx-diagram-demo_personal-card__info">
              <i class="mdi mdi-email-outline"></i>
              <a href="mailto:${mail}" target="_blank">${mail}</a>
            </span>
          </div>
        </div>
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

<style>
  .dhx-diagram-demo_personal-card {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    color: rgba(0, 0, 0, 0.7);
    border: 1px solid #DFDFDF;
    padding: 10px 12px;
  }
  .dhx-diagram-demo_personal-card i {
    color: rgba(0, 0, 0, 0.7);
		height: 20px;
		width: 20px;
		font-size: 18px;
  }
  .dhx-diagram-demo_personal-card__info {
    display: flex;
  }
  .dhx-diagram-demo_personal-card__info a {
    color:#0288D1
  }
  .dhx-diagram-demo_personal-card__container {
    height: 100%;
		width: 100%;
		overflow: hidden;
		position: relative;
  }
  .dhx-diagram-demo_personal-card__container h3, .dhx-diagram-demo_personal-card__container p {
    text-align: left;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    margin: 0 0 4px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .dhx-diagram-demo_personal-card__container i {
    margin-right: 4px;
  }
  .dhx-diagram-demo_personal-card__img-container {
    min-width: 93px;
		width: 93px;
		margin-right: 12px;
  }
  .dhx-diagram-demo_personal-card__img-container img {
    width: inherit;
    height: auto;
  }
</style>
