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
import { medicalWorkers } from "../../public/static/data";
export default {
  name: "OrgChartEditorCustomShape",
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

      // eslint-disable-next-line no-undef
      this.editor = new dhx.DiagramEditor(this.$refs.editor, {
        type: "org",
        shapeType: "template",
        controls: {
          gridStep: false,
        },
      });

      this.diagram.addShape("template", {
        template: this.template,
        defaults: {
          height: 115,
          width: 330,
        },
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
          { type: "text", label: "Name", property: "name" },
          { type: "text", label: "Post", property: "post" },
          { type: "text", label: "Phone", property: "phone" },
          { type: "text", label: "Mail", property: "mail" },
          { type: "img", label: "Photo", property: "photo" },
        ],
      });

      this.editor.events.on("ApplyButton", () => {
        this.applyButton();
      });

      this.editor.events.on("ResetButton", () => {
        this.resetButton();
      });

      this.diagram.data.parse(medicalWorkers);
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
    template({ name, photo, post, phone, mail }) {
      return `
          <div class="dhx_diagram_template_a_box dhx_diagram_template_a">
            <div class="dhx_diagram_template_a__inside">
              <div class="dhx_diagram_template_a__picture" style="background-image: url(${photo});"></div>
              <div class="dhx_diagram_template_a__body">
                <div class="dhx_diagram_template_a__title">${name}</div>
                <div class="dhx_diagram_template_a__row">
                  <span class="dhx_diagram_template_a__text">${post}</span>
                </div>
                <div class="dhx_diagram_template_a__row">
                  <span class="dhx_diagram_template_a__icon mdi mdi-cellphone-android"></span>
                  <span class="dhx_diagram_template_a__text">${phone}</span>
                </div>
                <div class="dhx_diagram_template_a__row">
                  <span class="dhx_diagram_template_a__icon mdi mdi-email-outline"></span>
                  <span class="dhx_diagram_template_a__text">
                    <a class="dhx_diagram_template_a__link" href="mailto:${mail}" target="_blank">${mail}</a>
                  </span>
                </div>
              </div>
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
.dhx_diagram_template_a_box {
  background-color: transparent;
}
.dhx_diagram_template_a_box {
  padding: 0;
  border: 1px solid #dfdfdf;
  background-color: #fff;
  overflow: hidden;
}
.dhx_diagram_template_a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  height: 100%;
  padding: 12px;
}
.dhx_diagram_template_a__inside {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}
.dhx_diagram_template_a__picture {
  width: 90px;
  min-width: 90px;
  background: center center/cover no-repeat #f7f7f7;
}
.dhx_diagram_template_a__picture:before {
  content: "";
  display: block;
  padding-top: 100%;
}
.dhx_diagram_template_a__body {
  padding-left: 12px;
  min-width: 200px;
}
.dhx_diagram_template_a__title,
.dhx_diagram_template_a__text {
  font: normal 14px/20px Roboto, sans-serif;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.dhx_diagram_template_a__title {
  text-align: start;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
}
.dhx_diagram_template_a__row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 4px 0;
}
.dhx_diagram_template_a__icon {
  font-size: 18px;
  margin-right: 4px;
  color: rgba(0, 0, 0, 0.7);
}
.dhx_diagram_template_a__text {
  color: rgba(0, 0, 0, 0.7);
}
.dhx_diagram_template_a__link {
  color: #0288d1;
}
</style>
