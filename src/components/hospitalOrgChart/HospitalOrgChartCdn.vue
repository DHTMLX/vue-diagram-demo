<template>
  <div class="dhx-container_inner">
    <div id="control" class="dhx_sample-controls" v-show="collapsed">
      <button class="dhx_sample-btn dhx_sample-btn--flat" @click="runEditor()">Edit</button>
    </div>
    <div v-bind:class="classObject">
      <div class="dhx_sample-container__widget" ref="diagram" v-show="collapsed"  @click="showMenu"></div>
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
      item: {},
      contextMenu: null,
      collapsed: true,
      expanded: false,
      menuData: [
        {
          "type": "menuItem",
          "id": "mail",
          "value": "Mail",
          "icon": "mdi mdi-email"
        },
        {
          "type": "menuItem",
          "id": "call",
          "value": "Call",
          "icon": "mdi mdi-phone"
        },
        {
          "type": "menuItem",
          "id": "site",
          "value": "Open Site",
          "icon": "mdi mdi-open-in-new"
        }
      ]
    }),
    mounted() {
      fromCDN(["https://cdn.dhtmlx.com/suite/edge/suite.js", "https://cdn.dhtmlx.com/suite/edge/suite.css"]).then(() => {
        // eslint-disable-next-line no-undef
        this.contextMenu = new dhx.ContextMenu(null, {
          css: "dhx_widget--bg_gray"
        });

        this.contextMenu.data.parse(this.menuData);
        this.contextMenu.events.on("click", (id) => {
          switch (id) {
            case "mail":
              window.open(`mailto:${this.item.mail}`, "_blank");
              break;
            case "call":
              window.open(`tel:${this.item.phone}`, "_blank");
              break;
            case "site":
              window.open("https://dhtmlx.com/docs/products/dhtmlxDiagram/", "_blank");
              break;
          }
        });
      });

      fromCDN(["https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.js", "https://cdn.dhtmlx.com/diagram/pro/edge/diagramWithEditor.css"]).then(() => {
        // eslint-disable-next-line no-undef
        this.diagram = new dhx.Diagram(this.$refs.diagram, {
          type: "org",
          defaultShapeType: "template"
        });

        this.diagram.addShape("template", {
          template: this.template,
          defaults: {
            height: 115,
            width: 330
          }
        });

        // eslint-disable-next-line no-undef
        this.editor = new dhx.DiagramEditor(this.$refs.editor, {
          type: "org",
          shapeType: "template"
        });

        this.editor.diagram.addShape("template", {
          template: this.template,
          defaults: {
            name: "Name and First name",
            post: "Position held",
            phone: "(405) 000-00-00",
            mail: "some@mail.com",
            photo: "../common/big_img/big-avatar-1.jpg",
            height: 115, width: 330
          },
          properties: [
            { type: "position" },
            { type: "size" },
            { type: "text", label: "name", property: "name" },
            { type: "text", label: "post", property: "post" },
            { type: "text", label: "phone", property: "phone" },
            { type: "text", label: "email", property: "mail" },
            { type: "img", label: "photo",  property: "photo" }
          ]
        });

        this.diagram.events.on("ShapeClick", (id) => {
          this.item = this.diagram.data.getItem(id);
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
			showMenu(e) {
				// eslint-disable-next-line no-undef
				dhx.awaitRedraw().then(() => {
					if (e.target.classList.contains("contextMenu_container")) {
						this.contextMenu.showAt(e.target, "bottom");
					}
				});
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
            <div class="template_container">
              <div class="template_img-container">
                <img src="${config.photo}" alt="${config.name}-${config.post}"></img>
              </div>
              <div class="template_info-container">
                <h3>${config.name}</h3>
                <p>${config.post}</p>
                <span>
                  <img class="template_icon" src="../common/icons/cellphone-android.svg" alt="phone number"></img>
                  <p>${config.phone}</p>
                </span>
                <span>
                  <img class="template_icon" src="../common/icons/email-outline.svg" alt="email"></img>
                  <a style="color:#0288D1" href="mailto:${config.mail}" target="_blank">${config.mail}</a>
                </span>
              </div>
            </div>
            <div class="contextMenu_container">
              <img class="template_icon" src="../common/icons/toggle.svg" alt="toggle"></img>
            </div>
          </section>`
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
    align-items: flex-start;
    justify-content: flex-start;
    background: white;
    color: rgba(0, 0, 0, 0.7);
    border: 1px solid #DFDFDF;
    padding: 10px 0 10px 10px;
  }
  /deep/ .template span {
    display: flex;
  }
  /deep/ .template h3, .template p {
    text-align: left;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    margin: 0 0 4px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /deep/ .template_container {
    height: 100%;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  /deep/.template_img-container {
    min-width: 93px;
    width: 93px;
    margin-right: 12px;
  }
  /deep/ .template_img-container img {
    width: inherit;
    height: auto;
  }
  /deep/ .template_icon {
    height: 20px;
    width: 20px;
    margin-right: 4px;
  }
  /deep/ .contextMenu_container {
    width: 10%;
    cursor: pointer;
  }
  /deep/ .contextMenu_container .template_icon {
    height: 14px;
    width: 4px;
    margin: 0;
  }
</style>
