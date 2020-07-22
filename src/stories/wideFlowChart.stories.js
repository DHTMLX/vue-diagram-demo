import WideFlowChartCdn from "../components/wideFlowChart/WideFlowChartCdn";

export default {
  title: "Wide Flow Chart",
};

export const base = () => ({
  components: { WideFlowChartCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Basic initialization</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-diagram-demo/blob/master/src/components/wideFlowChart/WideFlowChartCdn.vue"
          target="_blank"
        >
          Source code
        </a>
      </div>
      <WideFlowChartCdn></WideFlowChartCdn>
    </section>
  `,
});
