import DefaultEditorAutoplacement from "../components/DefaultEditorAutoplacement";
import DefaultEditorCustomShape from "../components/DefaultEditorCustomShape";
import DefaultEditorGroup from "../components/DefaultEditorGroup";
import DefaultEditorSwimlane from "../components/DefaultEditorSwimlane";

export default {
  title: "Default Editor",
};

export const Autoplacement = () => ({
  components: { DefaultEditorAutoplacement },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Diagram with Editor in default mode. Auto layout button</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-diagram-demo/blob/master/src/components/DefaultEditorAutoplacement.vue"
          target="_blank"
        >
          Source code
        </a>
      </div>
      <DefaultEditorAutoplacement></DefaultEditorAutoplacement>
    </section>
  `,
});

export const CustomShape = () => ({
  components: { DefaultEditorCustomShape },
  template: `
    <section class="dhx-container">
    <div class="dhx-container_header">
        <h3>Diagram with Editor in default mode. Custom shapes</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-diagram-demo/blob/master/src/components/DefaultEditorCustomShape.vue"
          target="_blank"
        >
          Source code
        </a>
    </div>
    <DefaultEditorCustomShape></DefaultEditorCustomShape>
    </section>
  `,
});

export const Group = () => ({
  components: { DefaultEditorGroup },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Diagram with Editor in default mode. Groups to organize shapes</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-diagram-demo/blob/master/src/components/DefaultEditorGroup.vue"
          target="_blank"
        >
          Source code
        </a>
      </div>
      <DefaultEditorGroup></DefaultEditorGroup>
    </section>
  `,
});

export const Swimlane = () => ({
  components: { DefaultEditorSwimlane },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Diagram with Editor in default mode. Swimlane and export to pdf/png</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-diagram-demo/blob/master/src/components/DefaultEditorSwimlane.vue"
          target="_blank"
        >
          Source code
        </a>
      </div>
      <DefaultEditorSwimlane></DefaultEditorSwimlane>
    </section>
  `,
});
