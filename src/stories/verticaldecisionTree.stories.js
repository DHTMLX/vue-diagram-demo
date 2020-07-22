import VerticaldecisionTreeCdn from "../components/verticaldecisionTree/VerticaldecisionTreeCdn";

export default {
  title: "Vertical decision Tree",
};

export const base = () => ({
  components: { VerticaldecisionTreeCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Basic initialization</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-diagram-demo/blob/master/src/components/verticaldecisionTree/VerticaldecisionTreeCdn.vue"
          target="_blank"
        >
          Source code
        </a>
      </div>
      <VerticaldecisionTreeCdn></VerticaldecisionTreeCdn>
    </section>
  `,
});
