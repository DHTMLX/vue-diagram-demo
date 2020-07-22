import AutoplacementCdn from "../components/autoplacement/AutoplacementCdn";

export default {
  title: "Autoplacement",
};

export const base = () => ({
  components: { AutoplacementCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Basic initialization</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-diagram-demo/blob/master/src/components/autoplacement/AutoplacementCdn.vue"
          target="_blank"
        >
          Source code
        </a>
      </div>
      <AutoplacementCdn></AutoplacementCdn>
    </section>
  `,
});
