import ActivityDiagramCdn from "../components/activityDiagram/ActivityDiagramCdn";

export default {
  title: "Activity Diagram",
};

export const base = () => ({
  components: { ActivityDiagramCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Basic initialization</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-diagram-demo/blob/master/src/components/activityDiagram/ActivityDiagramCdn.vue"
          target="_blank"
        >
          Source code
        </a>
      </div>
      <ActivityDiagramCdn></ActivityDiagramCdn>
    </section>
  `,
});
