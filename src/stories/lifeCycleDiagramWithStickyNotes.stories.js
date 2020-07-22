import LifeCycleDiagramWithStickyNotesCdn from "../components/lifeCycleDiagramWithStickyNotes/LifeCycleDiagramWithStickyNotesCdn";

export default {
  title: "Life Cycle Diagram With Sticky Notes",
};

export const base = () => ({
  components: { LifeCycleDiagramWithStickyNotesCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Basic initialization</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-diagram-demo/blob/master/src/components/lifeCycleDiagramWithStickyNotes/LifeCycleDiagramWithStickyNotesCdn.vue"
          target="_blank"
        >
          Source code
        </a>
      </div>
      <LifeCycleDiagramWithStickyNotesCdn></LifeCycleDiagramWithStickyNotesCdn>
    </section>
  `,
});
