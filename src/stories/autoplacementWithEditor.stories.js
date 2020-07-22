import AutoplacementWithEditorCdn from "../components/autoplacementWithEditor/AutoplacementWithEditorCdn";

export default {
  title: "Autoplacement With Editor",
};

export const base = () => ({
  components: { AutoplacementWithEditorCdn },
  template: `
    <section class="dhx-container">
      <div class="dhx-container_header">
        <h3>Basic initialization</h3>
        <a
          class="source-link"
          href="https://github.com/DHTMLX/vue-diagram-demo/blob/master/src/components/autoplacementWithEditor/AutoplacementWithEditorCdn.vue"
          target="_blank"
        >
          Source code
        </a>
      </div>
      <AutoplacementWithEditorCdn></AutoplacementWithEditorCdn>
    </section>
  `,
});
