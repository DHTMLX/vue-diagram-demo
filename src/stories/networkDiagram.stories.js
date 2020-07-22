import NetworkDiagramCdn from "../components/networkDiagram/NetworkDiagramCdn";

export default {
  title: "Network Diagram",
};

export const base = () => ({
  components: { NetworkDiagramCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Basic initialization</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-diagram-demo/blob/master/src/components/networkDiagram/NetworkDiagramCdn.vue"
          target="_blank"
        >
          Source code
        </a>
      </div>
      <NetworkDiagramCdn></NetworkDiagramCdn>
    </section>
  `,
});
