import MindmapEditor from "../components/MindmapEditor"

export default {
  title: "Mindmap Editor",
};

export const emotions = () => ({
  components: { MindmapEditor },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Diagram with Editor in mindmap mode</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-diagram-demo/blob/master/src/components/MindmapEditor.vue"
          target="_blank"
        >
          Source code
        </a>
      </div>
      <MindmapEditor></MindmapEditor>
    </section>
  `,
});