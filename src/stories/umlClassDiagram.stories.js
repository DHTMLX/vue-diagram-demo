import UmlClassDiagramCdn from "../components/umlClassDiagram/UmlClassDiagramCdn";

export default {
  title: "UML Class Diagram",
};

export const base = () => ({
  components: { UmlClassDiagramCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Basic initialization</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-diagram-demo/blob/master/src/components/umlClassDiagram/UmlClassDiagramCdn.vue"
          target="_blank"
        >
          Source code
        </a>
      </div>
      <UmlClassDiagramCdn></UmlClassDiagramCdn>
    </section>
  `,
});
