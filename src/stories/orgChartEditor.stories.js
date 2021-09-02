import OrgChartEditor from "../components/OrgChartEditor";
import OrgChartEditorCustomShape from "../components/OrgChartEditorCustomShape";

export default {
  title: "Org Chart Editor",
};

export const imgCard = () => ({
  components: { OrgChartEditor },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Diagram with Editor in org chart mode</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-diagram-demo/blob/master/src/components/OrgChartEditor.vue"
          target="_blank"
        >
          Source code
        </a>
      </div>
      <OrgChartEditor></OrgChartEditor>
    </section>
  `,
});

export const customChape = () => ({
  components: { OrgChartEditorCustomShape },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Diagram with Editor in org chart mode. Custom shapes</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-diagram-demo/blob/master/src/components/OrgChartEditorCustomShape.vue"
          target="_blank"
        >
          Source code
        </a>
      </div>
      <OrgChartEditorCustomShape></OrgChartEditorCustomShape>
    </section>
  `,
});