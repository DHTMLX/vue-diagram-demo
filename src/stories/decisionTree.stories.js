import DecisionTreeCdn from "../components/decisionTree/DecisionTreeCdn";

export default {
  title: "Decision Tree",
};

export const base = () => ({
  components: { DecisionTreeCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Basic initialization</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-diagram-demo/blob/master/src/components/decisionTree/DecisionTreeCdn.vue"
          target="_blank"
        >
          Source code
        </a>
      </div>
      <DecisionTreeCdn></DecisionTreeCdn>
    </section>
  `,
});
